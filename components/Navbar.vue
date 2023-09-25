<script setup>
const mobileMenuActive = ref(false);

const toggleMobileMenu = () => {
  mobileMenuActive.value = !mobileMenuActive.value;
};

const closeMobileMenu = () => {
  mobileMenuActive.value = false;
};
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 border-b border-gray-600 backdrop-blur bg-black/20 lg:px-20 xl:px-40 md:px-8 md:border-0 z-50"
  >
    <div class="relative flex items-center justify-between px-5 py-4">
      <router-link
        to="/"
        aria-label="Logo"
        class="fixed top-3 left-1/2 order-2 -ml-5 md:order-1 md:-ml-0 md:w-max md:static md:top-0 md:left-0"
      >
        <img src="@/assets/logo.png" alt="Dandnirv" class="w-9" />
      </router-link>

      <div class="w-full md:hidden">
        <button
          class="md:hidden text-gray-400 hover:text-[#64ffda] hover:no-underline"
          @click="toggleMobileMenu"
        >
          <Icon name="mdi:menu" size="24px" v-if="!mobileMenuActive" />
        </button>

        <button
          v-if="mobileMenuActive"
          class="text-gray-400 hover:text-[#64ffda] hover:no-underline absolute top-1/4 left-5"
          @click="closeMobileMenu"
        >
          <Icon name="heroicons-solid:x" size="24px" />
        </button>
      </div>

      <header class="hidden md:block md:order-2">
        <nav class="flex items-center justify-center space-x-6">
          <router-link
            to="/"
            class="font-semibold hover:text-decoration hover:underline"
            :class="{
              'text-[#64ffda] hover:no-underline': $route.path === '/',
              'text-gray-400': $route.path !== '/',
            }"
          >
            Home
          </router-link>
          <router-link
            to="/about-me"
            class="font-semibold hover:text-decoration hover:underline"
            :class="{
              'text-[#64ffda] hover:no-underline': $route.path === '/about-me',
              'text-gray-400': $route.path !== '/about-me',
            }"
          >
            About Me
          </router-link>
          <router-link
            to="/projects"
            class="font-semibold hover:text-decoration hover:underline"
            :class="{
              'text-[#64ffda] hover:no-underline': $route.path === '/projects',
              'text-gray-400': $route.path !== '/projects',
            }"
          >
            My Work
          </router-link>
        </nav>
      </header>
    </div>

    <div v-if="mobileMenuActive" class="md:hidden">
      <div class="backdrop-filter-lg">
        <div class="px-5 py-3">
          <router-link
            to="/"
            class="block w-max py-2 font-semibold hover:text-[#64ffda] hover:no-underline"
            :class="{
              'text-[#64ffda] hover:no-underline': $route.path === '/',
              'text-gray-400': $route.path !== '/',
            }"
            @click="closeMobileMenu"
          >
            Home
          </router-link>
          <router-link
            to="/about-me"
            class="block w-max py-2 font-semibold hover:text-[#64ffda] hover:no-underline"
            :class="{
              'text-[#64ffda] hover:no-underline': $route.path === '/about-me',
              'text-gray-400': $route.path !== '/about-me',
            }"
            @click="closeMobileMenu"
          >
            About Me
          </router-link>
          <router-link
            to="/projects"
            class="block w-max py-2 font-semibold hover:text-[#64ffda] hover:no-underline"
            :class="{
              'text-[#64ffda] hover:no-underline': $route.path === '/projects',
              'text-gray-400': $route.path !== '/projects',
            }"
            @click="closeMobileMenu"
          >
            My Work
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
