<template>
  <div class="container">
    <div class="h-screen flex flex-row">
      <div class="col col-1">
        <div>
          <img :src="`/img/${hotel}/logo.png`" :alt="hotel" />
          <ul class="serif">
            <li class="btn">
              Intro
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </li>
            <li class="btn">
              Facts & figures
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </li>
            <li class="btn">
              Gallery
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </li>
            <li class="btn">
              Video
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </li>
          </ul>
          <div class="mt-20 text-sm font-semibold">
            <p>Caste de Paiva - Norte</p>
          </div>
        </div>
        <span class="btn btn_back"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 transform rotate-180"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
          Back</span
        >
      </div>
      <div class="col col-2">
        <div class="flex space-x-3 serif mt-20">
          <span class="btn">PT</span>
          <span class="btn">EN</span>
        </div>
        <div class="prose max-w-full mt-5" v-html="hotelData.intro"></div>
      </div>
      <div class="col col-3">
        <img :src="`/img/${hotel}/1.png`" :alt="hotel" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import content from "../content/content.json";

const route = useRoute();
const hotel = ref("");
const hotelData = ref([]);
const hotelDataPt = ref([]);
const hotelDataEn = ref([]);

hotel.value = route.params.slug[0];

const { data } = await useAsyncData(
  "menu",
  () => content
  //queryContent(conf.CONTENT).findOne()
);

const getObjectKey = (arr, key, value) => {
  return arr.filter((e) => e[key] == value);
};

onMounted(() => {
  hotelDataPt.value = getObjectKey(
    data.value.pt.pages,
    "hotel",
    hotel.value
  )[0];
  hotelDataEn.value = getObjectKey(
    data.value.en.pages,
    "hotel",
    hotel.value
  )[0];
  console.log(hotelDataEn.value);
  hotelData.value = hotelDataEn.value;
});
</script>

<style scoped>
.col {
  height: 100%;
  &-1 {
    width: 25%;
    padding: 3rem;
    @apply flex justify-between flex-col;

    img {
      max-height: 5rem;
    }

    ul {
      @apply flex space-y-3 mt-20 flex-col w-fit;
      .btn {
        padding-left: 2rem;
        padding-right: 0.25rem;
        text-transform: uppercase;
        @apply gap-x-14 w-full;
      }
    }
  }
  &-2 {
    width: 35%;
    padding: 3rem;
    .btn {
      width: fit-content;
    }
  }
  &-3 {
    width: 40%;
    img {
      height: 100%;
      width: -webkit-fill-available;
    }
  }
}

.btn {
  @apply border border-gray-950 rounded-3xl w-full px-5 py-1 text-xl hover:bg-gray-200 transition-all cursor-pointer flex flex-row items-center justify-between;
}

.btn_back {
  @apply bg-black text-white font-bold w-fit text-base uppercase pr-10 pl-1 gap-2 hover:bg-gray-800;
}
</style>
