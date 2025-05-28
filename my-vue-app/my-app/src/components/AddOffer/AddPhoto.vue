<script setup>
import { ref } from "vue";
// import { router, useForm } from "@inertiajs/vue3";
const form = ref({
  pr_title: "",
  pr_is_active: "",
  pr_description: "",
  pr_category_id: "",
  pr_unit_id: "",
  pr_supplier_id: "",
  pr_critical_amount: 0,
  pr_alarm_amount: 0,
  pr_remain: 10,
  pr_parent_id: "",
  pr_type_id: "",
  pr_tag_id: "",
  pr_brand: "",
  pr_code: "",
  attachment: [],
  prpi_pic_url: [],
});
// form.post(route(""), {
//   onSuccess: async (data) => {
//     disabledBTN.value = false;
//     loading.value = false;
//     router.reload({ only: ["products"] });
//     await findProduct();
//     form.reset();
//     pictures.value = [{}, {}, {}];
//     attachedFileList.value = [];
//     console.log("222");
//   },
// });
const pictures = ref([{}, {}, {}]);
const onboarding = ref(1);
// const attachedFileList = ref([]);
// function removeFile(index) {
//   attachedFileList.value.splice(index, 1);
//   form.value.attachment.splice(index, 1);
// }
function next() {
  onboarding.value =
    onboarding.value + 1 > pictures.value.length ? 1 : onboarding.value + 1;
}

function prev() {
  onboarding.value =
    onboarding.value - 1 <= 0 ? pictures.value.length : onboarding.value - 1;
}
function handleImageUpload(event, n) {
  form.value.prpi_pic_url.push(Array.from(event.target.files)[0]);
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      pictures.value[n] = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
function removephoto(n) {
  pictures.value[n] = {};
}
</script>
<template>
  <div class="col-span-1 px-1">
    <!-- Container for carousel and external navigation -->
    <div class="relative flex items-center gap-2 lg:gap-0">
      <!-- Main carousel container -->
      <div
        class="border-2 rounded border-neutral-800 dark:border-neutral-100 h-max mb-3 relative overflow-hidden flex-grow"
      >
        <div>
          <v-window v-model="onboarding">
            <v-window-item
              v-for="(n, index) in pictures"
              :key="`card-${n}`"
              :value="index + 1"
            >
              <div
                class="d-flex justify-center align-center h-[250px] lg:h-[225px] relative"
              >
                <div v-if="typeof n === 'object'">
                  <!-- Hidden file input -->
                  <input
                    type="file"
                    :ref="`fileInput${index}`"
                    style="display: none"
                    @change="handleImageUpload($event, index)"
                  />
                  <!-- Button with SVG -->
                  <div
                    @click="() => $refs[`fileInput${index}`][0].click()"
                    class="flex capitalize gap-1 cursor-pointer items-center justify-center h-full"
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
                    {{ "addPhoto" }}
                  </div>
                </div>
                <div v-else class="w-full h-full relative">
                  <!-- Remove button positioned on image -->
                  <div
                    @click="removephoto(index)"
                    class="absolute top-2 right-2 z-30 cursor-pointer w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      class="size-5 stroke-neutral-900 dark:stroke-neutral-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>

                  <img
                    :src="n"
                    alt="baner"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </v-window-item>
          </v-window>

          <!-- Navigation controls - Internal on large screens -->
          <div class="absolute bottom-4 left-0 right-0 z-20 block">
            <v-card-actions class="justify-between items-center flex px-4">
              <!-- Previous button -->
              <div
                variant="plain"
                @click="prev"
                class="cursor-pointer w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-5 text-neutral-900 dark:text-neutral-100"
                  :class="arrowlocale"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>

              <!-- Pagination dots -->
              <v-item-group
                v-model="onboarding"
                class="text-center flex gap-2"
                mandatory
              >
                <v-item
                  v-for="(n, index) in pictures"
                  :key="`btn-${n}`"
                  v-slot="{ isSelected, toggle }"
                  :value="index + 1"
                >
                  <div
                    class="border-2 rounded-full w-3 h-3 cursor-pointer transition-all duration-200"
                    :class="
                      isSelected
                        ? 'bg-white border-white'
                        : 'bg-white/50 border-white/70 hover:bg-white/80'
                    "
                    @click="toggle"
                  ></div>
                </v-item>
              </v-item-group>

              <!-- Next button -->
              <div
                variant="plain"
                @click="next"
                class="cursor-pointer w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-5 text-neutral-900"
                  :class="arrowlocale"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </v-card-actions>
          </div>

          <!-- Pagination dots for small screens - Below carousel -->
          <div class="absolute -bottom-8 left-0 right-0 z-20 lg:hidden">
            <v-item-group
              v-model="onboarding"
              class="text-center flex gap-2 justify-center"
              mandatory
            >
              <v-item
                v-for="(n, index) in pictures"
                :key="`btn-${n}`"
                v-slot="{ isSelected, toggle }"
                :value="index + 1"
              >
                <div
                  class="border-2 rounded-full w-3 h-3 cursor-pointer transition-all duration-200"
                  :class="
                    isSelected
                      ? 'bg-neutral-800 border-neutral-800'
                      : 'bg-neutral-400 border-neutral-400 hover:bg-neutral-600'
                  "
                  @click="toggle"
                ></div>
              </v-item>
            </v-item-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
