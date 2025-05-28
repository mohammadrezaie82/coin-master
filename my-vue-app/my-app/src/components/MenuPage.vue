<script setup>
// import { ref, defineProps } from "vue";
// import { defineEmits } from "vue";

// const submenuDisplay = ref(false);
// const advanceSubMenu = ref(false);

// const props = defineProps({});

const emit = defineEmits(["handleClick"]);

//display the searchbox for pages
function handleClick(pageName) {
  emit("handleClick", pageName);
}

//TAG generate
// let isModalOpen = ref({});

// function openModal(modalName) {
//     isModalOpen.value[modalName] = true;
//     drawer.value = false;
// }

// function closeTag() {
//     isModalOpen.value["tag"] = false;
// }
</script>
<template>
  <div class="h-screen">
    <ul
      class="menu py-4 min-h-full bg-neutral-400 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100 flex flex-col"
    >
      <!-- Sidebar content here -->
      <li
        class="mt-12 dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('inbox')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 dark:stroke-neutral-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
          {{ `offers` }}
        </div>
      </li>

      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('coinTransfer')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 dark:stroke-neutral-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
          {{ "Coin Transfer" }}
        </div>
      </li>

      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('offer')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          {{ "Add Offer" }}
        </div>
      </li>
      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('compose')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 11.75L10.25 14L14 8.75M11.6095 19.9507C11.4111 19.9831 11.2075 20 11 20C9.73185 20 8.61072 19.3705 7.93204 18.407C6.77066 18.6086 5.53256 18.261 4.6357 17.3641C3.73886 16.4673 3.39125 15.2292 3.59286 14.0678C2.62941 13.3891 2 12.2681 2 11C2 9.73188 2.62946 8.61077 3.59298 7.93208C3.39147 6.77079 3.7391 5.53284 4.63587 4.63607C5.53265 3.73929 6.77063 3.39166 7.93194 3.59319C8.61061 2.62955 9.73178 2 11 2C12.2682 2 13.3893 2.6295 14.068 3.59307C15.2294 3.39145 16.4674 3.73906 17.3643 4.6359C17.9863 5.2579 18.3441 6.04405 18.4378 6.8549M20.7503 11.3077C20.7503 12.5822 19.7428 13.6154 18.5 13.6154C17.2572 13.6154 16.2497 12.5822 16.2497 11.3077C16.2497 10.0332 17.2572 9 18.5 9C19.7428 9 20.7503 10.0332 20.7503 11.3077ZM14 19.9958C14.0422 17.4842 16.0408 15.4615 18.5 15.4615C20.9593 15.4615 22.9579 17.4843 23 19.996C21.6301 20.6406 20.1061 21 18.5002 21C16.8942 21 15.37 20.6406 14 19.9958Z"
              stroke="#F5F5F5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {{ "My Offer" }}
        </div>
      </li>
      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('sent')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 dark:stroke-neutral-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {{ "Favorites" }}
        </div>
      </li>
      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('drafts')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>

          {{ "Coin treasury" }}
        </div>
      </li>
      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('spam')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>

          {{ "Analysis" }}
        </div>
      </li>
      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('trash')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>

          {{ "Archive" }}
        </div>
      </li>
      <li
        class="dark:hover:border-neutral-100 capitalize hover:border-neutral-700 hover:border hover:border-solid hover:rounded-lg p-3"
      >
        <div
          @click="handleClick('advance-setting')"
          class="flex gap-3 text-[20px] items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>
          {{ "advance setting" }}
        </div>
      </li>
    </ul>
  </div>
</template>
