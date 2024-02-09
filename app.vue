<template>
  <Transition>
    <div v-if="loading" class="loading"></div>
  </Transition>
  <NuxtPage />
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
