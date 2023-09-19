<script setup>
import { projects } from "@/data/projects";

const getRandomProjects = () => {
  const randomProjects = [];
  const projectCount = projects.length;

  if (projectCount >= 3) {
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * projectCount);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    randomIndices.forEach((index) => {
      randomProjects.push(projects[index]);
    });
  }

  return randomProjects;
};
</script>

<template>
  <div>
    <ul class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
      <li v-for="(project, index) in getRandomProjects()" :key="index" class="">
        <a :href="project.slugs" target="_blank">
          <div class="mb-5 bg-white rounded-lg shadow-md aspect-video">
            <img
              :src="project.thumbnail"
              :alt="project.title"
              aria-label="Thumbnail"
              class="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h2 class="text-xl font-bold text-white">{{ project.title }}</h2>
          <p class="mt-2">{{ project.description }}</p>
          <div class="mt-4">
            <h3 class="font-semibold text-white uppercase">Techs Used</h3>
            <ul class="flex flex-row w-24 mt-2">
              <li
                v-for="(tech, techIndex) in project.techStack"
                :key="techIndex"
              >
                <div class="w-7">
                  <img :src="tech.icon" alt="Icon" aria-label="Icon" />
                </div>
                {{ tech.name }}
              </li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
