// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
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
    },{id: "news-i-39-m-honored-to-announce-that-i-received-the-award-for-the-best-phd-student-paper-at-the-xix-international-symposium-on-dynamic-problems-of-mechanics-diname-2023",
          title: '🏆 I&amp;#39;m honored to announce that I received the award for the best...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/1-DINAME_award/";
            },},{id: "news-scroll-our-paper-entitled-nonlinear-dynamics-of-a-compact-and-multistable-mechanical-energy-harvester-was-published-in-international-journal-of-mechanical-sciences-today-tada",
          title: ':scroll: Our paper entitled “Nonlinear dynamics of a compact and multistable mechanical energy...',
          description: "",
          section: "News",},{id: "news-i-defended-my-qualifying-exam-today",
          title: 'I defended my qualifying exam today!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/3-qualifying_exam/";
            },},{id: "news-scroll-our-paper-entitled-multistability-investigation-for-improved-performance-in-a-compact-nonlinear-energy-harvester-was-published-in-the-journal-of-the-brazilian-society-of-mechanical-sciences-and-engineering-today-tada",
          title: ':scroll: Our paper entitled “Multistability investigation for improved performance in a compact nonlinear...',
          description: "",
          section: "News",},{id: "news-i-received-my-ph-d-today",
          title: '🎓 I received my Ph.D. today!!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/5-phd_defense/";
            },},{id: "news-scroll-our-paper-entitled-pendulum-based-hybrid-system-for-multidirectional-energy-harvesting-was-published-in-nonlinear-dynamics-today-tada",
          title: ':scroll: Our paper entitled “Pendulum-based hybrid system for multidirectional energy harvesting”  was published...',
          description: "",
          section: "News",},{id: "news-scroll-excited-to-announce-the-publication-of-my-final-doctoral-thesis-paper-complex-nonlinear-dynamics-of-a-multidirectional-energy-harvester-with-hybrid-transduction-in-smart-materials-and-structures",
          title: ':scroll: Excited to announce the publication of my final doctoral thesis paper, “Complex...',
          description: "",
          section: "News",},{id: "news-i-39-m-honored-to-announce-that-i-received-the-abcm-best-paper-award-at-the-9th-international-symposium-on-solid-mechanics-mecsol-2024",
          title: '🏆 I&amp;#39;m honored to announce that I received the ABCM Best Paper Award...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/8-MECSOL_award/";
            },},{id: "news-diname-2025",
          title: '📍 DINAME 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/9-DINAME_2025/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%65%64%65%73@%6D%65%63%61%6E%69%63%61.%63%6F%70%70%65.%75%66%72%6A.%62%72", "_blank");
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
