import {
  mobile,
  backend,
  relead,
  creator,
  admin_dashboard,
  news_app_showcase,
  artflix_showcase,
  anime_store_showcase,
  tmdb_showcase,
  mangatn_showcase,
  netflix_clone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "homelab",
    title: "Homelab",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: backend,
    description:
      "Building complete products across frontend, backend, APIs, and database design.",
  },
  {
    title: "Mobile Developer",
    icon: mobile,
    description:
      "Building smooth mobile experiences with native-focused performance and clear UX flows.",
  },
  {
    title: "Desktop App Developer",
    icon: creator,
    description:
      "Developing practical desktop tools focused on stability, usability, and performance.",
  },
];

const techCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
      { name: "Rust", icon: "https://cdn.simpleicons.org/rust/FFFFFF" },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
    ],
  },
  {
    title: "Web Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      { name: "Sass", icon: "https://cdn.simpleicons.org/sass/CC6699" },
      {
        name: "Socket.io",
        icon: "https://cdn.simpleicons.org/socketdotio/FFFFFF",
      },
    ],
  },
  {
    title: "Backend and APIs",
    items: [
      {
        name: "Spring Boot",
        icon: "https://cdn.simpleicons.org/springboot/6DB33F",
      },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      {
        name: "Apache Kafka",
        icon: "https://cdn.simpleicons.org/apachekafka/FFFFFF",
      },
      { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/316192",
      },
      {
        name: "Oracle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/4EA94B" },
    ],
  },
  {
    title: "DevOps, Cloud and Infrastructure",
    items: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
      { name: "NGINX", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
      { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05033" },
      {
        name: "Arch Linux",
        icon: "https://cdn.simpleicons.org/archlinux/1793D1",
      },
      { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/4EAA25" },
      { name: "Zsh", icon: "https://cdn.simpleicons.org/gnu/FFFFFF" },
    ],
  },
  {
    title: "Tools and Documentation",
    items: [
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "LaTeX", icon: "https://cdn.simpleicons.org/latex/008080" },
    ],
  },
];

const technologies = techCategories.flatMap((category) => category.items);

const education = [
  {
    degree: "Master of Engineering, Telecommunications Engineering",
    school:
      "Higher Institute of Computer Science and Communication Technologies",
    date: "Sep 2024 – Sep 2027",
    details: [
      "Engineering cycle focused on telecommunications engineering and advanced software systems.",
      "Building academic projects across mobile, desktop, and web tracks.",
      "Practicing DevOps and clean architecture patterns through self-hosted homelab tooling.",
    ],
  },
  {
    degree: "Bachelor of Engineering, Computer Science",
    school:
      "Higher Institute of Computer Science and Communication Techniques – Hammam Sousse",
    date: "Sep 2021 – Jun 2024",
    details: [
      "Completed undergraduate engineering studies in computer science.",
      "Built academic projects across desktop, mobile, and web technologies.",
    ],
  },
];

const experiences = [
  {
    title: "Engineering Student",
    company_name: "ISITCOM",
    icon: creator,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Building academic software projects across mobile, desktop, and web tracks.",
      "Learning Kotlin multiplatform workflows and Rust for desktop and systems programming.",
      "Practicing DevOps and clean architecture patterns through self-hosted homelab tooling.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Relead · Internship",
    icon: relead,
    iconBg: "#383E56",
    date: "January 2024 - May 2024",
    points: [
      "Project: Analysis, design, and development of a full-stack web platform (Angular, Spring Boot, MongoDB, Jenkins, GitLab).",
      "Developed scalable RESTful APIs and managed data persistence using MongoDB.",
      "Orchestrated CI/CD pipelines to automate cloud deployment and delivery.",
      "Ensured system reliability through rigorous unit, integration, and functional testing.",
      "Produced comprehensive technical documentation for the system architecture and source code.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Relead · Internship",
    icon: relead,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Project: Design and implementation of a secure web platform (Angular, Spring Boot, PostgreSQL, JWT).",
      "Engineered a full-stack web application leveraging Spring Boot for the backend and Angular for the frontend.",
      "Implemented secure authentication and authorization protocols using JWT.",
      "Designed and optimized a PostgreSQL relational database for application data management.",
      "Developed an ergonomic UI and executed unit tests to ensure code reliability.",
    ],
  },
];

