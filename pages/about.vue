<script setup lang="ts">
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Digital marketing Corenr\'s Blog',
  description: 'Dive into web development and search engine optimization with me',
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl  pb-2 font-bold ">
              Digital Marketing Corner
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink to="/" target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Github">
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <NuxtLink to="/" target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="LinkedIn">
                <Icon name="fa:linkedin-square" size="1em" />
              </NuxtLink>
              <NuxtLink to="/" target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Twitter">
                <Icon name="fa:twitter-square" size="1em" />
              </NuxtLink>
              <NuxtLink to="/" target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="StackOverflow">
                <Icon name="fa:stack-overflow" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg src="/jasa-pembuatan-website-profesional-roofel.webp" width="1920" height="1080" quality="80"
              class="rounded-md" />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          Web & Search Engine Optimization Enthusiast.
        </h3>

        <p>Halo Semua! ini adalah blog untuk pembuatan website profesional, search engine optimization, digital marketing
          dan semua yang berhubungan dengan dunia pemasaran digital</p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg src="/jasa-pembuatan-website-profesional-roofel.webp" width="1920" height="1080" quality="80"
          class="rounded-md" />
      </div>
    </div>
  </div>
</template>
