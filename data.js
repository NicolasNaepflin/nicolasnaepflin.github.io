export const bio = [
  // "Hello! I'm Nicolas Näpflin - a PhD student at the University of Zurich exploring the microbiome through data science. I am especially interested in metagenomics, comparative genomics and microbial ecology.",
  // "Outside the lab, I enjoy running, playing volleyball and boardgames.",
  "Hello! I'm Nicolas Näpflin - a Bioinformatic researcher with experience in in large-scale genomics and multi-omics data analysis projects. \
  I am specialized in comparative genomics, NGS data processing and bioinformatic workflow management. \
  I have experience in handling large datasets, collaborating with interdisciplinary teams and communicating results to scientific and non-specialist audiences",
  "Outside the lab, I enjoy playing volleyball, running and boardgames.",


  "Thanks for visiting!"
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python",
    color: "1",
    percentage: "80",
  },
  // {
  //   title: "Languages",
  //   skillName: "R",
  //   color: "2",
  //   percentage: "85",
  // },
  // {
  //   title: "Frameworks/Libraries",
  //   skillName: "Bash",
  //   color: "3",
  //   percentage: "80",
  // },
  // {
  //   title: "Design",
  //   skillName: "Rust",
  //   color: "4",
  //   percentage: "10",
  // },
  // {
  //   title: "template_title",
  //   skillName: "template_skillName",
  //   color: "7",
  //   percentage: "70",
  // },
];

export const projects = {
  panProject: [
    {
      projectName: "pangenome_paper",
      image: "images/pangenome_paper_v2.png",
      summary:
        `<u>Nicolas Näpflin</u>*, Christopher Schubert* et al. <span class="cursive-text">Communications Biology</span> (2025)`,
      preview: "https://doi.org/10.1038/s42003-025-08640-5",
      techStack: ["pan-genome", "nutrient exploitation",],
    },
  ],
  monosacchProjects: [
    {
      projectName: "monosacaccharide_paper",
      image: "images/monosaccharide_paper.png",
      summary:
        `Christopher Schubert, Bidong D. Nguyen, Andreas Sichert, <u>Nicolas Näpflin</u>, et al. <span class="cursive-text" style="margin-bottom: 0px">Nature Communication</span> (2025)`,
      preview: "https://doi.org/10.1038/s41467-025-56890-y",
      techStack: ["bacterial infection", "bacteriology","pathogens"],
    }
  ],
  microbeatlasProject: [
    {
      projectName: "mapdb_project",
      image: "images/mapdb_paper.png",
      summary:
        ``,
      preview: "https://doi.org/10.1101/2025.07.18.665519",
      techStack: ["microbial ecology", "global microbiome structure","biogeography", "SSU rRNA marker gene"],
    }
  ],
  metadataProject: [
    {
      projectName: "metadata_project",
      image: "images/metadata_paper.png",
      summary:
        ``,
      preview: "https://doi.org/10.1101/2025.04.24.650461",
      techStack: ["text mining", "large language models","metadata parsing"],
    }
  ],
  lclrProjects: [
    {
      projectName: "lclr_project",
      image: "images/lclr_paper.png",
      summary:
        `Thea B. Andersen, <u>Nicolas Näpflin</u>, et al. <span class="cursive-text" style="margin-bottom: 0px">Journal of Bacteriology</span> (2025)`,
      preview: "https://doi.org/10.1128/jb.00054-25",
      techStack: ["microbial pathogenesis", "metabolism","gene regulation", "microbiota"],
    }
  ],
  startcodonProject: [
    {
      projectName: "startcodon_paper",
      image: "images/startcodon_paper.png",
      summary:
       `Yassine Cherrak, Miguel A. Salazar, <u>Nicolas Näpflin</u>, et al. <br>
        <span class="cursive-text">Nature Microbiology</span> (2024)`,
      preview: "https://doi.org/10.1038/s41564-024-01775-x",
      techStack: ["bacterial physiology", "microbial communities"],
    },
  ],
  proteomicsProject: [
    {
      projectName: "osmolyte_paper",
      image: "images/osmolyte_paper.png",
      summary:
        `Monika Pepelnjak, Britta Velten, <u>Nicolas Näpflin</u>, et al.<br>
        <span class="cursive-text">Nature Chemical Biology</span> (2024)`,
      preview: "https://doi.org/10.1038/s41589-024-01568-7",
      techStack: ["Mass spectormetry", "Mechanism of action", "Protein aggregation", "Proteomics", "Small molecules"],
    },
  ],
};

