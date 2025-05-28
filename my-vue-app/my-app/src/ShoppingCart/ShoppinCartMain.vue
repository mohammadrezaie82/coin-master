<script setup>

import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";


const myChart = ref(null);
const dialog = ref(false)


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


</script>

<template>
      <div class="grid grid-cols-12 h-screen bg-neutral-100 ">
    <!-- sidebar  -->
    <div class="col-span-1 bg-neutral-400 w-full lg:w-1/2">
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


    <div class="col-span-9 flex flex-col gap-6 bg-neutral-100 pr-0 lg:pr-14 lg:pl-0 lg:me-10 pb-10 h-screen">
    <!-- header -->
    <div class="flex items-center flex-nowrap !mt-11">
    <span class="text-2xl font-bold text-neutral-700 whitespace-nowrap">
      COINMASTER |
    </span>
    <span class="text-base ml-2">Offers | Shopping cart</span>
  </div>


  <!-- left section -->
  <div class="grid grid-cols-1 lg:grid-cols-2">
      <!-- carts -->

      <div class="pe-5">
           <div class="bg-neutral-200 w-full border-b custom-dashed-border rounded-lg p-3 mt-5 ">
          <div class="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-4">
        <img
          src="../../public/images/imgyoga.png"
          class="w-full lg:w-[93px] h-[93px] object-cover rounded-lg"
        />
        <div class="flex-1 text-left text-neutral-700">
          <!-- desktop cart -->
          <div class="hidden lg:flex items-center justify-between">
            <div class="flex items-center gap-1 pb-1">
            <h2 class="text-xl font-semibold">Yoga | </h2>
            <span class="text-xs">990611</span>
            </div>

          </div>

          <div class="flex items-center gap-1 text-xs mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            Saturday 11/09/2024, 9:00 - 10:30 (men only)
          </div>

        <div class="flex items-center gap-2 justify-end">
            <span class="line-through">
              600 Oct
            </span>
            <span>
              300 Oct
            </span>

            <span class="flex items-center justify-center w-[60px] h-[22px] gap-1 border-[1px] border-neutral-700 rounded ms-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

                <span>2</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


            </span>
          </div>


        </div>
      </div>

   </div>

              <div class="bg-neutral-200 w-full border-b custom-dashed-border rounded-lg p-3 mt-5">
          <div class="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-4">
        <img
          src="../../public/images/img2.png"
          class="w-full lg:w-[93px] h-[93px] object-cover rounded-lg"
        />
        <div class="flex-1 text-left text-neutral-700">
          <!-- desktop cart -->
          <div class="hidden lg:flex items-center justify-between">
            <div class="flex items-center gap-1 pb-1">
            <h2 class="text-xl font-semibold">Masal Trip | </h2>
            <span class="text-xs">990611</span>
            </div>

          </div>

          <div class="flex items-center gap-1 text-xs mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            Saturday 11/09/2024, 9:00 - 10:30 (men only)
          </div>

        <div class="flex items-center gap-2 justify-end">
            <span class="line-through">
              600 Oct
            </span>
            <span>
              300 Oct
            </span>

            <span class="flex items-center justify-center w-[60px] h-[22px] gap-1 border-[1px] border-neutral-700 rounded ms-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

                <span>2</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


            </span>
          </div>


        </div>
      </div>

   </div>


              <div class="bg-neutral-200 w-full border-b custom-dashed-border rounded-lg p-3 mt-5">
          <div class="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-4">
        <img
          src="../../public/images/imgnail.png"
          class="w-full lg:w-[93px] h-[93px] object-cover rounded-lg"
        />
        <div class="flex-1 text-left text-neutral-700">
          <!-- desktop cart -->
          <div class="hidden lg:flex items-center justify-between">
            <div class="flex items-center gap-1 pb-1">
            <h2 class="text-xl font-semibold">Nail Treatment | </h2>
            <span class="text-xs">990611</span>
            </div>

          </div>

          <div class="flex items-center gap-1 text-xs mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            Saturday 11/09/2024, 9:00 - 10:30 (Women only)
          </div>

        <div class="flex items-center gap-2 justify-end">
            <span class="line-through">
              600 Oct
            </span>
            <span>
              300 Oct
            </span>

            <span class="flex items-center justify-center w-[60px] h-[22px] gap-1 border-[1px] border-neutral-700 rounded ms-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

                <span>2</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


            </span>
          </div>


        </div>
      </div>

   </div>


   <div class="flex items-center mt-10 gap-2 justify-end">
    <span class="font-semibold">Total amount:</span>
    <span>720 OCT</span>
    <button @click="dialog = true" class="border border-neutral-100 bg-neutral-700 rounded text-white px-7 py-1">Buy</button>

   </div>

      </div>


      <!-- right section -->
      <div class="border-s border-neutral-400 ">

          <!-- cart -->
   <div class="bg-neutral-200 w-full border-[1px] border-neutral-400 rounded-lg mt-5 ms-5">
    <span class="flex justify-end p-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
    </span>


