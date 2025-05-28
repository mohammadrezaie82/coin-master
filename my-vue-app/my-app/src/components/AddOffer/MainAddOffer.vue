<script setup>
import { ref } from "vue";
import AddPhoto from "./AddPhoto.vue";
import MainSidebar from "../MainSidebar.vue";
const dataItem = ref([
  {
    id: 1,
    day: "sunday",
    duration: "hourly",
    timeFrom: "09:00",
    timeTo: "09:30",
    condition: "women only",
    quantity: "15",
  },
  {
    id: 2,
    day: "saturday",
    duration: "daily",
    timeFrom: "2025-09-11",
    timeTo: "2025-09-18",
    condition: "men only",
    quantity: "20",
  },
  {
    id: 3,
    day: "monday",
    duration: "daily",
    timeFrom: "2025-09-11",
    timeTo: "2025-09-18",
    condition: "women only",
    quantity: "25",
  },
  {
    id: 4,
    day: "monday",
    duration: "minute",
    timeFrom: "09:10",
    timeTo: "09:30",
    condition: "women only",
    quantity: "10",
  },
]);
const form = ref({
  title: "",
  type: "",
  quantity: "",
  expirationDate: "",
  discount: "",
  price: "",
  location: "",
  Amenities: "",
  Duration: "",
});
const isShowAmenities = ref(true);
const isShowTimeline = ref(false);
function isAmenities() {
  isShowAmenities.value = true;
  isShowTimeline.value = false;
}
function isTimeline() {
  isShowAmenities.value = false;
  isShowTimeline.value = true;
}
const emit = defineEmits(["handleClick"]);
function handleClick(pageName) {
  emit("handleClick", pageName);
}
// const photo = ref(null);
// const previewImage = ref("");
// const defaultImage = "https://i.pravatar.cc/150?img=13";
// const fileInput = ref(null);
// const triggerFileInput = () => {
//   fileInput.value?.$el?.querySelector("input")?.click();
// };

// وقتی عکس انتخاب شد، پیش‌نمایش بساز
// const onPhotoChange = () => {
//   const file = photo.value;
//   if (file && file instanceof File) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       previewImage.value = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const timeline = ref({
//   durationType: "",
//   day: "",
//   from: "",
//   to: "",
//   condition: "",
//   quantity: "",
// });

// const timelines = ref([]);
// const tab = ref("timeline");

// function addTimeline() {
//   timelines.value.push({ ...timeline.value });
//   timeline.value = {
//     durationType: "",
//     day: "",
//     from: "",
//     to: "",
//     condition: "",
//     quantity: "",
//   };
// }

// function removeTimeline(index) {
//   timelines.value.splice(index, 1);
// }

// function editTimeline(index) {
//   timeline.value = { ...timelines.value[index] };
//   timelines.value.splice(index, 1);
// }

