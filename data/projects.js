import html5 from "@/assets/technology/html5.png";
import css3 from "@/assets/technology/css3.png";
import javascript from "@/assets/technology/javascript.png";
import vuejs from "@/assets/technology/vue-js.svg";
import nuxtjs from "@/assets/technology/nuxt-js.png";
import nodejs from "@/assets/technology/nodejs.png";
import express from "@/assets/technology/express.svg";
import sequelize from "@/assets/technology/sequelize.svg";
import axios from "@/assets/technology/axios.svg";
import tailwindcss from "@/assets/technology/tailwindcss.png";
import flowbite from "@/assets/technology/flowbite.png";
import mysql from "@/assets/technology/mysql.svg";

import themealapp from "@/assets/thumbnails/the-meal-app.png";
import pokeapi from "@/assets/thumbnails/poke-api.png";
import github from "@/assets/thumbnails/github-thumbnail.png";

export const projects = [
  {
    thumbnail: themealapp,
    slugs: "https://the-meals-app.netlify.app/",
    title: "The Meal",
    description:
      "The Meal is the place to find your daily cooking inspiration. Discover recipes from different countries, try new ingredients and enjoy delicious food with us.",
    techStack: [
      { icon: html5 },
      { icon: css3 },
      { icon: javascript },
      { icon: tailwindcss },
      { icon: axios },
    ],
  },
  {
    thumbnail: pokeapi,
    slugs: "https://github.com/dandnirv7/vue-pokeapi",
    title: "Poke API",
    description:
      "The Meal is the place to find your daily cooking inspiration. Discover recipes from different countries, try new ingredients and enjoy delicious food with us.",
    techStack: [
      { icon: html5 },
      { icon: css3 },
      { icon: javascript },
      { icon: tailwindcss },
    ],
  },
  {
    thumbnail: github,
    slugs: "https://github.com/dandnirv7/asp-desa-frontend",
    title: "Aspirasi Desa",
    description:
      "Village Aspiration is an application to connect the community with the government and pave the way for the exchange of ideas, active participation of village residents and local empowerment to improve the quality of life in rural areas",
    techStack: [
      { icon: html5 },
      { icon: css3 },
      { icon: javascript },
      { icon: tailwindcss },
      { icon: flowbite },
      { icon: nuxtjs },
      { icon: vuejs },
    ],
  },
  {
    thumbnail: github,
    slugs: "https://nakedpress-clone-by-dandnirv.netlify.app",
    title: "Naked Press Clone (progress) | mobile only",
    description:
      "nakedpress is Detox Cold Pressed Juice which is very beneficial because it is high in nutrients from fresh vegetables and fruit.",
    techStack: [
      { icon: html5 },
      { icon: css3 },
      { icon: javascript },
      { icon: tailwindcss },
      { icon: vuejs },
    ],
  },
  {
    thumbnail: github,
    slugs: "https://github.com/dandnirv7/LAUNDRY-API",
    title: "Laundry API",
    description:
      "Laundry API is an API that I made for a laundry application when I attended the Bootcamp Pesilat Alkademi - AWS in Communities",
    techStack: [
      { icon: javascript },
      { icon: nodejs },
      { icon: express },
      { icon: mysql },
      { icon: sequelize },
    ],
  },
];
