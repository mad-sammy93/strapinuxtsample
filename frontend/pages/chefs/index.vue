<script setup lang="ts">
import { getChefs } from '@/graphql/getChefs'
import type { ChefEntityResponseCollection } from '@/types'

const route = useRoute()
type resChef = { chefs: ChefEntityResponseCollection }
const { result: chefInfo, loading: chefLoading } = useQuery<resChef>(getChefs, { id: route.params.id })
definePageMeta({
  layout: 'layout-1440',
})
useHead({
  title: 'CURRY & Co. | Chefs',
})
</script>
<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
    <div v-for="chef in chefInfo?.chefs.data" class="w-full max-w-sm bg-cyan-800 dark:bg-gray-600 border border-gray-200 rounded-lg shadow ">
      <!-- <div class="flex justify-end px-4 pt-4">
       
      </div> -->
      <div class="flex flex-col items-center py-10">
        <NuxtImg v-if="chef?.attributes?.image" :src="$getImageUrl(String(chef?.attributes?.image?.data?.attributes?.url))" class="w-40 h-40 mb-3 rounded-full shadow-lg object-cover" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ chef?.attributes?.Name }}</h5>
        <!-- <span class="text-sm text-gray-500 dark:text-gray-400">{{ chef?.attributes?.description }}</span> -->
        <div class="flex mt-4 md:mt-6">
          <NuxtLink :to="`/chef/${chef?.id}`" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Chef</NuxtLink>
          <!-- <a
            href="#"
            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >Message</a
          > -->
        </div>
      </div>
    </div>
  </div>
</template>