const homelabServices = {
  internal: [
    { name: "Jellyfin", category: "Media", status: "Private" },
    { name: "Jellyseerr", category: "Media", status: "Private" },
    { name: "jellytags", category: "Media", status: "Private" },
    { name: "Sonarr", category: "Arr Stack", status: "Private" },
    { name: "Radarr", category: "Arr Stack", status: "Private" },
    { name: "Prowlarr", category: "Arr Stack", status: "Private" },
    { name: "Bazarr", category: "Arr Stack", status: "Private" },
    { name: "Tdarr", category: "Media Automation", status: "Private" },
    { name: "qBittorrent", category: "Media Automation", status: "Private" },
    { name: "Maintainerr", category: "Media Automation", status: "Private" },
    { name: "Pi-hole", category: "Network", status: "Private" },
    { name: "Excalidraw", category: "Draw and Docs", status: "Private" },
    { name: "Draw.io", category: "Draw and Docs", status: "Private" },
    { name: "OpenWebUI", category: "AI", status: "Private" },
    { name: "Nextcloud", category: "Cloud", status: "Private" },
    { name: "n8n", category: "Automation", status: "Private" },
    { name: "IT-Tools", category: "Development", status: "Private" },
  ],
  public: [
    {
      name: "Homepage",
      url: "https://home.achrafyoussef.tech/",
      status: "Online",
    },
    {
      name: "Jellyfin",
      url: "https://jellyfin.achrafyoussef.tech/",
      status: "Online",
    },
    {
      name: "Jellyseerr",
      url: "https://jellyseerr.achrafyoussef.tech/",
      status: "Online",
    },
    {
      name: "Excalidraw",
      url: "https://excalidraw.achrafyoussef.tech/",
      status: "Online",
    },
    {
      name: "Draw.io",
      url: "https://drawio.achrafyoussef.tech/",
      status: "Online",
    },
    { name: "n8n", url: "https://n8n.achrafyoussef.tech/", status: "Online" },
    {
      name: "OpenWebUI",
      url: "https://ai.achrafyoussef.tech/",
      status: "Online",
    },
    {
      name: "Nextcloud",
      url: "https://cloud.achrafyoussef.tech/",
      status: "Online",
    },
    {
      name: "IT-Tools",
      url: "https://tools.achrafyoussef.tech/",
      status: "Online",
    },
  ],
};