<div class="px-4">
            <div class="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-4">
        <img
          src="../../public/images/img2.png"
          class="w-full lg:w-[163px] h-[163px] object-cover rounded-lg"
        />
        <div class="flex-1 text-left text-neutral-700">
          <!-- desktop cart -->
          <div class="hidden lg:flex items-center justify-between">
            <div class="flex items-center gap-1 pb-1">
            <h2 class="text-xl font-semibold">Yoga | </h2>
            <span class="text-xs">990611</span>
            </div>
 
          </div>

          <div class="hidden lg:flex items-center gap-2 text-xs">
            <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
21
            </span>

            <span class="flex items-center text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>
3
            </span>

            <span class="flex items-center text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
132 reviews
            </span>
          </div>


          <div class="flex items-start gap-1 text-sm text-gray-700 mb-4 mt-3">
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
            <span class="text-xs font-semibold">Tehran, yousefabad, khiyaban fathi shaghaghi, khiyaban 7, mr Erfan Pazhooman </span>
          </div>

          <div class="flex items-center gap-1 text-xs font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            Saturday - Friday | 8:00 - 19:00
          </div>

          <div class="text-xs pb-3">
            <span class="font-semibold">Description:</span>
            Experience tranquility with our professional guided yoga sessions aimed at rejuvenating your mind and body
          </div>


        </div>
      </div>


              <div class="w-full rounded-lg py-[18px] pe-5">
        <h2 class="font-semibold text-xl text-start mb-4">Amenities & Facilities</h2>

        <div class="grid grid-cols-3 gap-10">
            <ul class="list-disc text-xs ms-5 text-start space-y-4">
                <li>Showers</li>
                <li class="whitespace-nowrap">Equipment Rental</li>
            </ul>
                <ul class="list-disc text-xs ms-5 text-start space-y-4">
                <li>Lockers</li>
            </ul>

                <ul class="list-disc text-xs ms-5 text-start space-y-4">
                <li class="whitespace-nowrap">Changing Rooms</li>
            </ul>


        </div>

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



    </div>


       <v-dialog v-model="dialog" max-width="423px">
        <div class="bg-neutral-100 p-4 rounded-lg">
          <div class="custom-dashed-dialog p-6">
          <h4>PURCHASE RECEIPT</h4>
          <div>
            <div class="flex items-center gap-2 border-b border-neutral-400 py-4">
              <img src="../../public/images/imgyoga.png" class="w-[60px] h-[60px] rounded-lg" alt="">
              <div class="flex flex-col gap-2 max-h-[60px] w-full">
                <span class="font-semibold">1. Yoga </span>
                <div>
                  <div class="flex items-center gap-1 text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> Saturday 11/09/2024, 9:00 - 10:30 (men only) </div>
                <div class="flex items-center text-xs gap-2 justify-end">
                  <span class="line-through"> 600 Oct </span>
                  <span> 300 Oct </span>
                </div>

                </div>
            </div>
          </div>

                  <div class="flex items-center gap-2 border-b border-neutral-400 py-4">
              <img src="../../public/images/img2.png" class="w-[60px] h-[60px] rounded-lg" alt="">
              <div class="flex flex-col gap-2 max-h-[60px]  w-full">
                <span class="font-semibold">2. Masal Trip </span>
                <div>
                  <div class="flex items-center gap-1 text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> 11/09/2024 - 21/09/2024 </div>
                <div class="flex items-center text-xs gap-2 justify-end">
                  <span class="line-through"> 600 Oct </span>
                  <span> 300 Oct </span>
                </div>

                </div>
            </div>
          </div>


                      <div class="flex items-center gap-2 border-b border-neutral-400 py-4">
              <img src="../../public/images/imgnail.png" class="w-[60px] h-[60px] rounded-lg" alt="">
              <div class="flex flex-col gap-2 max-h-[60px] w-full">
                <span class="font-semibold">3. Nail Treatment </span>
                <div>
                  <div class="flex items-center gap-1 text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> Saturday 11/09/2024, 9:00 - 10:30 (men only) </div>
                <div class="flex items-center text-xs gap-2 justify-end">
                  <span class="line-through"> 600 Oct </span>
                  <span> 300 Oct </span>
                </div>

                </div>
            </div>
          </div>

          <div class="flex items-center my-3 gap-2 justify-end">
            <span class="font-semibold">Total amount:</span>
            <span>720 OCT</span>
           </div>

           <p class="text-xs mb-3">Dear Alireza Zargarani, are you sure you want to confirm this purchase?</p>

           <div class="flex items-center gap-2 justify-end mb-3">
            <button class="border border-neutral-700 px-7 py-1 rounded">Cancel</button>
            <button class="border border-neutral-100 text-neutral-100 bg-neutral-700 px-7 py-1 rounded">Confirm</button>

           </div>




        </div>

        </div>
        </div>

    </v-dialog>
  
</template>



<style>
.custom-dashed-border {
  border-bottom: 4px dashed transparent; 
  border-image: repeating-linear-gradient(to right, #A3A3A3 0, #A3A3A3 6px, transparent 6px, transparent 12px) 100% 1;
  border-image-slice: 1;
}
.custom-dashed-dialog {
  border: 1px dashed #A3A3A3;
  border-style: dashed;
  border-width: 3px;
  border-radius: 8px; 
}

</style>