// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "Sobre",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-notícias",
          title: "Notícias",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publicações",
          title: "Publicações",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-ensino",
          title: "Ensino",
          description: "Ministro disciplinas de graduação e pós-graduação na Universidade Federal do Rio de Janeiro.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-apresentações",
          title: "Apresentações",
          description: "Nesta página, você encontra uma seleção de palestras e apresentações que realizei em eventos acadêmicos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-é-com-grande-satisfação-que-anuncio-o-recebimento-do-prêmio-de-melhor-artigo-de-estudante-de-doutorado-no-xix-international-symposium-on-dynamic-problems-of-mechanics-diname-2023",
          title: '🏆 É com grande satisfação que anuncio o recebimento do prêmio de melhor...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/1-DINAME_award/";
            },},{id: "news-scroll-nosso-artigo-intitulado-nonlinear-dynamics-of-a-compact-and-multistable-mechanical-energy-harvester-foi-publicado-hoje-na-international-journal-of-mechanical-sciences-tada",
          title: ':scroll: Nosso artigo intitulado “Nonlinear dynamics of a compact and multistable mechanical energy...',
          description: "",
          section: "News",},{id: "news-defendi-hoje-meu-exame-de-qualificação",
          title: 'Defendi hoje meu exame de qualificação!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/3-qualifying_exam/";
            },},{id: "news-scroll-nosso-artigo-intitulado-multistability-investigation-for-improved-performance-in-a-compact-nonlinear-energy-harvester-foi-publicado-hoje-na-the-journal-of-the-brazilian-society-of-mechanical-sciences-and-engineering-tada",
          title: ':scroll: Nosso artigo intitulado “Multistability investigation for improved performance in a compact nonlinear...',
          description: "",
          section: "News",},{id: "news-hoje-conquistei-meu-título-de-doutor",
          title: '🎓 Hoje conquistei meu título de doutor!!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/5-phd_defense/";
            },},{id: "news-scroll-nosso-paper-intitulado-pendulum-based-hybrid-system-for-multidirectional-energy-harvesting-foi-publicado-hoje-na-nonlinear-dynamics-tada",
          title: ':scroll: Nosso paper intitulado “Pendulum-based hybrid system for multidirectional energy harvesting”  foi publicado...',
          description: "",
          section: "News",},{id: "news-scroll-é-com-grande-satisfação-que-anuncio-a-publicação-do-último-artigo-da-minha-tese-de-doutorado-complex-nonlinear-dynamics-of-a-multidirectional-energy-harvester-with-hybrid-transduction-na-smart-materials-and-structures",
          title: ':scroll: É com grande satisfação que anuncio a publicação do último artigo da...',
          description: "",
          section: "News",},{id: "news-prêmio-de-melhor-artigo-da-abcm-no-9th-international-symposium-on-solid-mechanics-mecsol-2024",
          title: '🏆 Prêmio de Melhor Artigo da ABCM no 9th International Symposium on Solid...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/8-MECSOL_award/";
            },},{id: "news-diname-2025-águas-de-lindóia-brazil",
          title: '📍 DINAME 2025 - Águas de Lindóia, Brazil',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/9-DINAME_2025/";
            },},{id: "news-2ª-escola-de-engenharia-e-estruturas-inteligentes-eeei",
          title: '📍 2ª Escola de Engenharia e Estruturas Inteligentes (EEEI)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/10-EEEI_2025/";
            },},{id: "news-prêmio-abcm-springer",
          title: '🏆 Prêmio ABCM-Springer',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/11-ABCM_Springer_Award/";
            },},{id: "news-cobem-2025-curibita-brasil",
          title: '📍 COBEM 2025 - Curibita, Brasil',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/12-COBEM_2025/";
            },},{id: "news-escola-de-inverno-opensd-2026-coppe-ufrj",
          title: '📍 Escola de Inverno OpenSD 2026 - COPPE/UFRJ',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/13-OpenSD_2026/";
            },},{id: "news-conem-2026-são-luís-brasil",
          title: '📍 CONEM 2026 - São Luís, Brasil',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/14-CONEM_2026/";
            },},{id: "news-italian-brazilian-workshop-on-metamaterials-and-smart-systems-petrópolis-brasil",
          title: '📍 Italian-Brazilian Workshop on Metamaterials and Smart Systems - Petrópolis, Brasil',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/15-Italian-Brazilian-Workshop-on-Metamaterials-and-Smart-Systems/";
            },},{id: "news-mecsol-2026-são-josé-dos-campos-brasil",
          title: '📍 MECSOL 2026 - São José dos Campos, Brasil',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/16-MECSOL_2026/";
            },},{id: "projects-mechanical-energy-harvesting",
          title: 'Mechanical Energy Harvesting',
          description: "A clean alternative to power standalone devices.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_1-energy_harvesting/";
            },},{id: "projects-nonlinear-dynamics-and-chaos",
          title: 'Nonlinear Dynamics and Chaos',
          description: "Modeling, analysis and applications in complex systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_2-nonlinear_dynamics/";
            },},{id: "projects-eeei-colheita-de-energia-mecânica",
          title: '[🇧🇷] EEEI - Colheita de Energia Mecânica',
          description: "2ª Escola de Engenharia em Estruturas Inteligentes (EEEI)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/talks_1-EEEI/";
            },},{id: "projects-mecânica-de-sistemas-inteligentes",
          title: 'Mecânica de Sistemas Inteligentes',
          description: "COM 783",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_1-smart_systems/";
            },},{id: "projects-dinâmica-i",
          title: 'Dinâmica I',
          description: "EEK 243",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_2-dynamics_I/";
            },},{id: "projects-métodos-matemáticos",
          title: 'Métodos Matemáticos',
          description: "COM 774",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_3-math_methods/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%67%63%6F%73%74%61@%6D%65%63%61%6E%69%63%61.%63%6F%70%70%65.%75%66%72%6A.%62%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lguedesc", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("http://lattes.cnpq.br/4475844614704668", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/luagcosta", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2836-723X", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Lua-Costa/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ZOk5zccAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
