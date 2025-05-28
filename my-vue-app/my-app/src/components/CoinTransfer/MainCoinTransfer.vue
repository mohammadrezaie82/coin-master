<script setup>
import { reactive, ref } from "vue";
// import DatePicker from "vue3-persian-datetime-picker";
import MainSidebar from "../MainSidebar.vue";
import ChartPage from "../ChartPage.vue";

const value = ref([360, 600]);
const dataItem = ref([
  {
    id: 1,
    coin: 200,
    to: "mohammad rezaie",
    from: "aliReza",
    title: "Encouragement",
    date: "2025 - 19 - 08",
    description: "fnbjdfbadsfbadjsfnbajdf",
    imageUrl: "https://i.pravatar.cc/150?img=13",
    status: "successful",
    trackingCode: "0021564",
  },
  {
    id: 2,
    coin: 300,
    to: "mohammad ali",
    from: "aliReza",
    title: "gift",
    date: "2025 - 19 - 04",
    description: "fnbjdfbadsfbadjsfnbajdf",
    imageUrl: "https://i.pravatar.cc/150?img=19",
    status: "successful",
    trackingCode: "002156",
  },
  {
    id: 3,
    coin: 700,
    to: "mohammad hasani",
    from: "aliReza",
    title: "Encouragement",
    date: "2025 - 19 - 20",
    description: "fnbjdfbadsfbadjsfnbajdf",
    imageUrl: "https://i.pravatar.cc/150?img=25",
    status: "successful",
    trackingCode: "00215647",
  },
  {
    id: 4,
    coin: 900,
    to: "sara alizade",
    from: "aliReza",
    title: "gift",
    date: "2025 - 09 - 01",
    description: "fnbjdfbadsfbadjsfnbajdf",
    imageUrl: "https://i.pravatar.cc/150?img=30",
    status: "successful",
    trackingCode: "00215644",
  },
]);

const showAddItemModal = ref(false); // کنترل مودال
const showFilterPage = ref(false);
const showPrintPage = ref(false);
const data = ref({});

const newItemForm = reactive({
  title: "reza",
  from: "mohammad",
  to: "alireza",
  date: "2025-02-04",
  description: "sdfgsdfsdf",
});
const trySubmitItem = () => {
  if (
    newItemForm.title &&
    newItemForm.from &&
    newItemForm.to &&
    newItemForm.date &&
    newItemForm.description
  ) {
    showAddItemModal.value = true;
  } else {
    alert("لطفاً همه فیلدها را پر کنید.");
  }
};
const confirmAddItem = () => {
  dataItem.value.push({
    ...newItemForm,
    id: Date.now(),
  });

  // ریست فرم
  newItemForm.title = "";
  newItemForm.from = "";
  newItemForm.to = "";
  newItemForm.date = "";
  newItemForm.description = "";

  showAddItemModal.value = false;
};

const cancelAdd = () => {
  showAddItemModal.value = false;
};
function openDialogById(id) {
  const item = dataItem.value.find((i) => i.id === id);
  if (item) {
    data.value = item;
    showPrintPage.value = true;
  }
}

const selectedItem = ref(null);
const showReceiptModal = ref(false);
function openReceiptModalById(id) {
  selectedItem.value = dataItem.value.find((item) => item.id === id);
  showReceiptModal.value = true;
}
const emit = defineEmits(["handleClick"]);
function handleClick(pageName) {
  console.log("Page selected:", pageName);

  emit("handleClick", pageName);
}
</script>

