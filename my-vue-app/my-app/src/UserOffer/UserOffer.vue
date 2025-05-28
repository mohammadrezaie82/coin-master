<script setup>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";

const myChart = ref(null);

onMounted(() => {
  const ctx = myChart.value.getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [22, 78],
          backgroundColor: ["#14B8A6", "#525252"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      maintainAspectRatio: false,
    },
  });
});

const offers = [
  {
    id: 990641,
    title: "Doogh Ab Ali",
    image: "/images/img1.png",
    location:  "Tehran, yousefabad, khiyaban fathi sha...",
    time: " 2 months",
    day: "Saturday",
    oldPrice: "600 Oct",
    newPrice: "360 Oct",
    discount: "60%",
  },
    {
    id: 990641,
    title: "Doogh Ab Ali",
    image: "/images/img2.png",
    location:  "Tehran, yousefabad, khiyaban fathi sha...",
    time: " 2 months",
    day: "Saturday",
    oldPrice: "600 Oct",
    newPrice: "360 Oct",
    discount: "60%",
  },
    {
    id: 990641,
    title: "Doogh Ab Ali",
    image: "/images/img3.png",
    location:  "Tehran, yousefabad, khiyaban fathi sha...",
    time: " 2 months",
    day: "Saturday",
    oldPrice: "600 Oct",
    newPrice: "360 Oct",
    discount: "60%",
  },
    {
    id: 990641,
    title: "Doogh Ab Ali",
    image: "/images/img4.png",
    location:  "Tehran, yousefabad, khiyaban fathi sha...",
    time: " 2 months",
    day: "Saturday",
    oldPrice: "600 Oct",
    newPrice: "360 Oct",
    discount: "60%",
  }
]


</script>

<template>
  <div class="grid grid-cols-12 h-screen w-full bg-neutral-100">
    <div class="col-span-1 bg-neutral-400 hidden lg:block lg:w-1/2">
      <div
        class="w-full pt-11 !mb-3 !px-4 !mx-auto flex flex-col items-center gap-3"
      >
        <!-- icon menu -->
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6L21 6"
            stroke="#F5F5F5"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2 12.5L21 12.5"
            stroke="#F5F5F5"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2 19L21 19"
            stroke="#F5F5F5"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        <!-- icon home -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#F5F5F5"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <!-- icon filter -->
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0001 1C12.7548 1 15.4552 1.23205 18.0831 1.67767C18.6159 1.76803 19 2.23355 19 2.77402V3.81802C19 4.41476 18.7629 4.98705 18.341 5.40901L12.909 10.841C12.4871 11.2629 12.25 11.8352 12.25 12.432V15.3594C12.25 16.2117 11.7685 16.9908 11.0062 17.3719L7.75 19V12.432C7.75 11.8352 7.51295 11.2629 7.09099 10.841L1.65901 5.40901C1.23705 4.98705 1 4.41476 1 3.81802V2.77404C1 2.23357 1.38408 1.76805 1.91694 1.67769C4.54479 1.23206 7.24533 1 10.0001 1Z"
            stroke="#F5F5F5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <!-- icon basket -->
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5.5H2.38568C2.89537 5.5 3.34138 5.84265 3.4727 6.33513L3.8559 7.77209M6.25 16.75C4.59315 16.75 3.25 18.0931 3.25 19.75H19M6.25 16.75H17.4683C18.5894 14.4494 19.5677 12.0664 20.3917 9.6125C15.63 8.39646 10.6405 7.75 5.5 7.75C4.95021 7.75 4.40214 7.7574 3.8559 7.77209M6.25 16.75L3.8559 7.77209M4.75 22.75C4.75 23.1642 4.41421 23.5 4 23.5C3.58579 23.5 3.25 23.1642 3.25 22.75C3.25 22.3358 3.58579 22 4 22C4.41421 22 4.75 22.3358 4.75 22.75ZM17.5 22.75C17.5 23.1642 17.1642 23.5 16.75 23.5C16.3358 23.5 16 23.1642 16 22.75C16 22.3358 16.3358 22 16.75 22C17.1642 22 17.5 22.3358 17.5 22.75Z"
            stroke="#F5F5F5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="20.25" cy="9" r="4.5" fill="#E65454" />
          <path
            d="M20.01 12.5V5.84L20.05 5.5H20.65V12.5H20.01ZM18.4 7.14V6.56C18.5267 6.56 18.6867 6.51 18.88 6.41C19.08 6.31 19.2833 6.18 19.49 6.02C19.7033 5.85333 19.89 5.68 20.05 5.5L20.44 5.97C20.2267 6.18333 20.0033 6.38 19.77 6.56C19.5433 6.73333 19.3133 6.87333 19.08 6.98C18.8533 7.08667 18.6267 7.14 18.4 7.14Z"
            fill="white"
          />
        </svg>
      </div>

