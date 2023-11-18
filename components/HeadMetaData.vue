<script setup>
import { defineProps } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute();

const props = defineProps(["title", "metaDescription", "ogImageUrl"]);

const defaultTitle = "Dandi Nirpana Nahin";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://dandnirv-portfolio.netlify.app";

const pageUrl = new URL(route.fullPath, baseUrl).toString();

useSeoMeta({
  title: props.title + " | " + defaultTitle,
  ogTitle: props.title + " | " + defaultTitle,
  ogUrl: pageUrl,
  description: props.metaDescription,
  ogDescription: props.metaDescription,
  ogImage: props.ogImageUrl,
  twitterCard: "summary_large_image",
  twitterTitle: props.title + " | " + defaultTitle,
  twitterDescription: props.metaDescription,
});
</script>
