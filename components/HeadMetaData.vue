<script setup>
import { defineProps } from "vue";
import { useRoute } from "nuxt/app";

const props = defineProps(["title", "metaDescription", "ogImageUrl"]);
const route = useRoute();

const defaultTitle = "Dandi Nirpana Nahin";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://dandnirv-portfolio.netlify.app";

const pageUrl = new URL(route.fullPath, baseUrl).toString();
</script>

<template>
  <Head>
    <title>{{ title ? title + " | " + defaultTitle : defaultTitle }}</title>
    <meta name="description" :content="metaDescription" />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" :content="pageUrl" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      :content="title ? title + ' | ' + defaultTitle : defaultTitle"
    />
    <meta property="og:description" :content="metaDescription" />
    <meta property="og:image" :content="ogImageUrl" />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" :content="pageUrl" />
    <meta
      name="twitter:title"
      :content="title ? title + ' | ' + defaultTitle : defaultTitle"
    />
    <meta name="twitter:description" :content="metaDescription" />
    <meta name="twitter:image" :content="ogImageUrl" />
  </Head>
</template>
