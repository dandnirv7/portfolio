import html5 from "@/assets/technology/html5.svg";
import css3 from "@/assets/technology/css3.svg";
import tailwindcss from "@/assets/technology/tailwindcss.svg";
import javascript from "@/assets/technology/javascript.svg";
import react from "@/assets/technology/react.svg";
import reactRouter from "@/assets/technology/reactrouter.svg";
import flowbite from "@/assets/technology/flowbite.png";
import reactQuery from "@/assets/technology/reactquery.svg";
import vuejs from "@/assets/technology/vuejs.svg";
import nuxtjs from "@/assets/technology/nuxtjs.svg";
import nodejs from "@/assets/technology/nodejs.svg";
import express from "@/assets/technology/express.svg";
import sequelize from "@/assets/technology/sequelize.svg";
import axios from "@/assets/technology/axios.svg";
import typescript from "@/assets/technology/typescript.svg";
import mysql from "@/assets/technology/mysql.svg";
import trello from "@/assets/technology/trello.svg";

import github from "@/assets/thumbnails/github-thumbnail.png";
import themealapp from "@/assets/thumbnails/the-meal-app.png";
import pokeapi from "@/assets/thumbnails/poke-api.png";
import nightMovie from "@/assets/thumbnails/night-movie.png";
import beritaKini from "@/assets/thumbnails/berita-kini.png";
import taskia from "@/assets/thumbnails/taskia.png";

interface Technology {
  icon: string;
}
interface Project {
  thumbnail: string;
  link: string;
  title: string;
  description: string;
  techStack: Technology[];
}

export const projects: Project[] = [
  {
    thumbnail: github,
    link: "https://github.com/dandnirv7/asp-desa-frontend",
    title: "Aspirasi Desa",
    description: `"Aspirasi Desa" is the final project I developed during the intensive Alkademi-AWS community bootcamp. In this project, our team collaborated closely, combining frontend and backend skills to create a full-stack web application. Utilizing a tech stack that includes Nuxt, Express, Sequelize, Tailwind, Flowbite, and MySQL, we aimed to build a robust platform. For effective collaboration and project management, we used Trello to organize our tasks and facilitate daily stand-ups, ensuring smooth communication throughout the development process.`,
    techStack: [
      { icon: nuxtjs },
      { icon: nodejs },
      { icon: express },
      { icon: sequelize },
      { icon: mysql },
      { icon: tailwindcss },
      { icon: flowbite },
      { icon: html5 },
      { icon: css3 },
      { icon: javascript },
      { icon: trello },
    ],
  },
  {
    thumbnail: nightMovie,
    link: "https://night-movie-ten.vercel.app",
    title: "Night Movie",
    description: `Night Movie is a modern movie streaming platform powered by the TMDB API. Built with React, TypeScript, and TailwindCSS, it offers a responsive interface for exploring an extensive collection of movies and TV shows. Key features include efficient search and filtering by genre, release date, and popularity, along with detailed information like ratings and trailers. Utilizing React Query for data management and caching ensures quick load times. Its modular architecture allows for future enhancements, such as user accounts and personalized recommendations, making Night Movie a modern and scalable streaming solution.`,
    techStack: [
      { icon: react },
      { icon: typescript },
      { icon: reactQuery },
      { icon: reactRouter },
      { icon: tailwindcss },
      { icon: html5 },
      { icon: css3 },
      { icon: javascript },
    ],
  },
  {
    thumbnail: beritaKini,
    link: "https://berita-kini-one.vercel.app",
    title: "Berita Kini",
    description: `"Berita Kini" is a sleek and informative news website developed during the Technical Frontend Internship MSIB Batch 7 program. Following a detailed Figma design, this project was built as a static website to showcase the latest news from Indonesia. It consumes data from the Berita Indonesia API and provides a clean, responsive interface for users to browse news by category.`,
    techStack: [
      { icon: react },
      { icon: typescript },
      { icon: reactRouter },
      { icon: reactQuery },
      { icon: tailwindcss },
      { icon: html5 },
      { icon: css3 },
    ],
  },
  {
    thumbnail: github,
    link: "https://github.com/dandnirv7/LAUNDRY-API",
    title: "Laundry API",
    description: `"Laundry API" is a robust backend service designed for a laundry management application, developed during the Bootcamp Pesilat Alkademi - AWS in Communities. Built with Node.js, Express, MySQL, and Sequelize, it efficiently handles data for managing orders, services, and customers.`,
    techStack: [
      { icon: nodejs },
      { icon: express },
      { icon: mysql },
      { icon: sequelize },
      { icon: javascript },
    ],
  },
  {
    thumbnail: pokeapi,
    link: "https://github.com/dandnirv7/vue-pokeapi",
    title: "Poke API",
    description:
      "This project is a fun and interactive application that consumes data from the official PokeAPI. Built using Vue and Tailwind, it allows users to explore and interact with a vast collection of Pokémon data, bringing the world of Pokémon to life in a sleek and dynamic interface.",
    techStack: [
      { icon: vuejs },
      { icon: tailwindcss },
      { icon: axios },
      { icon: javascript },
      { icon: html5 },
      { icon: css3 },
    ],
  },
  {
    thumbnail: taskia,
    link: "https://taskia-five.vercel.app",
    title: "Taskia",
    description: `Taskia is a web-based digital note-taking application that leverages localStorage for efficient data management. With a design inspired by Shayna Kit, Taskia provides a clean and intuitive interface, making it easy for users to organize their tasks and ideas. Built with React and Tailwind, it ensures a seamless experience for daily note-taking and task management.`,
    techStack: [
      { icon: react },
      { icon: tailwindcss },
      { icon: axios },
      { icon: javascript },
      { icon: html5 },
      { icon: css3 },
    ],
  },
  {
    thumbnail: themealapp,
    link: "https://the-meals-app.netlify.app/",
    title: "The Meal",
    description:
      "The Meal is your go-to destination for daily cooking inspiration. Explore a diverse range of recipes from around the world, experiment with new ingredients, and delight in delicious meals with us. Built using Vue and Tailwind, The Meal leverages the TheMealDB API to bring you a wealth of culinary ideas at your fingertips.",
    techStack: [
      { icon: vuejs },
      { icon: tailwindcss },
      { icon: axios },
      { icon: javascript },
      { icon: html5 },
      { icon: css3 },
    ],
  },

  {
    thumbnail: github,
    link: "https://nakedpress-clone-by-dandnirv.netlify.app",
    title: "Naked Press Clone | mobile only",
    description:
      "Clone of the Naked Press website, this project highlights the benefits of detox cold-pressed juice made from fresh fruits and vegetables. Developed with Vue and Tailwind, the project delivers a smooth, clean interface for a seamless user experience.",
    techStack: [
      { icon: vuejs },
      { icon: tailwindcss },
      { icon: javascript },
      { icon: html5 },
      { icon: css3 },
    ],
  },
];
