import html5 from "@/assets/technology/html5.svg";
import css3 from "@/assets/technology/css3.svg";
import tailwindcss from "@/assets/technology/tailwindcss.svg";
import bootstrap5 from "@/assets/technology/bootstrap5.svg";
import javascript from "@/assets/technology/javascript.svg";
import react from "@/assets/technology/react.svg";
import reactRouter from "@/assets/technology/reactrouter.svg";
import reactQuery from "@/assets/technology/reactquery.svg";
import vue from "@/assets/technology/vuejs.svg";
import nuxt from "@/assets/technology/nuxtjs.svg";
import node from "../assets/technology/nodejs.svg";
import express from "@/assets/technology/express.svg";
import sequelize from "@/assets/technology/sequelize.svg";
import axios from "@/assets/technology/axios.svg";
import git from "@/assets/technology/git.svg";
import typescript from "@/assets/technology/typescript.svg";
import zod from "@/assets/technology/zod.svg";
import trello from "@/assets/technology/trello.svg";
import mysql from "@/assets/technology/mysql.svg";

interface Technology {
  name: string;
  image: string;
}

export const technologies: Technology[] = [
  { name: "HTML", image: html5 },
  { name: "CSS", image: css3 },
  { name: "Tailwind", image: tailwindcss },
  { name: "Bootstrap", image: bootstrap5 },
  { name: "JavaScript", image: javascript },
  { name: "TypeScript", image: typescript },
  { name: "React", image: react },
  { name: "React Router", image: reactRouter },
  { name: "React Query", image: reactQuery },
  { name: "Vue", image: vue },
  { name: "Nuxt", image: nuxt },
  { name: "Node", image: node },
  { name: "Express", image: express },
  { name: "Sequelize", image: sequelize },
  { name: "MySQL", image: mysql },
  { name: "Git", image: git },
  { name: "Axios", image: axios },
  { name: "Zod", image: zod },
  { name: "Trello", image: trello },
];
