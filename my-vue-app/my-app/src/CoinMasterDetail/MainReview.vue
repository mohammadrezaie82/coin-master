<script setup>
import { ref } from "vue";
// import ReviewsComponent from './ReviewsComponent'
import AmenitiesComponent from "./AmenitiesComponent";
import DatePicker from "vue3-persian-datetime-picker";
const dateRange = ref("");
</script>

<template>
  <!-- header -->
  <div class="flex items-end flex-nowrap !mt-11 mb-5">
    <span class="text-2xl font-bold text-neutral-700 whitespace-nowrap">
      COINMASTER |
    </span>
    <span class="text-base ml-2">Offers</span>
  </div>

  <!-- Reviews & Amenities & Facilities -->
  <div class="grid grid-cols-2 gap-9 h-[450px]">
    <div class="w-full border border-neutral-400 rounded-lg">
            <div
      class="w-full pt-[18px] px-6 mb-10 "
    >
      <h2 class="font-semibold text-start text-xl mb-4">
        Reviews <span class="font-normal text-base">(132)</span>
      </h2>
      <div
        class="flex flex-col gap-4 max-h-[400px] overflow-auto scrollbar-hide"
      >
        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>
        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>

        <div
          class="bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2"
        >
          <img
            src="../../public/images/img1.png"
            class="w-10 h-10 rounded-full"
            alt="img-user"
          />
          <p class="text-xs">
            I felt rejuvenated and relaxed, totally recommended
          </p>
        </div>
      </div>
    </div>
    </div>
    <div class="me-10">
      <AmenitiesComponent />
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
            <div class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1">
                <span>Men Only</span>
                <span>9:00- 10:30</span>
            </div>

            <div class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1">
                <span>Men Only</span>
                <span>9:00- 10:30</span>
            </div>

            <div class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1">
                <span>Men Only</span>
                <span>9:00- 10:30</span>
            </div>


            <div class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1">
                <span>Men Only</span>
                <span>9:00- 10:30</span>
            </div>

            <div class="inline-flex flex-col gap-1 text-[10px] text-neutral-700 bg-neutral-200 border border-neutral-400 rounded px-4 py-1">
                <span>Men Only</span>
                <span>9:00- 10:30</span>
            </div>

         </div>




         <!-- button shopping cart -->
          <button class="text-white bg-neutral-700 rounded px-7 py-1 mt-14 flex justify-end">
            Add to shopping cart
          </button>


      </div>
    </div>
  </div>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