// function submitForm() {
//   console.log("Form submitted:", {
//     ...form.value,
//     photo: photo.value,
//     timelines: timelines.value,
//   });
// }
</script>
<template>
  <div
    class="grid grid-cols-12 w-screen h-screen dark:bg-neutral-900 bg-neutral-100"
  >
    <MainSidebar @handleClick="handleClick" />
    <div
      class="col-span-12 lg:col-span-11 bg-neutral-100 py-9 dark:bg-neutral-900 px-9 lg:px-0 lg:!pr-20"
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
            class="lg:size-6 size-4"
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
            class="lg:size-6 size-4"
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
            class="lg:size-6 size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        class="grid grid-cols-12 mt-6 border-2 border-neutral-400 border-solid rounded-md"
      >
        <div
          class="col-span-12 lg:col-span-6 border-b-2 lg:border-r-2 border-neutral-400 px-6 py-4"
        >
          <h1 class="text-[20px] font-[500] dark:text-neutral-100">
            Add Offer
          </h1>
          <div
            class="hidden bg-neutral-100 dark:bg-neutral-900 lg:grid grid-cols-12 gap-x-6 mt-3"
          >
            <div class="col-span-5">
              <AddPhoto />
              <v-autocomplete
                color="neutral-100"
                class="input bg-inherit flex-1 dark:text-neutral-100"
                rounded="lg"
                label="Discount percentage"
                v-model="form.discount"
                hide-details
                density="compact"
                variant="outlined"
                item-value="title"
                item-title="title"
                :items="form.title"
                append-inner-icon="mdi-menu-down"
                suffix="%"
              />
            </div>
            <div class="col-span-7">
              <v-autocomplete
                color="neutral-100 "
                class="input bg-inherit flex-1 dark:text-neutral-100 pb-5"
                rounded="lg"
                label="title:"
                v-model="form.title"
                hide-details
                density="compact"
                variant="outlined"
                item-value="title"
                item-title="title"
                :items="form.title"
                append-inner-icon="mdi-menu-down"
              />

              <v-autocomplete
                color="neutral-100 "
                class="input bg-inherit flex-1 dark:text-neutral-100 pb-5"
                rounded="lg"
                label="type:"
                v-model="form.type"
                hide-details
                density="compact"
                variant="outlined"
                item-value="title"
                item-title="title"
                :items="form.type"
                append-inner-icon="mdi-menu-down"
              />
              <v-autocomplete
                color="neutral-100"
                class="input bg-inherit flex-1 dark:text-neutral-100 pb-5"
                rounded="lg"
                label="quantity:"
                v-model="form.quantity"
                hide-details
                density="compact"
                variant="outlined"
                item-value="title"
                item-title="title"
                :items="form.quantity"
                append-inner-icon="mdi-menu-down"
              />

              <div class="text-neutral-700 flex-1 pb-5">
                <v-text-field
                  rounded="lg"
                  id="dateRangeInput"
                  type="text"
                  v-model="form.expirationDate"
                  density="compact"
                  label="Expiration date"
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

              <v-autocomplete
                color="neutral-100"
                class="input bg-inherit flex-1 dark:text-neutral-100 pb-5"
                rounded="lg"
                label="Price:"
                v-model="form.price"
                hide-details
                density="compact"
                variant="outlined"
                item-value="title"
                item-title="title"
                :items="form.price"
                append-inner-icon="mdi-menu-down"
                suffix="OCT"
              />
            </div>
            <v-textarea
              v-model="form.location"
              label="Location"
              rows="2"
              auto-grow
              variant="outlined"
              class="input bg-inherit dark:text-neutral-100 col-span-12"
              density="compact"
              hide-details
              color="neutral-100"
              rounded="lg"
            />
            <v-textarea
              v-model="form.location"
              label="Description"
              rows="2"
              auto-grow
              variant="outlined"
              class="input bg-inherit dark:text-neutral-100 col-span-12 mt-5"
              density="compact"
              hide-details
              color="neutral-100"
              rounded="lg"
            />
          </div>
          <div
            class="bg-neutral-100 dark:bg-neutral-900 lg:hidden gap-x-6 mt-3"
          >
            <AddPhoto />
            <v-autocomplete
              color="text-neutral-100 "
              class="input flex-1 text-neutral-800 dark:text-neutral-100 pb-5"
              rounded="lg"
              label="title:"
              v-model="form.title"
              hide-details
              density="compact"
              variant="outlined"
              item-value="title"
              item-title="title"
              :items="form.title"
              append-inner-icon="mdi-menu-down"
            />

            <v-autocomplete
              color="neutral-100 "
              class="input bg-inherit flex-1 text-neutral-800 dark:text-neutral-100 pb-5"
              rounded="lg"
              label="type:"
              v-model="form.type"
              hide-details
              density="compact"
              variant="outlined"
              item-value="title"
              item-title="title"
              :items="form.type"
              append-inner-icon="mdi-menu-down"
            />
            <v-autocomplete
              color="neutral-100"
              class="input bg-inherit flex-1 text-neutral-800 dark:text-neutral-100 pb-5"
              rounded="lg"
              label="quantity:"
              v-model="form.quantity"
              hide-details
              density="compact"
              variant="outlined"
              item-value="title"
              item-title="title"
              :items="form.quantity"
              append-inner-icon="mdi-menu-down"
            />

            <div class="text-neutral-700 flex-1 pb-5">
              <v-text-field
                rounded="lg"
                id="dateRangeInput"
                type="text"
                v-model="form.expirationDate"
                density="compact"
                label="Expiration date"
                variant="outlined"
                class="input bg-inherit text-neutral-800 dark:text-neutral-100"
                persistent-hint
                hide-details
              >
                <template v-slot:append-inner></template>
              </v-text-field>
              <date-picker
                auto-submit
                dense
                locale="en,fa"
                class="input dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100"
                format="YYYY/M/D"
                element="dateRangeInput"
              />
            </div>

            <div class="flex gap-3">
              <v-autocomplete
                color="neutral-100"
                class="input bg-inherit flex-1 text-neutral-800 dark:text-neutral-100 pb-5"
                rounded="lg"
                label="Discount percentage"
                v-model="form.discount"
                hide-details
                density="compact"
                variant="outlined"
                item-value="title"
                item-title="title"
                :items="form.title"
                append-inner-icon="mdi-menu-down"
                suffix="%"
              />
              <v-autocomplete
                color="neutral-100"
                class="input bg-inherit flex-1 text-neutral-800 dark:text-neutral-100 pb-5"
                rounded="lg"
                label="Price:"
                v-model="form.price"
                hide-details
                density="compact"
                variant="outlined"
                item-value="title"
                item-title="title"
                :items="form.price"
                append-inner-icon="mdi-menu-down"
                suffix="OCT"
              />
            </div>
            <v-textarea
              v-model="form.location"
              label="Location"
              rows="2"
              auto-grow
              variant="outlined"
              class="input bg-inherit dark:text-neutral-100 col-span-12"
              density="compact"
              hide-details
              color="neutral-100"
              rounded="lg"
            />
            <v-textarea
              v-model="form.location"
              label="Description"
              rows="2"
              auto-grow
              variant="outlined"
              class="input bg-inherit dark:text-neutral-100 col-span-12 mt-5"
              density="compact"
              hide-details
              color="neutral-100"
              rounded="lg"
            />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 px-6 py-4">
          <div class="text-[18px] font-[500] grid grid-cols-10 lg:grid-cols-9">
            <button
              class="col-span-5 lg:col-span-3 border-2 border-solid border-neutral-400 rounded-l-md p-2 text-neutral-400 text-[10px] lg:text-[16px]"
              @click="isAmenities"
              :class="{ 'bg-neutral-400 !text-neutral-100': isShowAmenities }"
            >
              Amenities & Facilities
            </button>
            <button
              class="col-span-5 lg:col-span-3 border-2 border-solid border-neutral-400 rounded-r-md p-2 text-neutral-400 text-[10px] lg:text-[16px]"
              @click="isTimeline"
              :class="{ 'bg-neutral-400 !text-neutral-100': isShowTimeline }"
            >
              Timeline
            </button>
          </div>
          <div v-if="isShowAmenities">
            <div class="text-neutral-100 mt-9 my-6">
              <v-autocomplete
                label="Amenities & Facilities:"
                v-model="form.Amenities"
                :items="form.title"
                item-value="title"
                item-title="title"
                hide-details
                density="compact"
                variant="outlined"
                rounded="lg"
                append-inner-icon="mdi-menu-down"
                class="text-neutral-800 dark:text-neutral-100"
                color="text-neutral-100"
              />
            </div>
            <div class="flex flex-col gap-6 mx-8">
              <div class="flex justify-between items-center">
                <span
                  class="text-neutral-900 dark:text-neutral-100 capitalize text-[13px] lg:text-xl font-[600]"
                >
                  <span class="mr-2 text-neutral-900">•</span> module
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="lg:size-6 size-4 stroke-neutral-900 dark:stroke-neutral-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div v-if="isShowTimeline">
            <div class="mt-9">
              <div
                class="grid grid-cols-12 gap-6 border-b-2 border-solid border-neutral-300 pb-6"
              >
                <v-autocomplete
                  color="neutral-100"
                  class="input bg-inherit flex-1 dark:text-neutral-100 lg:col-span-3 col-span-6"
                  rounded="lg"
                  label="Duration type"
                  v-model="form.Duration"
                  hide-details
                  density="compact"
                  variant="outlined"
                  item-value="title"
                  item-title="title"
                  :items="form.title"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-100 "
                  class="input bg-inherit flex-1 dark:text-neutral-100 lg:col-span-3 col-span-6"
                  rounded="lg"
                  label="Duration type"
                  v-model="form.Duration"
                  hide-details
                  density="compact"
                  variant="outlined"
                  item-value="title"
                  item-title="title"
                  :items="form.title"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-100 "
                  class="input bg-inherit flex-1 dark:text-neutral-100 lg:col-span-3 col-span-6"
                  rounded="lg"
                  label="Duration type"
                  v-model="form.Duration"
                  hide-details
                  density="compact"
                  variant="outlined"
                  item-value="title"
                  item-title="title"
                  :items="form.title"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-100 "
                  class="input bg-inherit flex-1 dark:text-neutral-100 lg:col-span-3 col-span-6"
                  rounded="lg"
                  label="Duration type"
                  v-model="form.Duration"
                  hide-details
                  density="compact"
                  variant="outlined"
                  item-value="title"
                  item-title="title"
                  :items="form.title"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-100 "
                  class="input bg-inherit flex-1 dark:text-neutral-100 lg:col-span-6 col-span-12"
                  rounded="lg"
                  label="Duration type"
                  v-model="form.Duration"
                  hide-details
                  density="compact"
                  variant="outlined"
                  item-value="title"
                  item-title="title"
                  :items="form.title"
                  append-inner-icon="mdi-menu-down"
                />
                <v-autocomplete
                  color="neutral-100 "
                  class="input bg-inherit flex-1 dark:text-neutral-100 lg:col-span-5 col-span-11"
                  rounded="lg"
                  label="Duration type"
                  v-model="form.Duration"
                  hide-details
                  density="compact"
                  variant="outlined"
                  item-value="title"
                  item-title="title"
                  :items="form.title"
                  append-inner-icon="mdi-menu-down"
                />
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-xl col-span-1 accent-black"
                />
              </div>
              <div class="mt-6">
                <table class="w-full">
                  <thead class="">
                    <tr
                      class="bg-neutral-300 dark:bg-neutral-600 text-neutral-900"
                    >
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] rounded-s-lg dark:text-neutral-100"
                      >
                        Day
                      </th>
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] dark:text-neutral-100"
                      >
                        Duration
                      </th>
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] dark:text-neutral-100"
                      >
                        Condition
                      </th>
                      <th
                        class="px-4 py-2 font-[600] text-[8px] lg:text-[16px] dark:text-neutral-100"
                      >
                        Quantity
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
                        {{ item.day }}
                      </td>
                      <td
                        class="px-1 py-2 text-center text-[7px] lg:text-[16px] dark:text-neutral-100"
                      >
                        {{ item.timeFrom }} - {{ item.timeTo }}
                      </td>
                      <td
                        class="px-4 py-2 text-center text-[7px] lg:text-[16px] dark:text-neutral-100"
                      >
                        {{ item.condition }}
                      </td>
                      <td
                        class="px-6 py-2 text-center text-[7px] lg:text-[16px] dark:text-neutral-100"
                      >
                        {{ item.quantity }}
                      </td>
                      <td class="px-3 py-2 text-center rounded-e-lg">
                        <div class="flex gap-3 justify-center">
                          <button
                            class="opacity-0 group-hover:!opacity-100 transition-opacity duration-200"
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
        </div>
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
</template>
