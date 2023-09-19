<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div>
    <Navbar />
    <div class="flex flex-col min-h-screen px-6 py-5 lg:px-20 xl:px-40 md:px-8">
      <main class="flex-1 h-full pt-16">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  color: #9ca3af;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
