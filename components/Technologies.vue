<script setup>
import { technologies } from "@/data/technologies";
</script>

<template>
  <div class="mt-20">
    <h1 class="mb-10 text-3xl font-bold text-white">
      Technologies I make us of.
    </h1>
    <div
      class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center"
    >
      <div
        v-for="technology in technologies"
        :key="technology"
        class="flex flex-col items-center w-full p-4 space-y-3 rounded-xl bg-zinc-800 lg:flex-row lg:space-y-0 lg:space-x-3"
      >
        <div class="flex-none w-10 h-10 lg:h-8 lg:w-8">
          <div class="aspect-square">
            <img
              :src="technology.image"
              :alt="technology.name"
              class="object-contain w-full h-full"
            />
          </div>
        </div>
        <span class="text-lg font-semibold text-white">{{
          technology.name
        }}</span>
      </div>
    </div>
  </div>
</template>
