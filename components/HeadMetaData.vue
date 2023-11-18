<script setup>
import { defineProps } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute();

const props = defineProps({
  title: { type: String, required: true },
  metaDescription: { type: String, required: true },
  ogImageUrl: { type: String, required: true },
});

const defaultImageUrl =
  "https://cdn.discordapp.com/attachments/1056235235861344346/1175313390789468190/751e6840-37b4-47ed-b52e-c2a7e896a86f.png?ex=656ac6e4&is=655851e4&hm=06c7907e4588d0f89bf3f04ee761ab731bd278ebd138c3ce99dc77d561080986";

const defaultTitle = "Dandi Nirpana Nahin";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://dandnirv-portfolio.netlify.app";

const pageUrl = new URL(route.fullPath, baseUrl).toString();

useSeoMeta({
  title: props.title + " | " + defaultTitle,
  description: props.metaDescription,
  ogTitle: props.title + " | " + defaultTitle,
  ogUrl: pageUrl,
  ogDescription: props.metaDescription,
  ogImage: props.ogImageUrl || defaultImageUrl,
  twitterCard: "summary_large_image",
  twitterTitle: props.title + " | " + defaultTitle,
  twitterDescription: props.metaDescription,
});
</script>
