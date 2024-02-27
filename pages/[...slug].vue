<template>
  <Head>
    <Title>{{ hotelData.title }}- DHM</Title>
  </Head>
  <div class="container">
    <div class="h-screen flex flex-row">
      <div class="col col-1">
        <div>
          <img :src="useAsset('img/' + hotel + '/logo.png')" :alt="hotel" />

          <ul class="serif">
            <li
              class="btn"
              :class="{ 'bg-gray-300': tabOpened === 0 }"
              @click="tabOpened = 0"
            >
              Intro
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 3xl:w-14 3xl:h-14"
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
            <li
              class="btn"
              :class="{ 'bg-gray-300': tabOpened === 1 }"
              @click="tabOpened = 1"
            >
              Facts & figures
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 3xl:w-14 3xl:h-14"
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
            <li
              class="btn"
              :class="{ 'bg-gray-300': tabOpened === 2 }"
              @click="tabOpened = 2"
            >
              Gallery
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 3xl:w-14 3xl:h-14"
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
            <li
              class="btn"
              :class="{ 'bg-gray-300': tabOpened === 3 }"
              v-if="hotelData.video"
              @click="tabOpened = 3"
            >
              Video
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 3xl:w-14 3xl:h-14"
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

          <div
            class="mt-20 text-sm font-semibold prose 3xl:prose-2xl"
            v-html="hotelData.contacts"
          ></div>
        </div>
        <NuxtLink to="/" class="btn btn_back"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 transform rotate-180 3xl:w-14 3xl:h-14"
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
          Back</NuxtLink
        >
      </div>

      <div class="col col-2">
        <Transition>
          <div v-if="tabOpened === 0" class="grid grid-cols-4 h-full">
            <div class="p-10 pr-14 3xl:p-24 col-span-2">
              <div class="flex space-x-3 serif mt-20">
                <span
                  :class="{ 'bg-gray-300': lang === 'pt' }"
                  @click="lang = 'pt'"
                  class="btn"
                  >PT</span
                >
                <span
                  :class="{ 'bg-gray-300': lang === 'en' }"
                  @click="lang = 'en'"
                  class="btn"
                  >EN</span
                >
              </div>
              <div
                class="prose 3xl:prose-2xl 3xl:prose-h2:text-3xl max-w-full text-sm mt-5"
                v-if="lang === 'pt'"
                v-html="hotelData.intro"
              ></div>
              <div
                class="prose 3xl:prose-2xl 3xl:prose-h2:text-3xl max-w-full text-sm mt-5"
                v-else-if="lang === 'en'"
                v-html="hotelDataEn.intro"
              ></div>
            </div>
            <div class="col-span-2">
              <img :src="useAsset('img/' + hotel + '/1.png')" :alt="hotel" />
            </div>
          </div>
        </Transition>
        <Transition>
          <div v-if="tabOpened === 1" class="grid grid-cols-4 h-full">
            <div class="p-10 pr-14 col-span-2 overflow-y-auto">
              <div class="flex space-x-3 serif mt-20">
                <span
                  :class="{ 'bg-gray-300': lang === 'pt' }"
                  @click="lang = 'pt'"
                  class="btn"
                  >PT</span
                >
                <span
                  :class="{ 'bg-gray-300': lang === 'en' }"
                  @click="lang = 'en'"
                  class="btn"
                  >EN</span
                >
              </div>
              <div
                class="prose 3xl:prose-2xl 3xl:prose-h2:text-3xl max-w-full text-sm mt-5"
                v-if="lang === 'pt'"
                v-html="hotelData.facts"
              ></div>
              <div
                class="prose 3xl:prose-2xl 3xl:prose-h2:text-3xl max-w-full text-sm mt-5"
                v-else-if="lang === 'en'"
                v-html="hotelDataEn.facts"
              ></div>
            </div>
            <div class="col-span-2">
              <img :src="useAsset('img/' + hotel + '/2.png')" :alt="hotel" />
            </div>
          </div>
        </Transition>
        <Transition>
          <div v-if="tabOpened === 2" class="h-full">
            <img
              :src="useAsset('img/' + hotel + '/galeria.png')"
              :alt="hotel"
            />
          </div>
        </Transition>
        <Transition>
          <div v-if="tabOpened === 3" class="h-full relative">
            <iframe
              :src="
                hotelData.video + 'autoplay=1&portrait=false&controls=0&loop=1'
              "
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-2/3 px-10"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </Transition>
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
const hotelDataEn = ref([]);

const tabOpened = ref(0);
const lang = ref("pt");

hotel.value = route.params.slug[0];

const { data } = await useAsyncData("menu", () => content);

const getObjectKey = (arr, key, value) => {
  return arr.filter((e) => e[key] == value);
};

onMounted(() => {
  hotelData.value = getObjectKey(data.value.pt.pages, "hotel", hotel.value)[0];

  hotelDataEn.value = getObjectKey(
    data.value.en.pages,
    "hotel",
    hotel.value
  )[0];

  useHead({
    // as a string,
    // where `%s` is replaced with the title
    title: hotelData.title,
  });
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
.container {
  max-width: 100% !important;
}
.col {
  height: 100%;
  &-1 {
    width: 25%;
    @apply flex justify-between flex-col p-12 3xl:p-24;

    img {
      @apply h-20 3xl:h-36;
    }

    ul {
      @apply flex space-y-3 mt-20 flex-col w-fit 3xl:space-y-5;
      .btn {
        padding-left: 2rem;
        padding-right: 0.25rem;
        text-transform: uppercase;
        @apply gap-x-14 w-full;
      }
    }
  }
  &-2 {
    width: 75%;
    .btn {
      width: fit-content;
    }
    img {
      height: 100%;
      width: -webkit-fill-available;
    }
  }
}

.btn {
  @apply border border-gray-950 rounded-3xl w-full px-5 py-1 text-xl 3xl:text-4xl 3xl:py-3 2xl:px-10 3xl:rounded-[10rem] hover:bg-gray-200 transition-all cursor-pointer flex flex-row items-center justify-between;
}

.btn_back {
  @apply bg-black text-white font-bold w-fit text-base uppercase pr-10 pl-1 gap-2 hover:bg-gray-800 3xl:text-3xl;
}
#player {
  height: 100% !important;
  background-color: rgb(241, 241, 241) !important;
}
</style>
