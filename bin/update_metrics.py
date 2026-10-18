#!/usr/bin/env python3
"""Collect research metrics and write them to _data/metrics.json.

Sources:
  - OpenAlex (always, no key): citations, h-index, i10-index, works and
    citations received per year (summed from each work's counts_by_year).
  - Dimensions (always, no key): total citations, summed per DOI.
  - Scopus (optional): needs SCOPUS_API_KEY and, outside the institutional
    network, SCOPUS_INSTTOKEN.
  - Web of Science (optional): needs WOS_API_KEY (WoS Starter API).

A source that fails keeps the values from the previous run, so a temporary
API outage never wipes the numbers shown on the site.
Uses only the Python standard library.
"""

import datetime
import json
import os
import sys
import time
import urllib.parse
import urllib.request

OPENALEX_AUTHOR = "A5035302921"
SCOPUS_AUTHOR = "57219424467"
WOS_RESEARCHER_ID = "AAM-8131-2021"
DIMENSIONS_AUTHOR = "ur.07610446311.08"

PROFILES = {
    "openalex": f"https://openalex.org/{OPENALEX_AUTHOR}",
    "scopus": f"https://www.scopus.com/authid/detail.uri?authorId={SCOPUS_AUTHOR}",
    "wos": f"https://www.webofscience.com/wos/author/record/{WOS_RESEARCHER_ID}",
    "dimensions": f"https://app.dimensions.ai/details/entities/publication/author/{DIMENSIONS_AUTHOR}",
}

OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "_data", "metrics.json")


def get_json(url, headers=None, retries=3):
    request = urllib.request.Request(url, headers={"User-Agent": "lgcosta.com metrics", **(headers or {})})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return json.load(response)
        except Exception:
            if attempt == retries - 1:
                raise
            time.sleep(2 * (attempt + 1))


def h_index(citations):
    ranked = sorted(citations, reverse=True)
    return sum(1 for i, c in enumerate(ranked, start=1) if c >= i)


def fetch_openalex():
    works, cursor = [], "*"
    while cursor:
        params = urllib.parse.urlencode(
            {
                "filter": f"authorships.author.id:{OPENALEX_AUTHOR}",
                "select": "doi,cited_by_count,counts_by_year",
                "per-page": 200,
                "cursor": cursor,
            }
        )
        data = get_json(f"https://api.openalex.org/works?{params}")
        works += data["results"]
        cursor = data["meta"].get("next_cursor") if data["results"] else None

    # The author-level counts_by_year counts citations of works *published* in
    # each year; citations *received* per year must be summed from the works.
    per_year = {}
    for work in works:
        for entry in work.get("counts_by_year") or []:
            per_year[entry["year"]] = per_year.get(entry["year"], 0) + entry["cited_by_count"]

    citations = [w["cited_by_count"] for w in works]
    if per_year:
        years = range(min(per_year), datetime.date.today().year + 1)
        per_year = {str(y): per_year.get(y, 0) for y in years}

    return {
        "citations": sum(citations),
        "h_index": h_index(citations),
        "i10_index": sum(1 for c in citations if c >= 10),
        "documents": len(works),
        "citations_per_year": per_year,
        "dois": sorted({w["doi"].replace("https://doi.org/", "") for w in works if w.get("doi")}),
    }


def fetch_dimensions(dois):
    total = 0
    for doi in dois:
        data = get_json(f"https://metrics-api.dimensions.ai/doi/{urllib.parse.quote(doi)}")
        total += data.get("times_cited") or 0
    return {"citations": total}


def fetch_scopus():
    key = os.environ.get("SCOPUS_API_KEY")
    if not key:
        return None
    headers = {"X-ELS-APIKey": key, "Accept": "application/json"}
    if os.environ.get("SCOPUS_INSTTOKEN"):
        headers["X-ELS-Insttoken"] = os.environ["SCOPUS_INSTTOKEN"]
    data = get_json(
        f"https://api.elsevier.com/content/author/author_id/{SCOPUS_AUTHOR}?view=METRICS",
        headers,
    )
    author = data["author-retrieval-response"][0]
    core = author["coredata"]
    return {
        "citations": int(core["citation-count"]),
        "h_index": int(author["h-index"]),
        "documents": int(core["document-count"]),
    }


def fetch_wos():
    key = os.environ.get("WOS_API_KEY")
    if not key:
        return None
    total, documents, page = 0, 0, 1
    while True:
        params = urllib.parse.urlencode({"q": f"AI=({WOS_RESEARCHER_ID})", "limit": 50, "page": page})
        data = get_json(f"https://api.clarivate.com/apis/wos-starter/v1/documents?{params}", {"X-ApiKey": key})
        hits = data.get("hits", [])
        for doc in hits:
            documents += 1
            total += sum(c.get("count", 0) for c in doc.get("citations", []) if c.get("db") == "WOS")
        if page * 50 >= data.get("metadata", {}).get("total", 0) or not hits:
            break
        page += 1
    return {"citations": total, "documents": documents}


def main():
    try:
        with open(OUTPUT, encoding="utf-8") as f:
            previous = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        previous = {}

    result = {"profiles": PROFILES}
    failures = []

    try:
        openalex = fetch_openalex()
    except Exception as error:
        failures.append(f"openalex: {error}")
        openalex = previous.get("openalex")
    dois = (openalex or {}).pop("dois", None) or []
    result["openalex"] = openalex

    for name, fetch in (
        ("dimensions", lambda: fetch_dimensions(dois) if dois else None),
        ("scopus", fetch_scopus),
        ("wos", fetch_wos),
    ):
        try:
            result[name] = fetch() or previous.get(name)
        except Exception as error:
            failures.append(f"{name}: {error}")
            result[name] = previous.get(name)

    sources = {k: v for k, v in result.items() if k != "profiles" and v}
    if not sources:
        sys.exit("No metrics collected: " + "; ".join(failures))

    # Only bump the date when the numbers changed, so unchanged days don't commit.
    result = {k: v for k, v in result.items() if v is not None}
    comparable = lambda d: {k: v for k, v in d.items() if k != "updated"}
    changed = comparable(result) != comparable(previous)
    result["updated"] = datetime.date.today().isoformat() if changed else previous.get("updated")

    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("Updated:", ", ".join(sorted(sources)), "(changed)" if changed else "(no change)")
    for failure in failures:
        print("Warning:", failure, file=sys.stderr)


if __name__ == "__main__":
    main()
