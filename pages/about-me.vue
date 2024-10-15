<script setup>
const pageTitle = "About Me";
const ogImageUrl =
  "https://cdn.discordapp.com/attachments/1056235235861344346/1175313390789468190/751e6840-37b4-47ed-b52e-c2a7e896a86f.png?ex=656ac6e4&is=655851e4&hm=06c7907e4588d0f89bf3f04ee761ab731bd278ebd138c3ce99dc77d561080986";
const pageDescription =
  "Discover my portfolio of innovative design and development projects on my personal website. Gain insights and inspiration from my creative journey in the world of design.";
</script>

<template>
  <div>
    <HeadMetaData
      :title="pageTitle"
      :ogImageUrl="ogImageUrl"
      :metaDescription="pageDescription"
    />
    <Summary />
    <TechnologiesList />
    <EducationsList />
  </div>
</template>
