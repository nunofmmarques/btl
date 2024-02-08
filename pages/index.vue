<template>
  <div class="container">
    <header>
      <h1>
        <span>Discovery</span> hotel <br />
        managment
      </h1>
      <div>
        <h2 class="serif">À Descoberta de Portugal</h2>
        <h3>www.dhmportugal.com</h3>
      </div>
    </header>
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="4"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <img src="/img/octant_douro/menu.png" alt="Discover Nuxt 3" />
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

<style scoped>
/* .container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
} */

header {
  @apply flex justify-between items-center py-3 mb-5;

  h1 {
    @apply uppercase text-3xl tracking-tight;
    span {
      @apply font-bold;
    }
  }

  h2 {
    @apply text-2xl text-right;
  }

  h3 {
    @apply text-sm text-right font-semibold;
  }
}

footer {
  p {
    @apply text-[#B4B4B4] text-center font-thin mt-5;
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
