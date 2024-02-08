// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  css: ["~/assets/css/main.css"],
});
