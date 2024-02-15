// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/btl/", // baseURL: '/<repository>/'
    buildAssetsDir: "/assets/",
  },
  components: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
});
