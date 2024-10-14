<template>
  <div class="mb-10">
    <Head>
      <Title>Home | Dandi Nirpana Nahin</Title>
    </Head>
    <div
      class="flex flex-col items-center justify-center gap-10 mt-10 md:items-start"
    >
      <div>
        <h1
          class="text-[2.5rem] md:text-[3rem] leading-none font-bold text-center md:text-start text-white"
        >
          I'm <span class="text-tosca-green">Dandi</span>, a front-end developer
          with a passion for creating attractive, powerful and responsive web
          applications.
        </h1>
      </div>
      <div class="w-max">
        <router-link
          to="/about-me"
          class="flex items-center justify-center px-10 py-3 text-lg font-semibold text-white rounded-full bg-tosca-green/80"
        >
          Get to know me
        </router-link>
      </div>
    </div>

    <div class="mt-32">
      <h1 class="text-3xl font-bold text-white">Things I Worked on.</h1>
      <div class="mt-10 mb-12">
        <ProjectsList :isRandom="true" />
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
