<script setup lang="ts">
import type { PropType } from 'vue'
import type { ComponentBlockCtaDishes } from '~/types'
defineProps({
  data: {
    type: Object as PropType<ComponentBlockCtaDishes>,
  },
})
</script>
<template>
  <section class="bg-yellow-500 dark:bg-slate-500 py-10 px-5 lg:px-16">
    <div class="mx-auto mt-4 max-w-6xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-4/5">
      <div class="flex justify-between items-center pb-10">
        <h2 class="text-white text-6xl max-w-20 font-bold mb-6">{{ data?.title || 'Our Dishes' }}</h2>
        <NuxtLink
          to="/dishes"
          type="button"
          class="text-white border bg-transparent hover:bg-yellow-800 transition-all ease-linear focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          see all
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </NuxtLink>
      </div>
      <MoleculesDishCard
        v-for="(dish, index) in data?.dishes?.data"
        :key="index"
        :id="dish?.id ?? ''"
      />
    </div>
  </section>
</template>