export const experience = [
  {
    title: "Marroni map of Zürich",
    duration: "2024",
    subtitle: "Map showing all public chestnut (swiss-german: Marroni) trees in Zürich",
    details: ['<a href="https://marronizueri.ch/" target="_blank">Visit map</a>'],
    preview: "https://marronizueri.ch",
    tags: [],
    icon: "tree ",
  },
  {
    title: "Molecular Biology/ Computational Biology Wikipedia competition",
    duration: "since 2024",
    subtitle: "Co-chairing ISCB's Molecular Biology/ Computational Biology Wikipedia competition aiming to improve Wikipedia's coverage of any topic relating to ISCB's Bioinformatics Core Competencies.",
    details: ['<a href="https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Molecular_Biology/Computational_Biology/15th_ISCB_Student_Wikipedia_competition_announcement" target="_blank">More information</a>'],
    preview: "https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Molecular_Biology/Computational_Biology/15th_ISCB_Student_Wikipedia_competition_announcement",
    tags: [],
    icon: "w ",
  },
  {
    title: "Co-founder and president of VBC Allset",
    duration: "05/2023 - present",
    subtitle: "Co-founded and elected president of a Zurich-based volleyball club that brings together young adults who share a passion for the sport.",
    preview: "",
    details: "",
    tags: [],
    icon: "volleyball ",
  }
];

export const education = [
  { 
    title: "Currently: PhD student",
    subtitle: "Institute of Molecular Life Sciences, University of Zürich",
    duration: "2023 - Present",
    details: ['Understanding shared functional traits of Enterobacteriaceae',
      'Exploring dynamics and mechanisms underlying the response of ESKAPE pathogens to antibiotics',
    ],
    tags: ['Metagenomics', 'Comparative genomics', 'Microbial ecology', 'Pan-genome analysis', 'Antibiotic resistance', 'Bacterial metabolism'],
    icon : "graduation-cap",
  },
  {
    title: "MSc ETH Biology",
    duration: "2020 - 2022",
    subtitle: "Institute of Systems Biology, ETH Zürich",
    details: ['Master Thesis: Proteomic analysis of heat-stress in a cold-adapted bacterium',
      'Research project I: Evaluation of 16S rRNA gene reconstruction after PCR amplification',
      'Research project II: Effect of ATP on proteome-wide thermal stability'
    ],
    tags: [
      "LC-MS based Proteomics",
      "Microbiome composition and function",
      "Bioinformatics",
      "Data analysis",
      "Library preparation",
      "Sequecing data analysis",
    ],
    icon: "book",
  },
  {
    title: "BSc ETH Biology",
    duration: "2016 - 2020",
    subtitle: "Department of Biology, ETH Zürich",
    details: [],
    tags: [],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      // {
      //   text: "Mail",
      //   link: "mailto:naepflin.nicolas@gmail.com",
      // },
      {
        text: "ORCID",
        link: "https://orcid.org/0000-0001-6845-7400",
      },
      {
        text: "bluesky",
        link: "https://bsky.app/profile/nicolasnaepflin.bsky.social",
      },
      {
        text: "linkedin",
        link: "https://www.linkedin.com/in/nicolas-näpflin-7b9942375",
      },
      {
        text: "github/nicolasnaepflin",
        link: "https://github.com/NicolasNaepflin",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      
    ],
  },
];
