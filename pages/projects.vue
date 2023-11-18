<script setup>
import HeadMetaData from "~/components/HeadMetaData.vue";

const pageTitle = "Projects";
const ogImageUrl =
  "https://cdn.discordapp.com/attachments/1056235235861344346/1175313390789468190/751e6840-37b4-47ed-b52e-c2a7e896a86f.png?ex=656ac6e4&is=655851e4&hm=06c7907e4588d0f89bf3f04ee761ab731bd278ebd138c3ce99dc77d561080986";
const pageDescription =
  "Explore projects I've worked on and personal insights on this personal website. Check out the exciting projects I've worked on, as I share my insights and knowledge in the world of design and development. Find inspiration and creativity in every step.";
</script>

<template>
  <div>
    <HeadMetaData
      :title="pageTitle"
      :ogImageUrl="ogImageUrl"
      :metaDescription="pageDescription"
    />
    <div class="flex flex-col items-center justify-center space-y-1">
      <h2 class="font-semibold text-[#64ffda] uppercase">My Work</h2>
      <h1 class="text-[3rem] leading-none font-semibold text-white">
        Things I've made.
      </h1>
    </div>
    <div class="mt-10 mb-12">
      <Projects />
    </div>
  </div>
</template>
