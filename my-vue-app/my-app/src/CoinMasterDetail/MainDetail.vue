<script setup>

import CartDetail from "./CartDetail.vue";
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";
import ReviewsComponent from "./ReviewsComponent.vue";
import AmenitiesComponent from "./AmenitiesComponent.vue";
//import MainReview from './MainReview.vue'

const myChart = ref(null);
const showAfterScroll = ref(false);
const showDialog = ref(false)

function handleScrolled() {
  showAfterScroll.value = true;
}

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
  <div class="grid grid-cols-12 h-screen bg-neutral-100">
    <!-- sidebar  -->
    <div class="col-span-1 bg-neutral-400 hidden lg:block w-full lg:w-1/2">
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

    <div
      v-if="!showAfterScroll"
      class="col-span-9 flex flex-col gap-6 bg-neutral-100 pe-0 lg:pe-14 lg:ps-0 lg:me-10 pb-10 h-screen overflow-y-auto scrollbar-hide"
    >
      <div>
        <CartDetail />
      </div>
      <div class="grid grid-cols-2 gap-6">
        <ReviewsComponent @open-dialog="showDialog = true" @scrolledInReviews="handleScrolled" />
        <div class="flex flex-col gap-4">
          <AmenitiesComponent />

          <div>
            <div class="mt-3">
              <h3 class="text-xl text-start font-semibold">Choose Your Time</h3>

              <!-- date -->
              <div class="mt-1 w-1/2 text-neutral-700">
                <v-text-field
                  color="grey-darken-3"
                  v-model="dateRange"
                  rounded="lg"
                  id="dateRangeInput"
                  type="text"
                  density="compact"
                  variant="outlined"
                  label="Date"
                  class="input bg-inherit !outline-none !border-none !p-0 !m-0"
                  persistent-hint
                >
                  <template v-slot:append-inner></template>
                </v-text-field>
                <date-picker
                  auto-submit
                  locale="en,fa"
                  class="input"
                  v-model="dateRange"
                  range
                  format="YYYY/M/D"
                  element="dateRangeInput"
                />
              </div>

              <!-- date & time -->
              <div class="flex w-full items-center gap-3 flex-wrap">
                <div
                  class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1"
                >
                  <span>Men Only</span>
                  <span>9:00- 10:30</span>
                </div>

                <div
                  class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1"
                >
                  <span>Men Only</span>
                  <span>9:00- 10:30</span>
                </div>

                <div
                  class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1"
                >
                  <span>Men Only</span>
                  <span>9:00- 10:30</span>
                </div>

                <div
                  class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1"
                >
                  <span>Men Only</span>
                  <span>9:00- 10:30</span>
                </div>

                <div
                  class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1"
                >
                  <span>Men Only</span>
                  <span>9:00- 10:30</span>
                </div>
              </div>

              <!-- button shopping cart -->
              <div class="flex w-full justify-end">
                <button
                  class="text-white bg-neutral-700 rounded px-7 py-1 mt-14"
                >
                  Add to shopping cart
                </button>
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



         <v-dialog v-model="showDialog" max-width="648px">
        <div class="bg-neutral-100 p-3 rounded-lg">

          <div class="custom-dashed-dialog px-6">
                <span class="flex items-center gap-2 justify-end mt-2">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.42 13.58L1.86264 10.0226C1.43826 9.59826 1.55436 8.88282 2.09117 8.61442L2.23871 8.54065C3.18716 8.06642 4.28516 7.98839 5.29115 8.32372V8.32372C5.57849 8.4195 5.89529 8.34471 6.10946 8.13054L10.4321 3.80787C10.4884 3.75161 10.52 3.6753 10.52 3.59574V2.83214C10.52 2.52165 10.5923 2.21542 10.7311 1.93771L11.0139 1.37229C11.1054 1.18914 11.3495 1.14953 11.4943 1.29432L17.7057 7.50568C17.8505 7.65047 17.8109 7.89457 17.6277 7.98614L17.0623 8.26885C16.7846 8.40771 16.4784 8.48 16.1679 8.48H15.4043C15.3247 8.48 15.2484 8.51161 15.1921 8.56787L10.8695 12.8905C10.6553 13.1047 10.5805 13.4215 10.6763 13.7089V13.7089C11.0116 14.7148 10.9336 15.8128 10.4594 16.7613L10.3856 16.9088C10.1172 17.4456 9.40174 17.5617 8.97736 17.1374L5.42 13.58ZM5.42 13.58L1 18" stroke="#404040" stroke-width="1.5" stroke-linecap="round"/>
</svg>



<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


          </span>
          <h4 class="text-xl font-semibold">SUBMIT REVIEW</h4>
                <v-textarea
          rows="8"
            color="neutral-800"
            class=" bg-inherit text-neutral-700 !outline-none  !border-none !p-0 mt-5 mb-5"
            rounded="lg"
            label="Review:"
            hide-details
            density="compact"
            variant="outlined"
          />

          <div class="flex justify-end">
            <button class="text-neutral-100 bg-neutral-700 rounded px-7 py-1 mb-5">Submit</button>
          </div>

        </div>
        </div>

    </v-dialog>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}


.custom-dashed-dialog {
  border: 1px dashed #A3A3A3;
  border-style: dashed;
  border-width: 3px;
  border-radius: 8px; 
}


</style>
