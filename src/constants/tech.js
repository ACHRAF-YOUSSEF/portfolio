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
import android from "../assets/tech/android.svg?no-inline";
import archlinux from "../assets/tech/archlinux.svg?no-inline";
import aws from "../assets/tech/aws.svg?no-inline";
import azure from "../assets/tech/azure.svg?no-inline";
import bash from "../assets/tech/bash.svg?no-inline";
import fastapi from "../assets/tech/fastapi.svg?no-inline";
import figma from "../assets/tech/figma.svg?no-inline";
import flutter from "../assets/tech/flutter.svg?no-inline";
import jenkins from "../assets/tech/jenkins.svg?no-inline";
import jwt from "../assets/tech/jwt.svg?no-inline";
import kafka from "../assets/tech/kafka.svg?no-inline";
import kotlin from "../assets/tech/kotlin.svg?no-inline";
import latex from "../assets/tech/latex.svg?no-inline";
import nextjs from "../assets/tech/nextjs.svg?no-inline";
import nginx from "../assets/tech/nginx.svg?no-inline";
import oracle from "../assets/tech/oracle.svg?no-inline";
import prisma from "../assets/tech/prisma.svg?no-inline";
import python from "../assets/tech/python.svg?no-inline";
import rabbitmq from "../assets/tech/rabbitmq.svg?no-inline";
import rust from "../assets/tech/rust.svg?no-inline";
import sass from "../assets/tech/sass.svg?no-inline";
import socketio from "../assets/tech/socketio.svg?no-inline";
import springboot from "../assets/tech/springboot.svg?no-inline";
import zsh from "../assets/tech/zsh.svg?no-inline";

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
