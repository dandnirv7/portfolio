<script setup>
import { ref } from "vue";
import { projects } from "~/data/projects";
import ProjectItem from "~/components/Projects/ProjectItem.vue";

import { getRandomProjects } from "#imports";

const props = defineProps({
  isRandom: {
    type: Boolean,
    default: false,
  },
});

const displayedProjects = ref(
  props.isRandom ? getRandomProjects(projects) : projects
);

const projectDetails = ref(Array(displayedProjects.length).fill(false));

function toggleDetail(index) {
  projectDetails.value[index] = !projectDetails.value[index];
}
</script>

<template>
  <ul class="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3 md:grid-cols-2">
    <ProjectItem
      v-for="(project, index) in displayedProjects"
      :key="index"
      :project="project"
      :isDetailVisible="projectDetails[index]"
      :toggleDetail="() => toggleDetail(index)"
    />
  </ul>
</template>
