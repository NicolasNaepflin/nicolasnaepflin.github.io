export const bio = [
  "Hello! I'm Nicolas Näpflin - a PhD student at the University of Zurich exploring the microbiome through data science. I am especially interested in metagenomics, comparative genomics and microbial ecology.",
  "Outside the lab, I enjoy running, playing volleyball and boardgames.",
  "Thanks for visiting!"
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python",
    color: "1",
    percentage: "80",
  },
  {
    title: "Languages",
    skillName: "R",
    color: "2",
    percentage: "85",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Bash",
    color: "3",
    percentage: "80",
  },
  {
    title: "Design",
    skillName: "Rust",
    color: "4",
    percentage: "10",
  },
  // {
  //   title: "template_title",
  //   skillName: "template_skillName",
  //   color: "7",
  //   percentage: "70",
  // },
];

export const projects = {
  webProjects: [
    {
      projectName: "pangenome_paper",
      image: "images/pangenome_paper_v2.png",
      summary:
        `<u>Nicolas Näpflin</u>*, Christopher Schubert* et al. <span class="cursive-text">Communications Biology</span> (2025)`,
      preview: "https://doi.org/10.1038/s42003-025-08640-5",
      techStack: ["pan-genome", "nutrient exploitation",],
    },
  ],
  softwareProjects: [
    {
      projectName: "monosacaccharide_paper",
      image: "images/monosaccharide_paper.png",
      summary:
        `Christopher Schubert, Bidong D. Nguyen, Andreas Sichert, <u>Nicolas Näpflin</u>, et al. <span class="cursive-text" style="margin-bottom: 0px">Nature Communication</span> (2025)`,
      preview: "https://doi.org/10.1038/s41467-025-56890-y",
      techStack: ["bacterial infection", "bacteriology","pathogens"],
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
  androidProjects: [
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
  freelanceProjects: [
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
    details: ['<a href="https://tree-app-j2xo9.ondigitalocean.app/" target="_blank">Visit map</a>'],
    preview: "https://maroni-karte.netlify.app/",
    tags: [],
    icon: "tree ",
  },
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
      {
        text: "Mail",
        link: "mailto:naepflin.nicolas@gmail.com",
      },
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
