<script setup>
import { ref } from "vue";
import MainSidebar from "../MainSidebar.vue";
import FBGCPage from "./FBGCPage.vue";
import PeriodicPaymentPage from "./PeriodicPaymentPage.vue";
const emit = defineEmits(["handleClick"]);
function handleClick(pageName) {
  emit("handleClick", pageName);
}
const display = ref("");
</script>
<template>
  <div class="grid grid-cols-12 h-screen bg-neutral-100 dark:bg-neutral-900">
    <MainSidebar @handleClick="handleClick" />

    <div
      class="col-span-11 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-100 pr-11 p-9"
    >
      <div v-if="display === ''">
        <!-- header -->
        <div class="text-start">
          <span
            class="text-2xl font-bold text-neutral-700 dark:text-neutral-100"
            >MAIL BOX |
          </span>
          <span class="text-base">Advance Setting</span>
        </div>

        <div
          class="w-full h-full flex justify-between gap-4 mt-6 text-neutral-700"
        >
          <div
            @click="display = 'FBGC'"
            class="w-1/3 bg-neutral-200 dark:bg-neutral-700 py-5 border-[1px] border-neutral-400 dark:border-neutral-700 dark:text-neutral-100 rounded-lg cursor-pointer text-center"
          >
            FBGC
          </div>
          <div
            @click="display = 'Periodic'"
            class="w-1/3 bg-neutral-200 dark:bg-neutral-700 py-5 border-[1px] border-neutral-400 dark:border-neutral-700 dark:text-neutral-100 rounded-lg cursor-pointer text-center"
          >
            Periodic Payment
          </div>
          <div
            @click="display = 'spam'"
            class="w-1/3 bg-neutral-200 dark:bg-neutral-700 py-5 border-[1px] border-neutral-400 dark:border-neutral-700 dark:text-neutral-100 rounded-lg cursor-pointer text-center"
          >
            Add Offer Type
          </div>
        </div>
      </div>

      <FBGCPage @handleClick="handleClick" v-if="display === 'FBGC'" />
      <PeriodicPaymentPage
        @handleClick="handleClick"
        v-if="display === 'Periodic'"
      />
      <AdvanceSpam @handleClick="handleClick" v-if="display === 'spam'" />
    </div>
  </div>
</template>
