<template>
  <Transition>
    <div v-if="loading" class="loading"></div>
  </Transition>
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
