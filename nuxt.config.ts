// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
});
