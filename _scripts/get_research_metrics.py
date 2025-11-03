import plotly.graph_objects as go
import plotly.express as px
from datetime import datetime
import bibtexparser
from collections import defaultdict
from serpapi import GoogleSearch
import json
import os

# =============================================================================
# Configuration
# =============================================================================
LANGUAGE = "en"
USER_ID = "ZOk5zccAAAAJ"
API_KEY = "f6fa34857d56bc113aae074684f8217c214b76d9dc61c8d10e9beb014e33945f"
BIBFILE = "../_bibliography/papers.bib"
OUTPUT_DIR = "../assets/plotly/"

# Ensure output folder exists
os.makedirs(OUTPUT_DIR, exist_ok=True)
# =============================================================================
# Google Scholar metrics
# =============================================================================
def get_google_scholar_data(param_user_id, param_api_key):
    params = {
        "engine": "google_scholar_author",  # Search engine
        "author_id": param_user_id,               # Author ID
        "api_key": param_api_key,                 # SerpAPI key
        "hl": "en"                          # Language
    }
    # ====================================================================

    try:
        # Create and execute search
        search = GoogleSearch(params)
        results = search.get_dict()
        
        # *** DIAGNÓSTICO (mantido para segurança) ***
        if 'error' in results:
            print(f"ERRO DE API DETECTADO: {results['error']}")
            return 0, 0, 0, {}

        # Extração de Dados
        citation_data = results.get('cited_by', {})
        metrics_table = citation_data.get('table', [])

        if metrics_table:
            total_citations = metrics_table[0].get('citations', {}).get('all', 0)
            h_index = metrics_table[1].get('h_index', {}).get('all', 0)
            i10_index = metrics_table[2].get('i10_index', {}).get('all', 0)
        else:
            total_citations = 0
            h_index = 0
            i10_index = 0

        # Citações por Ano
        citations_per_year_list = citation_data.get('graph', [])
        citations_per_year = {
            item['year']: item['citations'] for item in citations_per_year_list
        }

        print(f"Total Citations: {total_citations}" )
        print(f"h-index: {h_index}" )
        print(f"i10-index: {i10_index}" )
        
        return total_citations, h_index, i10_index, citations_per_year
        
    except Exception as e:
        print(f"ERRO CRÍTICO (Conexão ou Código): {e}")
        return 0, 0, 0, {}  
# =============================================================================
# Bibtex parser
# =============================================================================
def get_info_from_bib_file(path):
    # Load the .bib file
    with open(path, 'r') as bibfile:
        bib_database = bibtexparser.load(bibfile)

    # Initialize counters
    publication_count = defaultdict(lambda: {'journal': 0, 'conference': 0, 'unpublished': 0})
    
    # Process each entry in the .bib file
    for entry in bib_database.entries:
        year = entry.get('year', 'Unknown')
        entry_type = entry.get('ENTRYTYPE', '').lower()

        if entry_type in ['inproceedings', 'conference', 'proceedings']:
            pub_type = 'conference'
        elif entry_type in ['article', 'journal']:
            pub_type = 'journal'
        elif entry_type in ['unpublished']:
            pub_type = 'unpublished'
        else:
            continue

        publication_count[year][pub_type] += 1

    # Prepare data for plotting
    years = sorted(publication_count.keys())
    journals = [publication_count[year]['journal'] for year in years]
    conferences = [publication_count[year]['conference'] for year in years]
    unpublished = [publication_count[year]['unpublished'] for year in years]
    
    # Calculate total number of conference and journal publications
    total_journal = sum(journals)
    total_conference = sum(conferences)
    total_unpublished = sum(unpublished)
    
    return years, journals, conferences, unpublished, total_journal, total_conference, total_unpublished
# =============================================================================
# Plotly plots
# =============================================================================
def plot_citations_per_year(citations_per_year, output_path):
    years = list(citations_per_year.keys())
    citations = list(citations_per_year.values())

    fig = go.Figure(data=[
        go.Bar(x=years, y=citations, marker_color="steelblue")
    ])
    fig.update_layout(
        title="Citations per Year",
        xaxis_title="Year",
        yaxis_title="Citations",
        template="plotly_white",
        height=400,
        margin=dict(l=40, r=40, t=60, b=40)
    )
    fig.write_html(output_path, include_plotlyjs='cdn', full_html=False)

def plot_publications_per_year(years, journals, conferences, output_path, language):
    if language == 'pt':
        labels = ["Periódicos", "Conferências"]
        title = "Publicações por Ano"
        ytitle = "Publicações"
    else:
        labels = ["Journals", "Conferences"]
        title = "Publications per Year"
        ytitle = "Publications"

    fig = go.Figure()
    fig.add_bar(x=years, y=journals, name=labels[0], marker_color="indianred")
    fig.add_bar(x=years, y=conferences, name=labels[1], marker_color="darkorange")

    fig.update_layout(
        barmode='stack',
        title=title,
        xaxis_title="Year",
        yaxis_title=ytitle,
        template="plotly_white",
        height=400,
        margin=dict(l=40, r=40, t=60, b=40)
    )
    fig.write_html(output_path, include_plotlyjs='cdn', full_html=False)
# =============================================================================
# Main execution
# =============================================================================
def main():
    total_citations, h_index, i10_index, citations_per_year = get_google_scholar_data(USER_ID, API_KEY)
    years, journals, conferences, unpublished, total_journals, total_conferences, total_unpublished = get_info_from_bib_file(BIBFILE)

    # Paths
    cite_path = os.path.join(OUTPUT_DIR, "citations_per_year.html")
    pub_path = os.path.join(OUTPUT_DIR, "publications_per_year.html")
    summary_path = os.path.join(OUTPUT_DIR, "metrics_summary.json")

    # Plots
    plot_citations_per_year(citations_per_year, cite_path)
    plot_publications_per_year(years, journals, conferences, pub_path, LANGUAGE)

    # Save metrics summary (optional)
    metrics_summary = {
        "total_citations": total_citations,
        "h_index": h_index,
        "i10_index": i10_index,
        "total_journal_pubs": total_journals,
        "total_conference_pubs": total_conferences,
        "last_update": datetime.now().strftime("%Y-%m-%d"),
    }
    with open(summary_path, "w") as f:
        json.dump(metrics_summary, f, indent=2)

    print("✅ Interactive plots and metrics generated in:", OUTPUT_DIR)

if __name__ == "__main__":
    main()