<script setup lang="ts">
import type { ComponentListListChef } from '@/types'
defineProps({
  data: {
    type: Object as PropType<ComponentListListChef>,
  },
})
</script>
<template>
  <section class="bg-green-600 dark:bg-cyan-900 py-10 px-5 lg:px-16">
    <div class="mx-auto mt-2 max-w-6xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-4/5">
      <div class="flex justify-between items-center pb-10">
        <h2 class="text-white text-6xl max-w-20 font-bold mb-6">{{ data?.title || 'Our Chefs' }}</h2>
        
        <NuxtLink to="/chefs"
          type="button"
          class="text-white border bg-transparent hover:bg-slate-600 transition-all ease-linear focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
      <section class="grid gap-6 mt-10 grid-cols-3">
        <MoleculesChefCard
          class="first:col-span-full"
          v-for="(chef, index) in data?.chefs?.data"
          :chefId="chef?.id ?? ''"
          :key="index"
          :size="index == 0 ? 'full' : 'small'"
        />
      </section>
    </div>
  </section>
</template>
