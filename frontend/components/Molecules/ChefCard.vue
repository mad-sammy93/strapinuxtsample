<script setup lang="ts">
import { getChefDetail } from '@/graphql/getChefDetail'
import type { ChefEntityResponse } from '@/types'
const { $getImageUrl } = useNuxtApp()
const prop = defineProps({
  chefId: String,
  size: {
    type: String,
  }
})
type resChef = { chef: ChefEntityResponse }
const { result:chefInfo, loading:chefLoading } = useQuery<resChef>(getChefDetail, { id: prop.chefId })
</script>
<template>
  <div v-if="chefInfo && !chefLoading" class=" bg-white dark:bg-gray-600 rounded-xl shadow">
    <NuxtLink :to="`/chef/${chefId}`">
      <NuxtImg v-if="chefInfo?.chef?.data?.attributes?.image" :src="$getImageUrl(String(chefInfo?.chef?.data?.attributes?.image?.data?.attributes?.url))" :alt="String(chefInfo?.chef?.data?.attributes?.image?.data?.attributes?.alternativeText)" class="w-full object-cover rounded-t-xl" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" />
    </NuxtLink>
    <div class="p-4 flex flex-wrap gap-4">
      <NuxtLink :to="`/chef/${chefId}`" class="text-gray-700 dark:text-white font-semibold">
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">{{ chefInfo?.chef?.data?.attributes?.Name }}</h4>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700 dark:text-white">{{ chefInfo?.chef?.data?.attributes?.description }}</p>
      <p class="text-gray-400 dark:text-white text-xs">related dishes:</p>
      <AtomLinkTag v-for ="dish in chefInfo?.chef?.data?.attributes?.dishes?.data" :link="`/dish/${dish?.id}`">{{dish?.attributes?.Name}}</AtomLinkTag>
    </div>
  </div>
</template>