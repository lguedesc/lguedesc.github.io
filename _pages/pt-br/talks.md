---
layout: page
title: Apresentações
permalink: /talks/
description: Nesta página, você encontra uma seleção de palestras e apresentações que realizei em eventos acadêmicos.
nav: true
nav_order: 6
display_categories: [2025]
horizontal: true
lang: pt-br
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}
    {% if page.horizontal %}
      <div class="container-fluid px-0">
        <div class="row g-0 row-cols-1">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
{% else %}
  <!-- Display projects without categories -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% if page.horizontal %}
    <div class="container-fluid px-0">
      <div class="row g-0 row-cols-1">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
{% endif %}
</div>
