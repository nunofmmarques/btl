<template>
  <Head>
    <Title>DHM</Title>
  </Head>
  <div class="container">
    <header>
      <h1>
        <img src="~/assets/img/logo_DHM.png" class="h-10 md:h-14 3xl:h-28" alt="logo" />
      </h1>
      <div>
        <h2 class="serif">À Descoberta de Portugal</h2>
        <h3>www.dhmportugal.com</h3>
      </div>
    </header>
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="2"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 4,
        },
        320: {
          slidesPerView: 2,
        },
      }"
    >
      <SwiperSlide v-for="item in teste" :key="item">
        <a :href="item.hotel">
          <img
            :src="useAsset('img/' + item.hotel + '/menu.png')"
            :alt="item.hotel"
          />
        </a>
      </SwiperSlide>
    </Swiper>
    <footer>
      <p class="serif">
        Por favor deslize para ver os nossos hotéis / Please scroll to see our
        hotels
      </p>
    </footer>
  </div>
</template>

<script setup>
import conf from "../conf";
import content from "../content/content.json";

const { data: teste } = await useAsyncData("menu", () => content.pt.menu);

console.log("setup");

onMounted(async () => {
  console.log("onMounted");
});

function useAsset(path) {
  const assets = import.meta.glob("~/assets/img/**", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/" + path];
}
</script>

<style scoped>
/* .container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
} */

header {
  @apply flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between items-center py-3 mb-5 3xl:mb-20;

  h2 {
    @apply text-lg md:text-2xl text-right 3xl:text-6xl;
  }

  h3 {
    @apply text-sm text-center md:text-right font-semibold 3xl:text-4xl 3xl:mt-5;
  }
}

footer {
  p {
    @apply text-[#B4B4B4] text-center font-thin mt-5 text-xs md:text-base max-w-64 mx-auto md:max-w-none 3xl:mt-16 3xl:text-4xl;
  }
}

.swiper {
  flex: 1;
  width: 100%;
  padding-bottom: 0.75rem;
}

.swiper-slide {
  img {
    @apply hover:opacity-80 transition-all cursor-pointer;
  }
}
</style>
