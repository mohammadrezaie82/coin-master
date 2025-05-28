<script setup>
import { ref, reactive } from "vue";
const dataItem = ref([
  {
    id: 1,
    coin: 200,
    module: "product",
    form: "Add Unit",
    field: "Type",
  },
  {
    id: 2,
    coin: 300,
    module: "product",
    form: "Add Unit",
    field: "Type",
  },
  {
    id: 3,
    coin: 700,
    module: "product",
    form: "Add Unit",
    field: "Type",
  },
  {
    id: 4,
    coin: 900,
    module: "product",
    form: "Add Unit",
    field: "Type",
  },
]);
const newItemForm = reactive({
  amount: "50",
  form: "???",
  field: "???",
  module: "Product",
});
const ShowEdit = ref(false);
</script>
<template>
  <div
    class="col-span-12 lg:col-span-11 bg-neutral-100 dark:bg-neutral-900 px-9 lg:px-0 lg:!pr-20"
  >
    <div class="w-full">
      <div class="flex items-end gap-4">
        <p
          class="pr-2 lg:text-2xl text-[16px] font-[500] border-r-2 border-neutral-900 uppercase dark:text-neutral-100 dark:border-neutral-100"
        >
          COINMASTER
        </p>
        <span
          class="capitalize lg:text-[16px] text-[13px] dark:text-neutral-100"
          >Advance | FBGC</span
        >
      </div>
      <div class="flex items-center gap-2 my-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <span>By filling out these fields you'll receive coins</span>
      </div>
      <div class="border-[1px] border-solid border-neutral-400 rounded-md mt-6">
        <div class="w-full grid grid-cols-12">
          <div
            class="lg:col-span-7 border-b-[1px] lg:border-r-2 border-neutral-400 text-start p-9"
          >
            <h1 class="font-bold text-[20px] dark:text-neutral-100">
              Added Items
            </h1>
            <div class="flex flex-col gap-3 mt-3">
              <div class="mt-6">
                <table class="w-full">
                  <thead class="">
                    <tr
                      class="bg-neutral-300 dark:bg-neutral-600 text-neutral-900"
                    >
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] rounded-s-lg dark:text-neutral-100"
                      >
                        Amount
                      </th>
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] dark:text-neutral-100"
                      >
                        Module
                      </th>
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] dark:text-neutral-100"
                      >
                        Form
                      </th>
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] dark:text-neutral-100"
                      >
                        Field
                      </th>
                      <th class="px-4 py-2 rounded-e-lg"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in dataItem"
                      :key="item.id"
                      class="text-neutral-800 group hover:bg-neutral-300 dark:hover:bg-neutral-500 transition rounded-lg cursor-pointer"
                    >
                      <td
                        class="px-4 py-2 text-center text-[7px] lg:text-[16px] rounded-s-lg dark:text-neutral-100"
                      >
                        {{ item.coin }}
                      </td>
                      <td
                        class="px-1 py-2 text-center text-[7px] lg:text-[16px] dark:text-neutral-100"
                      >
                        {{ item.module }}
                      </td>
                      <td
                        class="px-4 py-2 text-center text-[7px] lg:text-[16px] dark:text-neutral-100"
                      >
                        {{ item.form }}
                      </td>
                      <td
                        class="px-6 py-2 text-center text-[7px] lg:text-[16px] dark:text-neutral-100"
                      >
                        {{ item.field }}
                      </td>
                      <td class="px-3 py-2 text-center rounded-e-lg">
                        <div class="flex gap-3 justify-center">
                          <button
                            class="opacity-0 group-hover:!opacity-100 transition-opacity duration-200"
                            @click="ShowEdit = !ShowEdit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              class="lg:size-6 size-4 stroke-neutral-900 dark:hover:!stroke-neutral-100"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </button>
                          <button
                            class="opacity-0 group-hover:!opacity-100 transition-opacity duration-200"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="lg:size-6 size-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5 text-start p-9">
            <div
              class="border-dashed lg:border-0 border-2 border-neutral-400 rounded-lg"
            >
              <p
                class="font-bold text-[20px] ring-2 lg:ring-0 ring-neutral-200 rounded-lg bg-neutral-200 dark:bg-neutral-700 lg:bg-neutral-100 p-6 lg:p-0 dark:lg:bg-neutral-900 dark:text-neutral-100 pb-6"
              >
                Fill blank get coin
              </p>
              <div class="flex flex-col gap-6">
                <v-text-field
                  color="neutral-900 dark:neutral-100"
                  class="dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
                  rounded="lg"
                  label="Amount:"
                  v-model="newItemForm.amount"
                  hide-details
                  density="compact"
                  variant="outlined"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-900 dark:neutral-100"
                  class="dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
                  rounded="lg"
                  label="Module:"
                  v-model="newItemForm.module"
                  hide-details
                  :disabled="ShowEdit"
                  density="compact"
                  variant="outlined"
                  item-value="id"
                  item-title="module"
                  :items="dataItem.module"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-900 dark:neutral-100"
                  class="dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
                  rounded="lg"
                  label="Form:"
                  v-model="newItemForm.form"
                  hide-details
                  :disabled="ShowEdit"
                  density="compact"
                  variant="outlined"
                  item-value="id"
                  item-title="form"
                  :items="dataItem.form"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-900 dark:neutral-100"
                  class="dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0 capitalize input bg-inherit flex-1 dark:text-neutral-100"
                  rounded="lg"
                  label="Field:"
                  v-model="newItemForm.field"
                  hide-details
                  :disabled="ShowEdit"
                  density="compact"
                  variant="outlined"
                  item-value="id"
                  item-title="field"
                  :items="dataItem.field"
                  append-inner-icon="mdi-menu-down"
                />
              </div>
              <div class="text-end">
                <button
                  class="bg-neutral-700 text-neutral-100 px-6 py-1 rounded-md mt-4 w-2/4"
                >
                  {{ ShowEdit ? "Save" : "Add" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
