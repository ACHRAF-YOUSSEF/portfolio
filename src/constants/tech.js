import angular from "../assets/tech/angularjs-original.svg?no-inline";
import css from "../assets/tech/css.png";
import docker from "../assets/tech/docker.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import java from "../assets/tech/java.svg?no-inline";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import postgresql from "../assets/tech/postgresql.svg?no-inline";
import react from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import android from "../assets/tech/local/android.svg?no-inline";
import archlinux from "../assets/tech/local/archlinux.svg?no-inline";
import aws from "../assets/tech/local/aws.svg?no-inline";
import azure from "../assets/tech/local/azure.svg?no-inline";
import bash from "../assets/tech/local/bash.svg?no-inline";
import fastapi from "../assets/tech/local/fastapi.svg?no-inline";
import figma from "../assets/tech/local/figma.svg?no-inline";
import flutter from "../assets/tech/local/flutter.svg?no-inline";
import jenkins from "../assets/tech/local/jenkins.svg?no-inline";
import jwt from "../assets/tech/local/jwt.svg?no-inline";
import kafka from "../assets/tech/local/kafka.svg?no-inline";
import kotlin from "../assets/tech/local/kotlin.svg?no-inline";
import latex from "../assets/tech/local/latex.svg?no-inline";
import nextjs from "../assets/tech/local/nextjs.svg?no-inline";
import nginx from "../assets/tech/local/nginx.svg?no-inline";
import oracle from "../assets/tech/local/oracle.svg?no-inline";
import prisma from "../assets/tech/local/prisma.svg?no-inline";
import python from "../assets/tech/local/python.svg?no-inline";
import rabbitmq from "../assets/tech/local/rabbitmq.svg?no-inline";
import rust from "../assets/tech/local/rust.svg?no-inline";
import sass from "../assets/tech/local/sass.svg?no-inline";
import socketio from "../assets/tech/local/socketio.svg?no-inline";
import springboot from "../assets/tech/local/springboot.svg?no-inline";
import zsh from "../assets/tech/local/zsh.svg?no-inline";

export const techCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: java },
      { name: "Python", icon: python },
      { name: "Kotlin", icon: kotlin },
      { name: "Rust", icon: rust },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
    ],
  },
  {
    title: "Web Frontend",
    items: [
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "Angular", icon: angular },
      { name: "Next.js", icon: nextjs },
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Sass", icon: sass },
      { name: "Socket.io", icon: socketio },
    ],
  },
  {
    title: "Backend and APIs",
    items: [
      { name: "Spring Boot", icon: springboot },
      { name: "FastAPI", icon: fastapi },
      { name: "Apache Kafka", icon: kafka },
      { name: "RabbitMQ", icon: rabbitmq },
      { name: "JWT", icon: jwt },
      { name: "Prisma", icon: prisma },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", icon: flutter },
      { name: "Android", icon: android },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: postgresql },
      { name: "Oracle", icon: oracle },
      { name: "MongoDB", icon: mongodb },
    ],
  },
  {
    title: "DevOps, Cloud and Infrastructure",
    items: [
      { name: "Docker", icon: docker },
      { name: "Jenkins", icon: jenkins },
      { name: "NGINX", icon: nginx },
      { name: "AWS", icon: aws },
      { name: "Azure", icon: azure },
      { name: "Git", icon: git },
      { name: "Arch Linux", icon: archlinux },
      { name: "Bash", icon: bash },
      { name: "Zsh", icon: zsh },
    ],
  },
  {
    title: "Tools and Documentation",
    items: [
      { name: "Figma", icon: figma },
      { name: "LaTeX", icon: latex },
    ],
  },
];
