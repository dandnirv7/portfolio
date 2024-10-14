<script setup>
import { technologies } from "~/data/technologies";
import TechnologyItem from "~/components/Technologies/TechnologyItem.vue";
</script>

<template>
  <div class="mt-20">
    <h1 class="mb-10 text-3xl font-bold text-white">
      Technologies I make us of.
    </h1>
    <div
      class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center"
    >
      <TechnologyItem
        v-for="technology in technologies"
        :key="technology.name"
        :technology="technology"
      />
    </div>
  </div>
</template>
