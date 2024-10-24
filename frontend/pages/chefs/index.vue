<script setup lang="ts">
import { getChefs } from '@/graphql/getChefs'
import type { ChefEntityResponseCollection } from '@/types'

const route = useRoute()
type resChef = { chefs: ChefEntityResponseCollection }
const { result: chefInfo } = useQuery<resChef>(getChefs, { id: route.params.id })
definePageMeta({
  layout: 'layout-1440',
})
useHead({
  title: 'CURRY & Co. | Chefs',
})
</script>
<template>
  <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
    <div v-for="chef in chefInfo?.chefs.data" class="w-full max-w-sm bg-slate-300 dark:bg-cyan-700 border border-gray-200 dark:border-cyan-900 rounded-lg shadow ">
      <div class="flex flex-col items-center py-10">
        <NuxtImg v-if="chef?.attributes?.image" :src="$getImageUrl(String(chef?.attributes?.image?.data?.attributes?.url))" class="w-60 h-60 mb-3 rounded-full shadow-lg object-cover" />
        <h5 class="mb-1 text-2xl font-medium text-gray-900 dark:text-white">{{ chef?.attributes?.Name }}</h5>
        <div class="flex mt-4 md:mt-6">
          <NuxtLink :to="`/chef/${chef?.id}`" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-slate-800 dark:hover:text-white bg-slate-400 rounded-lg hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300 ">View Chef</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
