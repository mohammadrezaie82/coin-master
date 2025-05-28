<!-- 
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


</script>


<template>
             <div class="w-44 mx-auto mt-20 text-center font-sans relative">
    <div class="relative w-44 h-44 mx-auto">
      <canvas ref="myChart" class="rounded-full "></canvas>
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
  
</template>



<style>

</style> -->