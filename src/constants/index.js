import {
  mobile,
  backend,
  web,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front Developer",
    icon: creator,
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

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Relead",
    icon: relead,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using Angular, Spring Boot and other related technologies.",
      "Implementing JWT security measures.",
      "Designing interactive user interface components.",
      "Incorporating a calendar feature.",
      "Utilizing pie charts for data visualization.",
      "Collaborating on front-end and back-end development.",
      "Ensuring responsiveness and cross-browser compatibility.",
      "Ensuring responsiveness and cross-browser compatibility.",
      "Conducting unit testing, functional testing, and integration testing.",
      "Managing project deployment.",
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
  experiences,
  homelabServices,
  projects,
};
