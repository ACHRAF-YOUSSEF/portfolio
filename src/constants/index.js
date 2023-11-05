/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  bootstrap,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  java,
  postgresql,
  tailwind,
  mongodb,
  git,
  docker,
  relead,
  angularjs,
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
    id: "work",
    title: "Work",
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

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angularjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

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
    category: ["All", "Academic Projects", "Desktop"],
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
    category: ["All", "Academic Projects", "Mobile"],
    image: news_app_showcase,
    source_code_link: "https://github.com/",
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
    category: ["All", "Academic Projects", "Web"],
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
    category: ["All", "Academic Projects", "Web"],
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
    category: ["All", "Academic Projects", "Web"],
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
    category: ["All", "Personal Projects", "Mobile"],
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
    category: ["All", "Personal Projects", "Mobile"],
    image: tmdb_showcase,
    source_code_link: "https://github.com/ACHRAF-YOUSSEF/mtrak",
  },
];

export { services, technologies, experiences, testimonials, projects };