<template>
  <div
    class="grid grid-cols-12 w-screen h-screen dark:bg-neutral-900 bg-neutral-100"
  >
    <MainSidebar @handleClick="handleClick" />
    <div
      class="lg:col-span-8 col-span-11 bg-neutral-100 py-9 dark:bg-neutral-900 ml-9 lg:ml-0 lg:pr-9"
    >
      <div class="w-full flex justify-between">
        <div class="flex items-end gap-4">
          <h1
            class="pr-2 lg:text-2xl text-[16px] font-[500] border-r-2 border-neutral-900 uppercase dark:text-neutral-100 dark:border-neutral-100"
          >
            COINMASTER
          </h1>
          <span
            class="capitalize lg:text-[16px] text-[13px] dark:text-neutral-100"
            >Add Offer</span
          >
        </div>

        <div class="flex lg:hidden items-center gap-5">
          <!-- icon menu -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="lg:size-6 size-4 dark:stroke-neutral-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <!-- icon home -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="lg:size-6 size-4 dark:stroke-neutral-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>

          <!-- icon filter -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="lg:size-6 size-4 dark:stroke-neutral-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div class="border-[1px] border-solid border-neutral-400 rounded-md mt-6">
        <div class="w-full flex flex-col lg:flex-row">
          <div
            class="lg:w-[40%] border-b-[1px] lg:border-r-2 border-neutral-400 text-start p-9"
          >
            <h1 class="font-bold text-[20px] dark:text-neutral-100">
              Latest Transaction
            </h1>
            <div class="flex flex-col gap-3 mt-3">
              <div
                v-for="(date, index) in dataItem"
                :key="index"
                class="bg-neutral-200 dark:bg-neutral-700 rounded-lg p-4 pb-7 border-b-2 border-dashed border-neutral-400 relative"
                @click="openReceiptModalById(index)"
              >
                <div
                  class="flex bg-neutral-200 dark:bg-neutral-700 items-center mb-3"
                >
                  <span
                    class="border-r-2 border-neutral-500 font-bold text-[16px] pr-2 mr-2 dark:text-neutral-100"
                    >{{ date.coin }} OCT</span
                  >
                  <div class="text-[13px] flex gap-2 dark:text-neutral-100">
                    To:<img
                      :src="date.imageUrl"
                      alt="User Avatar"
                      class="rounded-full w-6 h-6"
                    />
                    <p>{{ date.to }}</p>
                  </div>
                </div>
                <div class="text-[13px] dark:text-neutral-100">
                  Title: {{ date.title }}
                </div>
                <span
                  class="absolute -bottom-1 right-5 text-[13px] text-neutral- dark:text-neutral-100"
                  >{{ date.date }}</span
                >
              </div>
            </div>
          </div>
          <div class="lg:w-[60%] text-start p-9">
            <div
              class="border-dashed lg:border-0 border-2 border-neutral-400 rounded-lg"
            >
              <h1
                class="font-bold text-[20px] ring-2 lg:ring-0 ring-neutral-200 rounded-lg bg-neutral-200 dark:bg-neutral-700 lg:bg-neutral-100 p-6 lg:p-0 dark:lg:bg-neutral-900 dark:text-neutral-100"
              >
                Coin Transfer
              </h1>
              <div class="lg:pt-6 lg:p-0 p-6">
                <!-- ردیف اول -->
                <div class="flex flex-col lg:flex-row gap-4 mb-6">
                  <v-autocomplete
                    color="neutral-900 "
                    class="input bg-inherit flex-1 dark:text-neutral-100"
                    rounded="lg"
                    label="title:"
                    v-model="newItemForm.title"
                    hide-details
                    density="compact"
                    variant="outlined"
                    item-value="title"
                    item-title="title"
                    :items="dataItem.to"
                    append-inner-icon="mdi-menu-down"
                  />
                  <v-autocomplete
                    color="neutral-900"
                    class="input bg-inherit flex-1 dark:text-neutral-100"
                    rounded="lg"
                    label="To:"
                    v-model="newItemForm.to"
                    hide-details
                    density="compact"
                    variant="outlined"
                    item-value="to"
                    item-title="to"
                    :items="dataItem.to"
                    append-inner-icon="mdi-menu-down"
                  />
                </div>

                <!-- ردیف دوم -->
                <div class="flex flex-col lg:flex-row gap-4 mb-6">
                  <v-autocomplete
                    color="neutral-900"
                    class="input bg-inherit flex-1 dark:text-neutral-100"
                    rounded="lg"
                    v-model="newItemForm.date"
                    label="Category:"
                    hide-details
                    density="compact"
                    variant="outlined"
                    item-value="from"
                    item-title="from"
                    :items="dataItem.to"
                    append-inner-icon="mdi-menu-down"
                  />
                  <div class="text-neutral-700 flex-1">
                    <v-text-field
                      rounded="lg"
                      id="dateRangeInput"
                      type="text"
                      v-model="newItemForm.date"
                      density="compact"
                      label="Date Range"
                      variant="outlined"
                      class="input bg-inherit dark:text-neutral-100"
                      persistent-hint
                      hide-details
                    >
                      <template v-slot:append-inner></template>
                    </v-text-field>
                    <date-picker
                      auto-submit
                      dense
                      locale="en,fa"
                      class="input dark:bg-neutral-700 dark:text-neutral-100"
                      format="YYYY/M/D"
                      element="dateRangeInput"
                    />
                  </div>
                </div>

                <!-- ردیف سوم - فیلد آخر -->
                <div>
                  <v-textarea
                    v-model="newItemForm.description"
                    label="Description:"
                    rows="5"
                    auto-grow
                    variant="outlined"
                    class="input bg-inherit dark:text-neutral-100"
                    density="compact"
                    hide-details
                    color="neutral-900"
                    rounded="lg"
                  />
                </div>
                <div class="text-end">
                  <button
                    class="bg-neutral-900 text-neutral-100 py-1 px-6 rounded-md my-6 dark:text-neutral-100 dark:border-neutral-100 dark:border-[1px] dark:border-solid"
                    @click="trySubmitItem"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden lg:block lg:col-span-3 bg-neutral-400 dark:bg-neutral-700"
    >
      <ChartPage />
    </div>
    <div class="grid col-span-12 lg:hidden">
      <div
        class="flex justify-around bg-neutral-200 dark:bg-neutral-700 p-3 rounded-t-xl"
      >
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  </div>
  <v-dialog
    v-model="showAddItemModal"
    max-width="600"
    transition="dialog-bottom-transition"
    content-class="!bg-neutral-200 !dark:bg-neutral-700 !rounded-xl !shadow-lg custom-dialog-position "
  >
    <v-card class="!bg-neutral-200 !dark:bg-neutral-700 !text-[#7f7979] p-3">
      <div class="border-dashed border-2 border-neutral-400">
        <v-card-title class="text-h6">
          <button
            @click="cancelAdd"
            class="absolute top-5 right-5 text-[#7f7979] hover:text-black transition-colors"
          >
            <!-- آیکون بستن -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </v-card-title>

        <v-card-text>
          Dear Alireza Zargarani, are you sure you want to submit this
          Transaction?</v-card-text
        >

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            variant="text"
            class="border-2 border-solid border-neutral-500 px-6"
            @click="cancelAdd"
            >No</v-btn
          >
          <v-btn
            color="#404040"
            variant="flat"
            class="text-neutral-400 px-6"
            @click="confirmAddItem"
            >Yes</v-btn
          >
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
  <v-dialog
    v-model="showReceiptModal"
    max-width="500"
    content-class="!bg-neutral-100 !dark:bg-neutral-800 !text-neutral-800 !dark:text-neutral-200 rounded-xl shadow-lg"
  >
    <v-card
      class="pa-3 !bg-neutral-100 !dark:bg-neutral-800 !text-neutral-800 !dark:text-neutral-200"
      elevation="0"
      v-if="selectedItem"
    >
      <div
        class="border-dashed border-2 border-neutral-400 dark:border-neutral-500 rounded-lg p-4"
      >
        <v-card-title class="d-flex justify-space-between align-center pb-4">
          <span class="text-h6 font-weight-bold">COIN TRANSFER RECEIPT</span>
          <button
            @click="showReceiptModal = false"
            class="absolute top-5 right-5 text-[#7f7979] hover:text-black dark:hover:text-white transition-colors"
          >
            <!-- آیکون بستن -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </v-card-title>

        <v-card-text class="text-body-1">
          <v-row dense>
            <v-col cols="12" lg="6">
              <div class="mb-3"><strong>Tracking code:</strong> 0012567191</div>
              <div class="mb-3">
                <strong>Amount:</strong> {{ selectedItem.coin }} Oct
              </div>
              <div class="mb-3">
                <strong>To:</strong>
                <v-avatar size="24" class="ml-1">
                  <img :src="selectedItem.imageUrl" alt="Amin" />
                </v-avatar>
                {{ selectedItem.to }}
              </div>
              <div class="mb-3"><strong>Status:</strong> Successful</div>
            </v-col>

            <v-col cols="12" lg="6">
              <div class="mb-3">
                <strong>Date:</strong> {{ selectedItem.date }}
              </div>
              <div class="mb-3">
                <strong>Title:</strong> {{ selectedItem.title }}
              </div>
              <div class="mb-3">
                <strong>From:</strong>
                <v-avatar size="24" class="ml-1">
                  <img :src="selectedItem.imageUrl" alt="Alireza" />
                </v-avatar>
                {{ selectedItem.from }}
              </div>
            </v-col>

            <v-col cols="12">
              <div class="mb-3">
                <strong>Description:</strong> {{ selectedItem.description }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="justify-end mt-4">
          <v-btn
            variant="outlined"
            color="grey"
            class="mr-2 px-6"
            style="text-transform: none"
            >Export</v-btn
          >
          <v-btn
            variant="flat"
            color="black"
            class="text-white px-6"
            style="text-transform: none"
            @click="openDialogById(selectedItem.id)"
            >Print</v-btn
          >
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
  <v-dialog v-model="showFilterPage" class="lg:w-1/3 w-full">
    <div class="bg-neutral-200 dark:bg-neutral-900 p-4">
      <div
        class="border-2 border-dashed border-neutral-700 dark:border-neutral-100 p-6"
      >
        <h1 class="dark:text-neutral-100 text-neutral-900">FILTER</h1>
        <div class="flex items-center my-6 gap-3">
          <v-text-field
            color="neutral-900 dark:neutral-100 "
            class="dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
            rounded="lg"
            label="title:"
            v-model="newItemForm.title"
            hide-details
            density="compact"
            variant="outlined"
            item-value="title"
            item-title="title"
            :items="dataItem.to"
            append-inner-icon="mdi-menu-down"
          />
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <v-autocomplete
          color="neutral-900 dark:neutral-100"
          class="dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
          rounded="lg"
          label="People:"
          v-model="newItemForm.title"
          hide-details
          density="compact"
          variant="outlined"
          item-value="title"
          item-title="title"
          :items="dataItem.to"
          append-inner-icon="mdi-menu-down"
        />
        <div class="text-neutral-700 mt-5">
          <div class="!m-0 !p-0">
            <v-text-field
              v-model="newItemForm.date"
              rounded="lg"
              id="dateRangeInput"
              type="text"
              density="compact"
              label="daterange"
              variant="outlined"
              class="dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
              persistent-hint
            >
              <template v-slot:append-inner></template>
            </v-text-field>
          </div>

          <date-picker
            auto-submit
            locale="en,fa"
            class="!bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
            v-model="newItemForm.date"
            format="YYYY/M/D"
            element="dateRangeInput"
          />
        </div>
        <div class="my-6">
          <h1 class="dark:text-neutral-100 text-neutral-900">OCT</h1>
          <v-range-slider
            v-model="value"
            :step="10"
            :min="100"
            :max="500"
            thumb-label="always"
            class="custom-slider"
            track-color="white"
            track-fill-color="#000000"
          >
          </v-range-slider>
        </div>
        <div class="w-full flex">
          <button
            class="w-1/2 border-2 border-solid border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 px-4 mr-4 rounded-md"
          >
            Clear filter
          </button>
          <button
            class="w-1/2 bg-neutral-900 dark:bg-neutral-700 dark:border-neutral-700 text-neutral-100 px-4 border-2 border-solid border-neutral-900 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </v-dialog>
  <v-dialog v-model="showPrintPage" class="lg:w-1/3 w-full">
    <div
      v-if="data"
      class="bg-neutral-200 dark:bg-neutral-900 p-4 dark:text-neutral-100"
    >
      <h1
        class="border-b-[1px] border-neutral-700 pb-4 dark:border-neutral-100"
      >
        COIN TRANSFER RECEIPT
      </h1>
      <div class="flex h-[500px] pt-6 gap-6">
        <div class="flex flex-col gap-6">
          <h2>
            Tracking code:<span class="pl-2 text-[13px]">{{
              data.trackingCode
            }}</span>
          </h2>
          <h2>
            Amount:<span class="pl-2 text-[13px]">{{ data.coin }} OCT</span>
          </h2>
          <h2>
            To:<span class="pl-2 text-[13px]"
              ><v-avatar size="24" class="ml-1">
                <img :src="selectedItem.imageUrl" alt="Amin" /> </v-avatar
              >{{ data.to }}</span
            >
          </h2>
          <h2>
            Description:<span class="pl-2 text-[13px]">{{
              data.description
            }}</span>
          </h2>
        </div>
        <div class="flex flex-col gap-6">
          <h2>
            Title:<span class="pl-2 text-[13px]">{{ data.title }}</span>
          </h2>
          <h2>
            From:<span class="pl-2 text-[13px]"
              ><v-avatar size="24" class="ml-1">
                <img :src="selectedItem.imageUrl" alt="Amin" /> </v-avatar
              >{{ data.from }}</span
            >
          </h2>
          <h2>
            Date:<span class="pl-2 text-[13px]">{{ data.date }}</span>
          </h2>
          <h2>
            Status:<span class="pl-2 text-[13px]">{{ data.status }}</span>
          </h2>
        </div>
      </div>
      <div
        class="flex justify-between items-center border-t-2 border-dashed border-neutral-900 dark:border-neutral-100"
      >
        <div class="flex items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-neutral-900 dark:fill-neutral-100"
          >
            <path
              d="M28.0207 24.7058C27.5584 24.6968 27.1278 24.8308 26.7699 25.0662L20.6302 20.2778C20.2396 19.9732 19.692 19.9732 19.3017 20.2778L13.1638 25.0659C12.8059 24.8308 12.3753 24.6968 11.913 24.7055C10.7156 24.7289 9.74923 25.7229 9.75787 26.9204C9.76651 28.1208 10.7368 29.0922 11.9364 29.103C13.1343 29.1138 14.1298 28.1489 14.155 26.9514C14.1607 26.681 14.1172 26.4214 14.0337 26.1809L19.3024 22.0707C19.6931 21.7661 20.2407 21.7661 20.631 22.0707L25.8997 26.1805C25.8162 26.4211 25.7726 26.6806 25.7784 26.951C25.8036 28.1485 26.7991 29.1134 27.9966 29.1026C29.1962 29.0922 30.1669 28.1204 30.1755 26.9204C30.1849 25.7233 29.2182 24.7289 28.0207 24.7058ZM12.0549 28.393C11.1555 28.4506 10.4113 27.706 10.4689 26.807C10.5165 26.0635 11.1166 25.4634 11.8601 25.4158C12.7591 25.3582 13.5037 26.1028 13.4461 27.0018C13.3982 27.7449 12.798 28.3454 12.0549 28.393ZM28.0747 28.393C27.1757 28.4506 26.4311 27.706 26.4887 26.807C26.5363 26.0635 27.1364 25.4634 27.8799 25.4158C28.7789 25.3582 29.5235 26.1028 29.4659 27.0018C29.4184 27.7449 28.8182 28.3454 28.0747 28.393Z"
              class="fill-neutral-900 dark:fill-neutral-100"
            />
            <path
              d="M34.2369 23.7587C33.5694 23.5801 32.9314 23.7086 32.4331 24.033L20.6347 14.7412C20.2426 14.4323 19.69 14.4323 19.2983 14.7412L7.50169 24.033C7.0034 23.7086 6.36578 23.5804 5.69827 23.7587C4.96056 23.9556 4.37946 24.5381 4.18396 25.2762C3.74507 26.9335 5.19242 28.4057 6.84498 28.0111C7.61546 27.8271 8.2268 27.2305 8.42626 26.464C8.54687 25.9995 8.51879 25.5506 8.3809 25.1534L19.303 16.6332C19.6936 16.3286 20.2412 16.3286 20.6315 16.6332L31.5543 25.1534C31.416 25.5506 31.3879 25.9995 31.5089 26.464C31.7084 27.2305 32.3197 27.8274 33.0902 28.0111C34.7427 28.4053 36.1901 26.9335 35.7508 25.2762C35.5553 24.5378 34.9746 23.956 34.2369 23.7587Z"
              class="fill-neutral-900 dark:fill-neutral-100"
            />
            <path
              d="M31.9299 15.7062C31.9299 9.1442 26.5301 3.74438 19.9681 3.74438C13.406 3.74438 8.00586 9.1442 8.00586 15.7062C8.00586 17.5856 8.44942 19.4276 9.28543 21.0877C9.38516 21.2857 9.64114 21.3383 9.81576 21.2018L10.3119 20.8148C10.4483 20.7086 10.489 20.5206 10.4145 20.3647C9.73655 18.9469 9.37832 17.3872 9.37832 15.7973C9.37832 9.98777 14.1589 5.20757 19.9681 5.20757C25.7772 5.20757 30.5578 9.98813 30.5578 15.7973C30.5578 17.3905 30.1978 18.953 29.5177 20.3726C29.4428 20.5289 29.4838 20.7172 29.6206 20.8234L30.1168 21.2094C30.2917 21.3455 30.547 21.2929 30.6467 21.0952C31.4849 19.4337 31.9299 17.5888 31.9299 15.7062Z"
              class="fill-neutral-900 dark:fill-neutral-100"
            />
            <path
              d="M20.6643 31.976C20.6701 31.9393 20.6733 31.9015 20.6733 31.8633V31.6491C20.6748 31.6239 20.6758 31.5987 20.6758 31.5731V26.5701V24.9974C20.6758 24.4466 20.3594 23.9998 19.9687 23.9998C19.5781 23.9998 19.2616 24.4466 19.2616 24.9974V26.5701H19.2591V31.8633C19.2591 31.9018 19.2623 31.94 19.2685 31.9767C18.3968 32.2687 17.7686 33.0921 17.7686 34.0624C17.7686 35.2768 18.7529 36.2615 19.9677 36.2615H19.968H19.9684C21.1828 36.2615 22.1675 35.2772 22.1675 34.0624C22.1668 33.0914 21.5374 32.2676 20.6643 31.976Z"
              class="fill-neutral-900 dark:fill-neutral-100"
            />
          </svg>
          <span class="text-[13px]">cangrow.ERP Octopus.com</span>
        </div>
        <div class="text-[13px]">Printed By: Shilan Ilkhani</div>
      </div>
    </div>
  </v-dialog>
</template>
