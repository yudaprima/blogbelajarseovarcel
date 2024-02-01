// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Digital Marketing Corner's Blog",
      titleTemplate: "%s - Digital Marketing Corner's Blog",
      meta: [
        {
          name: "description",
          content: "Digital Marketing Corner's awesome blog",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: "https://belajarseo.varcel.app",
    identity: {
      type: "Person",
    },
    twitter: "@RoofelAgency",
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "light",
  },

  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/fontaine",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
    "@nuxtjs/tailwindcss",
  ],

  content: {
    highlight: {
      theme: "dracula",
    },
  },
});