</div>

<div class="col-span-12 lg:col-span-9 bg-neutral-100 pr-0 pl-10 lg:pr-14 lg:pl-0">
            <!-- Header -->
  <div class="flex items-end flex-nowrap !mt-11">
    <span class="text-2xl font-bold text-neutral-700 whitespace-nowrap">
      COINMASTER |
    </span>
    <span class="text-base ml-2">Offers</span>
  </div>

  <!-- offer cards: Grid container -->
  <div  class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
    <div
      v-for="offer in offers"
      :key="offer.id"
      class="bg-neutral-200 p-4 rounded max-w-full lg:max-w-[470px] mx-auto"
    >
      <!-- Single card content -->
      <div class="flex items-start max-w-full lg:max-w-auto gap-2 lg:gap-4">
        <img
          :src="offer.image"
          :alt="offer.title"
          class="w-[122px] h-[122px] lg:w-[140px] lg:h-[140px] object-cover rounded-lg"
        />
        <div class="flex-1 text-left text-neutral-700">
          <!-- desktop cart -->
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">{{ offer.title }}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
          </div>
          <span class=" text-xs mb-1"
            >ID: {{ offer.id }}</span>

          <div class="flex items-center gap-1 text-sm text-gray-700 my-1 lg:mb-4 lg:mt-3">
           <span>
             <svg
              width="16"
              height="16"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 6C11 10.7614 6 13.5 6 13.5C6 13.5 1 10.7614 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
           </span>
            <span class="text-xs font-semibold">{{ offer.location }}</span>
          </div>

          <div class="text-xs mb-4">
            {{ offer.day }} - {{ offer.time }} - {{ offer.day }}
          </div>

          <div class="flex items-center gap-2 justify-end">
            <span class="hidden lg:block text-white text-[10px] bg-[#E65454] rounded-lg w-9 h-4 text-center">
              {{ offer.discount }}
            </span>
            <span class="line-through">
              {{ offer.oldPrice }}
            </span>
            <span>
              {{ offer.newPrice }}
            </span>
          </div>


        </div>
      </div>
    </div>
  </div>
</div>


    <div class="hidden lg:block col-span-2 bg-neutral-400">
      <!-- chart doughnut -->
         <div class="w-44 mx-auto mt-20 text-center font-sans relative">
    <div class="relative w-44 h-44 mx-auto">
      <canvas ref="myChart" class="rounded-full"></canvas>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base pointer-events-none whitespace-pre-line"
      >
        CoinMaster
        <br />
        Remaining
        <br />
        22%
      </div>
    </div>
    <div class="mt-2 text-white">
      Remaining: 158 Oct
      <br />
      Pending: 554 Oct
    </div>
  </div>
    </div>



<!-- footer -->
    <div class="flex items-center justify-between gap-4 lg:hidden h-[65px] !w-full bg-neutral-400">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5.21741H2.40027C2.91532 5.21741 3.36602 5.57496 3.49873 6.08884L3.88596 7.58829M6.30526 16.9565C4.63097 16.9565 3.27368 18.3581 3.27368 20.087H19.1895M6.30526 16.9565H17.6416C18.7745 14.5559 19.7632 12.0693 20.5959 9.50872C15.784 8.2398 10.742 7.56523 5.54737 7.56523C4.99179 7.56523 4.43795 7.57295 3.88596 7.58829M6.30526 16.9565L3.88596 7.58829M4.78947 23.2174C4.78947 23.6496 4.45015 24 4.03158 24C3.61301 24 3.27368 23.6496 3.27368 23.2174C3.27368 22.7852 3.61301 22.4348 4.03158 22.4348C4.45015 22.4348 4.78947 22.7852 4.78947 23.2174ZM17.6737 23.2174C17.6737 23.6496 17.3344 24 16.9158 24C16.4972 24 16.1579 23.6496 16.1579 23.2174C16.1579 22.7852 16.4972 22.4348 16.9158 22.4348C17.3344 22.4348 17.6737 22.7852 17.6737 23.2174Z" stroke="#A3A3A3" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="20.4526" cy="8.8696" rx="4.54737" ry="4.69565" fill="#E65454"/>
<path d="M20.1858 12V5.34L20.2258 5H20.8258V12H20.1858ZM18.5758 6.64V6.06C18.7024 6.06 18.8624 6.01 19.0558 5.91C19.2558 5.81 19.4591 5.68 19.6658 5.52C19.8791 5.35333 20.0658 5.18 20.2258 5L20.6158 5.47C20.4024 5.68333 20.1791 5.88 19.9458 6.06C19.7191 6.23333 19.4891 6.37333 19.2558 6.48C19.0291 6.58667 18.8024 6.64 18.5758 6.64Z" fill="white"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


      

    </div>




</div>
</template>

<style></style>
