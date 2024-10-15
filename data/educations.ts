interface Education {
  title: string;
  duration: string;
  skills: string;
  isLatest: boolean;
}
export const educations: Education[] = [
  {
    title: "Bootcamp PESILAT Alkademi - AWS in Communities",
    duration: "May 2023 - August 2023",
    skills:
      "HTML, CSS, JavaScript, Git, Tailwind CSS, Flowbite, Vue JS, Nuxt JS, Node JS, Express JS, Sequelize, MySQL, Trello, SDLC, Budibase",
    isLatest: true,
  },
  {
    title: "ITBOX - Fullstack Web Developer",
    duration: "January 2022 - June 2022",
    skills: "HTML, CSS, JavaScript, Node JS, Express JS",
    isLatest: false,
  },
];
