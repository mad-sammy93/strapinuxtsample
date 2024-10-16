<script setup lang="ts">
import { getChefDetails } from '@/graphql/getChefDetails'
import type {Enum_Componentmoleculeschefcard_Size, ChefEntity } from '@/types'
const { $getImageUrl } = useNuxtApp()
const prop = defineProps({
  id: Number,
  size: {
    type: String as PropType<Enum_Componentmoleculeschefcard_Size>,
  }
})

const chefInfo = ref({
 
});

const getChefData =  (chefId: String) => {
  const { result : chefs } =  useQuery<ChefEntity>(getChefDetails, { id: chefId })
  console.log(chefs.value?.chef?.data?.attributes);
  // if (result.value){
  //   console.log('[chef]',chefId,'RESULT',result?.value);
  //   chefInfo.value = result.value.chef.data.attributes ;
  //   return result?.value

  // }
  // if (result.value && result.value.data && result.value.data.length > 0) {
  // console.log(result.value.data[0].attributes);
  // chefInfo.value = result.value.data[0].attributes;
  // return result?.value} 
}
onMounted(() => {
  getChefData(`${prop.id}`)
})
</script>
<template>
    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
      {{ id }}
  {{ chefInfo }}
      <!-- <NuxtImg v-if="chefInfo.image" :src="$getImageUrl(chefInfo?.image?.data?.attributes?.url)" :alt="chefInfo?.alternativeText" class="w-full object-cover  top h-screen" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" /> -->
      <!-- <div class="p-4">
        <h4 class="text-green-700 font-semibold mb-2">{{ chefInfo.Name }}</h4>
        <p class="text-gray-500 text-sm mb-2">{{ chefInfo.description }}</p>
        <p class="text-gray-400 text-xs">prepared by <NuxtLink :to="`/chef/${id}`" class="text-gray-700 font-semibold">{{ chefInfo.Name }}</NuxtLink></p>
      </div> -->
    </div>
</template>