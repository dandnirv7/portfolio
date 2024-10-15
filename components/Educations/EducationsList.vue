<template>
  <div class="mt-16">
    <h1 class="mb-10 text-3xl font-bold text-white">Educations I've done.</h1>
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <EducationItem
        v-for="(education, index) in educations"
        :key="index"
        :title="education.title"
        :duration="education.duration"
        :skills="education.skills"
        :isLatest="education.isLatest"
      />
    </ol>
  </div>
</template>

<script setup>
import EducationItem from "@/components/Educations/EducationItem.vue";
import { educations } from "~/data/educations";
</script>
