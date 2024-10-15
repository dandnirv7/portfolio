import type { GetRandomProjects, Projects } from "./types";

export const getRandomProjects: GetRandomProjects<Projects> = (
  projects,
  count = 3
) => {
  const projectCount = projects.length;

  if (projectCount <= count) return projects;

  const randomIndices = new Set<number>();

  while (randomIndices.size < count) {
    randomIndices.add(Math.floor(Math.random() * projectCount));
  }

  return [...randomIndices].map((index) => projects[index]);
};
