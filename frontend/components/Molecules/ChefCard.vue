<script setup lang="ts">
import { getChefDetail } from '~/graphql/getChefDetail'
import type {Enum_Componentmoleculeschefcard_Size, GetChefDetailQuery } from '@/types'
const { $getImageUrl } = useNuxtApp()
const prop = defineProps({
  chefId: String,
  size: {
    type: String,
  }
})
const chefLoading = ref<boolean>(false)
const chefInfo = ref();

const getChefData = (chefId: String) => {
  chefLoading.value = true
  const { result: data, loading } = useQuery<GetChefDetailQuery>(getChefDetail, { id: chefId })
  // console.log(data?.value?.chef?.data?.attributes);
  if (data){
    chefLoading.value = false
    // console.log('[chef]',chefId,'RESULT',data?.value?.chef?.data?.attributes);
    chefInfo.value = data?.value?.chef?.data?.attributes
  } 
}
getChefData(`${prop.chefId}`)
</script>
<template>
    <div v-if="chefInfo" class="bg-white rounded-lg overflow-hidden shadow-lg">
      <NuxtImg v-if="chefInfo?.image" :src="$getImageUrl(chefInfo?.image?.data?.attributes?.url)" :alt="chefInfo?.alternativeText" class="w-full object-cover  top h-screen" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" />
      <div class="p-4 flex flex-wrap gap-4">
        <NuxtLink :to="`/chef/${chefId}`" class="text-gray-700 font-semibold"><h4 class="text-green-700 font-semibold mb-2">{{ chefInfo?.Name }}</h4></NuxtLink>
        <p class="text-gray-500 text-sm mb-2">{{ chefInfo?.description }}</p>
        <!-- TODO added dishes tag -->
        <!-- <p class="text-gray-400 text-xs">prepared by <NuxtLink :to="`/chef/${id}`" class="text-gray-700 font-semibold">{{ chefInfo?.Name }}</NuxtLink></p> -->
        <p class="text-gray-400 text-xs">related dishes:</p>
        <AtomLinkTag v-for ="dish in chefInfo?.dishes?.data" :link="`/dish/${dish?.id}`">{{dish?.attributes?.Name}}</AtomLinkTag>
      </div>
    </div>
</template>