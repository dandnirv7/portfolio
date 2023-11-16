<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
import { projects } from "@/data/projects";

const isLoading = ref(true);

onMounted(async () => {
  await fetchData();
});

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <ul class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          <li v-for="(project, index) in projects" :key="index">
            <a :href="project.slugs" target="_blank" class="block h-full">
              <img
                :src="project.thumbnail"
                :alt="project.title"
                aria-label="Thumbnail"
                class="object-center mb-5 bg-white rounded-lg aspect-video"
              />
              <h2 class="text-xl font-bold text-white">{{ project.title }}</h2>
              <p class="mt-2">{{ project.description }}</p>
              <div class="mt-4">
                <h3 class="font-semibold text-white uppercase">Techs Used</h3>
                <ul class="flex flex-row items-center w-full mt-2 space-x-2">
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
      </template>
      <template #fallback>
        {{ isLoading ? "Loading..." : "No projects available." }}
      </template>
    </Suspense>
  </div>
</template>
