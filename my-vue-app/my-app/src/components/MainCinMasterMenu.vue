<script setup>
import MainAddOffer from "./AddOffer/MainAddOffer.vue";
import MainCoinTransfer from "./CoinTransfer/MainCoinTransfer.vue";
import MainAdvance from "./AdvanceSetting/MainAdvance.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["offer"]);
function handleClick(item) {
  display.value = item;
}
</script>
<template>
  <div v-if="display === 'offer'">
    <MainAddOffer @handleClick="handleClick" />
  </div>
  <div v-if="display === 'coinTransfer'">
    <MainCoinTransfer @handleClick="handleClick" />
  </div>
  <div v-if="display === 'advance-setting'">
    <MainAdvance @handleClick="handleClick" />
  </div>
</template>
