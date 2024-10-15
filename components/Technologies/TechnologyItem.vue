<template>
  <div
    class="flex flex-col items-center w-full p-4 space-y-3 rounded-xl bg-zinc-800 lg:flex-row lg:space-y-0 lg:space-x-3"
  >
    <div class="flex-none w-9 h-9 md:w-10 md:h-10 lg:h-8 lg:w-8">
      <div class="flex items-center justify-center aspect-square">
        <img
          :src="technology.image"
          :alt="technology.name"
          class="object-contain"
        />
      </div>
    </div>
    <span class="font-semibold text-white md:text-lg">{{
      technology.name
    }}</span>
  </div>
</template>

<script setup>
defineProps({
  technology: {
    type: Object,
    required: true,
  },
});
</script>
