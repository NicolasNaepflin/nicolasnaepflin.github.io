export const bio = [
  "Hello! I'm Nicolas Näpflin, an PhD student at University of Zurich. I am passionate about microbiome research, data science and sports.",
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
    percentage: "20",
  },
  // {
  //   title: "Version Control",
  //   skillName: "GitHub",
  //   color: "7",
  //   percentage: "70",
  // },
  // {
  //   title: "Tools",
  //   skillName: "Debugging, Chrome DevTools",
  //   color: "3",
  //   percentage: "80",
  // },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    // {
    //   projectName: "Programming Diaries",
    //   image: "images/programmingdiaries.png",
    //   summary:
    //     "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
    //   preview: "https://programmingdiaries.herokuapp.com/",
    //   techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    // },
    // {
    //   projectName: "Find Your Bank",
    //   image: "images/findyourbank.png",
    //   summary:
    //     "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
    //   preview: "https://clever-fermi-0d5d76.netlify.app",
    //   techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    // },
    // {
    //   projectName: "Web Portfolio",
    //   image: "images/portfolio.png",
    //   summary:
    //     "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
    //   preview: "https://github.com/vinaysomawat/Travographer-Portal",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
    // {
    //   projectName: "Resume Builder",
    //   image: "images/resume-builder.png",
    //   summary:
    //     "Browser based editor to build and download Resumes in a customizable templates.",
    //   preview: "https://vinaysomawat.github.io/Resume-Builder",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
  ],
  softwareProjects: [
    // {
    //   projectName: "Pizza Ordering ChatBot",
    //   image: "images/pizzaorderchatbot.png",
    //   summary:
    //     "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
    //   preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
    //   techStack: ["Dailogflow", "Firebase"],
    // },
    // {
    //   projectName: "WhatsApp-Bot",
    //   image: "images/whatsappbot.jpg",
    //   summary:
    //     "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
    //   preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
    //   techStack: ["Selenium", "Chrome Webdriver", "Python"],
    // },
    // {
    //   projectName: "Bill Generator",
    //   image: "images/billgenerator.png",
    //   summary:
    //     "GUI to transfer data to excel sheets and generate bills on the local shops.",
    //   preview: "https://github.com/vinaysomawat/Bill-Generator",
    //   techStack: ["Tkinter", "Openxlpy", "Python"],
    // },
  ],
  androidProjects: [
    // {
    //   projectName: "NITW-CSE",
    //   image: "images/nitwcse.jpg",
    //   summary:
    //     "The Application display details of Department courses, reference books, research, publication and faculty profile.",
    //   preview: "https://github.com/vinaysomawat/NITW-CSE",
    //   techStack: ["JAVA", "XML", "Android"],
    // },
    // {
    //   projectName: "CareerHigh-App",
    //   image: "images/carrerhigh.png",
    //   summary:
    //     "The Application display the webpages of website careerhigh.in in android devices.",
    //   preview: "https://github.com/vinaysomawat/CareerHigh-Android",
    //   techStack: ["JAVA", "XML", "Android"],
    // },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/osmolyte_paper.png",
      summary:
        `Monika Pepelnjak, Britta Velten, <u>Nicolas Näpflin</u>, et al.<br>
        <span class="cursive-text">Nat Chem Biol</span> (2024) <br>
    Global in situ analysis of osmolyte mechanisms in regulating protein thermal stability and aggregation`,
      preview: "https://doi.org/10.1038/s41589-024-01568-7",
      techStack: ["Mass spectormetry", "Mechanism of action", "Protein aggregation", "Proteomics", "Small molecules"],
    },
    // {
    //   projectName: "Delivery+",
    //   image: "images/AM-Logo-.png",
    //   summary: "Android Application to display website in android devices.",
    //   preview:
    //     "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
    //   techStack: ["Android", "JAVA", "Play Store"],
    // },
  ],
};

export const experience = [
  {
    title: "Shiprocket (Bigfoot Solution Private Limited)",
    duration: "September 2022 - Present",
    subtitle: "Software Engineer",
    details: ["Working in support and escalation team."],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "truck ",
  },
  {
    title: "Biofourmis India Private Limited",
    duration: "April 2022 - Jul 2023",
    subtitle: "Software Engineer",
    details: [
      `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
      `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
      `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
      `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
      `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
      `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
      `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
      `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
      `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
    ],
    tags: [
      "JavaScript",
      "Angular",
      "RxJS",
      "NGXS",
      "TypeScript",
      "RxState",
      "Webpack",
      "Optimization",
    ],
    icon: "heartbeat",
  },
  {
    title: "Novopay Solutions Private Limited",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
      `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
      `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
      `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      `Developed a customer web application for social media management, supporting the advertisement domain.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "group",
  },
];

export const education = [
  { 
    title: "Currently: PhD student",
    subtitle: "test",
    duration: "2022 - Present",
    details: [],
    tags: [],
    icon : "graduation-cap",
  },
  {
    title: "MSc ETH Biology",
    duration: "2020 - 2022",
    subtitle: "Institute of Systems Biology, ETH Zürich",
    details: ["5.74 / 6 GPA"],
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
    details: ["5.56 / 6 GPA"],
    tags: [],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/vinaysomawat/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github/nicolasnaepflin.github.io",
        link: "https://github.com/nicolasnaepflin/nicolasnaepflin.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
