<script setup>
import { ref, defineProps } from "vue";
import TechStack from "~/components/Projects/TechStack.vue";

const props = defineProps({
  project: Object,
  isDetailVisible: Boolean,
  toggleDetail: Function,
});
</script>

<template>
  <li class="flex flex-col gap-3">
    <a :href="project.link" target="_blank" class="flex flex-col gap-2">
      <div class="aspect-[18/9] bg-white rounded-lg overflow-hidden">
        <img
          :src="project.thumbnail"
          :alt="project.title"
          aria-label="Thumbnail"
          class="object-cover w-full h-full"
        />
      </div>
      <h2 class="text-xl font-bold text-white">{{ project.title }}</h2>
    </a>
    <div class="flex flex-col items-start gap-2">
      <p
        :class="isDetailVisible ? '' : 'line-clamp-3'"
        class="text-white hover:transition-opacity hover:opacity-100 opacity-40 hover:duration-300 hover:ease-in"
      >
        {{ project.description }}
      </p>
      <button
        @click="toggleDetail"
        class="text-sm text-tosca-green hover:text-tosca-green/80"
      >
        {{ isDetailVisible ? "Hide Detail" : "Show Detail" }}
      </button>
      <div class="mt-4">
        <h3 class="font-semibold text-white uppercase">Techs Used</h3>
        <TechStack :techStack="project.techStack" />
      </div>
    </div>
  </li>
</template>
