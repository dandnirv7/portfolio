<script setup>
import { defineProps } from "vue";

const props = defineProps({
  techStack: Array,
});
</script>

<template>
  <ul class="flex flex-row flex-wrap items-center w-full gap-3 mt-2">
    <li v-for="(tech, techIndex) in techStack" :key="techIndex">
      <div>
        <img
          :src="tech.icon"
          :alt="tech.name"
          aria-label="Icon"
          class="size-6 md:size-7"
        />
      </div>
    </li>
  </ul>
</template>
