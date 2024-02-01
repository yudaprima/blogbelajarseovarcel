<script setup>
const description
  = 'Digital marketing Corenr, Software Engineer at AppsCode working on ByteBuilders, with over 2+ years experience in Frontend development.'
const ogTitle
  = 'Digital marketing Corenr codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving'
const twitterDescription
  = 'My blog website, where I play around with Nuxt, Vue, SEO, and more and showcase my blog, resources, etc'
const image
  = ''
const mySite = 'blogbelajarseo.vercel.app'
useHead({
  htmlAttrs: {
    lang: 'idn',
  },
  link: [
    {
      rel: 'canonical',
      href: `blogbelajarseo.vercel.app`,
    },
  ],
  meta: [
    {
      name: 'google-site-verification',
      content: 'GMzPOXXkBWXgjnyhDfAQNEGk0_JjbzvZCy8NukOeHqs',
    },
    {
      name: 'description',
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: mySite },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: mySite,
    },
    {
      property: 'og:title',
      content: ogTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@debs_obrien' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: mySite,
    },
    {
      name: 'twitter:title',
      content: ogTitle,
    },
    {
      name: 'twitter:description',
      content: twitterDescription,
    },
    {
      name: 'twitter:image',
      content: image,
    },
  ],
})
</script>

<template>
  <div class="bg-[#F1F2F4] dark:text-zinc-300   dark:bg-slate-950">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark {
  color-scheme: dark;
}
</style>
