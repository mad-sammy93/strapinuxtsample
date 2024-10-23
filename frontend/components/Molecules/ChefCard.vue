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
const { result:data, loading:chefLoading } = useQuery<resChef>(getChefDetail, { id: prop.chefId })
const chefInfo = ref(data?.value?.chef?.data?.attributes)
</script>
<template>
  <div v-if="chefInfo && !chefLoading" class="bg-white rounded-lg overflow-hidden shadow-lg">
    <NuxtImg v-if="chefInfo?.image" :src="$getImageUrl(String(chefInfo?.image?.data?.attributes?.url))" :alt="String(chefInfo?.image?.data?.attributes?.alternativeText)" class="w-full object-cover  top h-screen" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" />
    <div class="p-4 flex flex-wrap gap-4">
      <NuxtLink :to="`/chef/${chefId}`" class="text-gray-700 font-semibold"><h4 class="text-green-700 font-semibold mb-2">{{ chefInfo?.Name }}</h4></NuxtLink>
      <p class="text-gray-500 text-sm mb-2">{{ chefInfo?.description }}</p>
      <p class="text-gray-400 text-xs">related dishes:</p>
      <AtomLinkTag v-for ="dish in chefInfo?.dishes?.data" :link="`/dish/${dish?.id}`">{{dish?.attributes?.Name}}</AtomLinkTag>
    </div>
  </div>
</template>