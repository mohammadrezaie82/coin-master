<script setup>
/* global defineEmits */
import { ref } from "vue";
// import { onMounted } from 'vue'

// const emit = defineEmits(['scrolledInReviews'])
const scrollable = ref(null);

const emit = defineEmits(['open-dialog'])

const handleClick = () => {
  emit('open-dialog')
}

// function onScroll() {
//   if (scrollable.value.scrollTop > 100) {
//     emit('scrolledInReviews')
//   }
// }

const reviews = [
  { id: 1, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended', isDashed: true },
  { id: 2, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended' , isDashed: true},
  { id: 3, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended', isDashed: true },
  { id: 4, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended', isDashed: true },
  { id: 5, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended' , isDashed: true},
  { id: 6, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended' , isDashed: true},
  { id: 7, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended' , isDashed: true},
  { id: 8, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended' , isDashed: true},
  { id: 9, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended' , isDashed: true},
  { id: 10, img: '/images/img1.png', text: 'I felt rejuvenated and relaxed, totally recommended' , isDashed: true}
]

</script>

<template>
  <div class="relative  w-full border-[1px] border-neutral-400 rounded-lg pt-[18px] px-6">
    <h2 class="font-semibold text-start text-xl mb-4">
      Reviews <span class="font-normal text-base">(132)</span>
    </h2>
    <div
      ref="scrollable"
      class="flex flex-col gap-4 max-h-[400px] overflow-y-scroll scrollbar-hide"
    >
 <div
    v-for="review in reviews"
    :key="review.id"
    :class="[
      'bg-neutral-200 px-4 py-2 flex items-center rounded-lg gap-2',
      review.isDashed
        ? 'border-b border-dashed border-black'
        : 'rounded-lg'
    ]"
  >
    <img
      :src="review.img"
      class="w-10 h-10 rounded-full"
      alt="img-user"
    />
    <p class="text-xs">
      {{ review.text }}
    </p>
  </div>

    <div class="absolute bottom-[20px] left-[285px]">
        <button @click="handleClick"
          class="flex items-center whitespace-nowrap gap-1 text-white bg-neutral-700 rounded px-5 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
          Submit review
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