const projects = [
  {
    name: "BizCord",
    description: "Plateforme de communication professionnelle en temps reel.",
    tags: [
      {
        name: "Angular v21",
        color: "orange-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    category: ["Academic Projects", "Web"],
    image: null,
    source_code_link: "https://github.com/ACHRAF-YOUSSEF/bizcord",
  },
  {
    name: "VaultKeeper",
    description:
      "Academic Android password manager built with Kotlin and Jetpack Compose, featuring master-password authentication, AES-GCM encrypted vault storage, Room persistence, password generation, and clean CRUD flows for logins, secure notes, cards, and identities.",
    tags: [
      {
        name: "Kotlin",
        color: "orange-text-gradient",
      },
      {
        name: "Jetpack Compose",
        color: "blue-text-gradient",
      },
      {
        name: "Room DB",
        color: "green-text-gradient",
      },
      {
        name: "Hilt",
        color: "pink-text-gradient",
      },
      {
        name: "DataStore",
        color: "blue-text-gradient",
      },
      {
        name: "AES-GCM/PBKDF2",
        color: "green-text-gradient",
      },
    ],
    category: ["Academic Projects", "Mobile", "Android"],
    image: null,
    source_code_link: "https://github.com/SirineZanina/vaultkeeper",
  },
  {
    name: "Serenade",
    description:
      "Full-stack music streaming app with an offline-first Android client, secure Spring Boot backend, and Python media workers. Serenade supports browsing, search, playlists, ratings, uploads, HLS playback, offline downloads, persisted playback queues, email verification, and AI-generated subtitles through an async RabbitMQ pipeline using FFmpeg, MinIO, and faster-whisper.",
    tags: [
      { name: "Kotlin", color: "orange-text-gradient" },
      { name: "Jetpack Compose", color: "blue-text-gradient" },
      { name: "Media3", color: "green-text-gradient" },
      { name: "Room DB", color: "pink-text-gradient" },
      { name: "WorkManager", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "RabbitMQ", color: "green-text-gradient" },
      { name: "Python", color: "orange-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "FFmpeg", color: "orange-text-gradient" },
      { name: "MinIO", color: "blue-text-gradient" },
      { name: "Redis", color: "pink-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    category: ["Academic Projects", "Mobile", "Full Stack"],
    image: null,
    source_code_link: "https://github.com/ACHRAF-YOUSSEF/serenade",
  },
  {
    name: "Inventory management",
    description:
      "Creation of a Java-based inventory management application with a graphical interface and an integrated SQL database.",
    tags: [
      {
        name: "Swing",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Lombok",
        color: "pink-text-gradient",
      },
      {
        name: "JCalendar",
        color: "orange-text-gradient",
      },
      {
        name: "ITextPDF",
        color: "blue-text-gradient",
      },
    ],
    category: ["Academic Projects", "Desktop"],
    image: admin_dashboard,
    source_code_link:
      "https://github.com/ACHRAF-YOUSSEF/Mini-Projet-Java-GestionDeStock",
  },
  {
    name: "News Reader Mobile App",
    description:
      "Development of a mobile news reading application in Java using Android Studio.\nThe app integrates the 'newsapi' REST API to browse and read articles from various sources through a user-friendly interface.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "NewsAPI",
        color: "green-text-gradient",
      },
    ],
    category: ["Academic Projects", "Mobile"],
    image: news_app_showcase,
    source_code_link:
      "https://github.com/ACHRAF-YOUSSEF/news-reader-mobile-app",
  },
  {
    name: "Artflix Art Gallery",
    description:
      "Design of the 'Artflix' website, allowing online search and purchase of art paintings.",
    tags: [
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    category: ["Academic Projects", "Web"],
    image: artflix_showcase,
    source_code_link: "https://github.com/ACHRAF-YOUSSEF/projet-fidere-Artflix",
  },
  {
    name: "AnimeStore",
    description:
      "Design of the 'AnimeStore' website for online search and purchase of figurines, accessories, and posters.",
    tags: [
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    category: ["Academic Projects", "Web"],
    image: anime_store_showcase,
    source_code_link:
      "https://github.com/ACHRAF-YOUSSEF/projet-tp-genie-logiciel",
  },
  {
    name: "Netflix clone",
    description:
      "A clone of the popular Netflix streaming service built with Angular and JSON-server.",
    tags: [
      {
        name: "Angular",
        color: "orange-text-gradient",
      },
      {
        name: "JSON-server",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
    ],
    category: ["Academic Projects", "Web"],
    image: netflix_clone,
    source_code_link:
      "https://github.com/ACHRAF-YOUSSEF/mini-projet-angular-netflix-clone",
  },
  {
    name: "Online Manga Reader Mobile App",
    description:
      "Developed with Java in Android Studio, powered by Spring Boot and PostgreSQL, this online manga reader app offers an extensive manga library.\nDiscover, personalize, and immerse yourself in the world of manga with ease.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    category: ["Personal Projects", "Mobile"],
    image: mangatn_showcase,
    source_code_link: "https://github.com/ACHRAF-YOUSSEF/MangaTN",
  },
  {
    name: "TMDb Movie & TV Show Companion App",
    description:
      "Create a mobile app that leverages the power of the TMDb API to provide users with in-depth information about their favorite movies and TV shows. Users can explore details, read synopses, and even add content to their favorites list for a personalized entertainment experience.",
    tags: [
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "TMDb API",
        color: "green-text-gradient",
      },
    ],
    category: ["Personal Projects", "Mobile"],
    image: tmdb_showcase,
    source_code_link: "https://github.com/ACHRAF-YOUSSEF/mtrak",
  },
];

export {
  services,
  techCategories,
  technologies,
  education,
  experiences,
  homelabServices,
  projects,
};
