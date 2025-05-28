<script setup>
import { ref } from "vue";

import MenuPage from "./MenuPage.vue";
const drawer = ref(false); // کنترل باز/بسته بودن منو
const menuLocation = ref("right"); // موقعیت منو: 'left' یا 'right'
const emit = defineEmits(["handleClick"]);

function handleClick(pageName) {
  console.log("Page selected:", pageName);
  drawer.value = false; // بستن منو بعد از کلیک روی گزینه‌ها
  emit("handleClick", pageName);
}
</script>
<template>
  <aside
    class="hidden lg:col-span-1 lg:block w-1/2 bg-neutral-400 dark:bg-neutral-700"
  >
    <div
      class="w-full pt-11 !mb-3 !px-4 !mx-auto flex flex-col items-center gap-5"
    >
      <!-- icon menu -->
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          temporary
          :location="menuLocation"
          :width="300"
        >
          <MenuPage @handleClick="handleClick" />
        </v-navigation-drawer>
        <v-main class="col-span-1 pt-1">
          <div class="text-white" @click="drawer = !drawer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 cursor-pointer stroke-neutral-900 dark:stroke-neutral-100 lg:stroke-neutral-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </v-main>
      </v-layout>

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
  </aside>
</template>
