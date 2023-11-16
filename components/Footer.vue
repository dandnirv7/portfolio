<template>
  <footer class="px-6 py-5 lg:px-20 xl:px-40 md:px-8">
    <div class="my-6">
      <nav class="flex items-center justify-start space-x-6">
        <router-link
          to="/"
          class="font-semibold text-gray-400 hover:underline hover:text-decoration"
          >Home</router-link
        >
        <router-link
          to="/about-me"
          class="font-semibold text-gray-400 hover:underline hover:text-decoration"
          >About Me</router-link
        >
        <router-link
          to="/projects"
          class="font-semibold text-gray-400 hover:underline hover:text-decoration"
          >My Work</router-link
        >
      </nav>
    </div>
    <div
      class="flex flex-col items-start justify-between py-4 space-y-4 border-t border-gray-400/20 md:items-center md:flex-row"
    >
      <span>&copy; 2023 Dandnirv. All Rights Reserved.</span>
      <div class="flex items-center justify-center space-x-5">
        <a href="mailto:dandinirpana7@gmail.com">
          <Icon name="heroicons:envelope-20-solid" size="24px" />
        </a>
        <a href="https://www.twitter.com/dandnirv7">
          <Icon name="mdi:twitter" size="24px" />
        </a>
        <a href="https://www.linkedin.com/in/dandnirv">
          <Icon name="mdi:linkedin" size="24px" />
        </a>
        <a href="https://www.discord.com/users/726811729593499698">
          <Icon name="ic:baseline-discord" size="24px" />
        </a>
        <a href="https://www.github.com/dandnirv7">
          <Icon name="mdi:github" size="24px" />
        </a>
      </div>
    </div>
  </footer>
</template>
