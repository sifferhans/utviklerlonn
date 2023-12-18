// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  css: [
    "@unocss/reset/tailwind.css",
    "boarding.js/styles/main.css",
    "boarding.js/styles/themes/basic.css",
  ],

  experimental: {
    typedPages: true,
  },
});
