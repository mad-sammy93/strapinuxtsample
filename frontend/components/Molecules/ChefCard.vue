<script setup lang="ts">
import { getChefDetails } from '@/graphql/getChefDetails'
import type {Enum_Componentmoleculeschefcard_Size, GetChefDetailsQuery } from '@/types'
const { $getImageUrl } = useNuxtApp()
const prop = defineProps({
  id: Number,
  size: {
    type: String as PropType<Enum_Componentmoleculeschefcard_Size>,
  }
})

const chefInfo = ref();

const getChefData = (chefId: String) => {
  const { result: data } = useQuery<GetChefDetailsQuery>(getChefDetails, { id: chefId })
  // console.log(data?.value?.chef?.data?.attributes);
  if (data){
    // console.log('[chef]',chefId,'RESULT',data?.value?.chef?.data?.attributes);
    chefInfo.value = data?.value?.chef?.data?.attributes ;
  }
}
onMounted(() => {
  getChefData(`${prop.id}`)
})
</script>
<template>
    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
      <NuxtImg v-if="chefInfo?.image" :src="$getImageUrl(chefInfo?.image?.data?.attributes?.url)" :alt="chefInfo?.alternativeText" class="w-full object-cover  top h-screen" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" />
      <div class="p-4">
        <NuxtLink :to="`/chef/${id}`" class="text-gray-700 font-semibold"><h4 class="text-green-700 font-semibold mb-2">{{ chefInfo?.Name }}</h4></NuxtLink>
        <p class="text-gray-500 text-sm mb-2">{{ chefInfo?.description }}</p>
        <!-- TODO added ishes tag -->
        <!-- <p class="text-gray-400 text-xs">prepared by <NuxtLink :to="`/chef/${id}`" class="text-gray-700 font-semibold">{{ chefInfo?.Name }}</NuxtLink></p> -->
      </div>
    </div>
</template>