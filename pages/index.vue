<script setup>
import HeadMetaData from "~/components/HeadMetaData.vue";
import RandomProjects from "~/components/RandomProjects.vue";

const pageTitle = "Home";
const ogImageUrl =
  "https://cdn.discordapp.com/attachments/1056235235861344346/1175313390789468190/751e6840-37b4-47ed-b52e-c2a7e896a86f.png?ex=656ac6e4&is=655851e4&hm=06c7907e4588d0f89bf3f04ee761ab731bd278ebd138c3ce99dc77d561080986";
const pageDescription =
  "Explore projects I've worked on and personal insights on this personal website. Check out the exciting projects I've worked on, as I share my insights and knowledge in the world of design and development. Find inspiration and creativity in every step.";
</script>

<template>
  <div class="mb-10">
    <HeadMetaData
      :title="pageTitle"
      :ogImageUrl="ogImageUrl"
      :metaDescription="pageDescription"
    />
    <div
      class="flex flex-col items-center justify-center space-y-10 md:items-start"
    >
      <div>
        <h1
          class="text-[2.5rem] md:text-[3rem] leading-none font-bold text-center md:text-start text-white"
        >
          I'm <span class="text-[#64ffda]">Dandi</span>, a front-end developer
          with a passion for creating attractive, powerful and responsive web
          applications.
        </h1>
      </div>
      <div class="w-max">
        <router-link
          to="/about-me"
          class="flex items-center justify-center px-10 py-3 text-lg font-semibold text-white rounded-full bg-[#51ddbd]"
        >
          Get to know me
        </router-link>
      </div>
    </div>

    <div class="mt-40">
      <h1 class="text-3xl font-bold text-white">Things I Worked on.</h1>
      <div class="mt-10 mb-12">
        <RandomProjects />
      </div>
      <router-link
        to="/projects"
        class="py-3 text-lg font-semibold text-black transition-all duration-200 bg-white rounded-full px-9 hover:bg-white/80"
      >
        View All
      </router-link>
    </div>
  </div>
</template>
