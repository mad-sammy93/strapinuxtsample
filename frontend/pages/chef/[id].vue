<script setup lang="ts">
import { getChefDetail } from '@/graphql/getChefDetail';
import type { ChefEntityResponse } from '@/types';

const route = useRoute();
type resChef = { chef: ChefEntityResponse }
const { result:chefInfo, loading:chefLoading } = useQuery<resChef>(getChefDetail, { id: route.params.id })

definePageMeta({
  layout: 'layout-1440',
})
useHead({
  title:'CURRY & Co. | Chef ' + chefInfo?.value?.chef?.data?.attributes?.Name
})
</script>
<template>
  <div class="bg-green-700 rounded-md shadow overflow-hidden flex justify-between mb-4">
    <div class="w-full max-w-1/2">
      <NuxtImg v-if="chefInfo?.chef?.data?.attributes?.image" :src="$getImageUrl(String(chefInfo?.chef?.data?.attributes?.image?.data?.attributes?.url))" class="w-full mr-3 object-cover center"/>
    </div>
    <div class="p-7 w-full max-w-1/2">
      <h1 class="text-white text-4xl">
        {{ chefInfo?.chef?.data?.attributes?.Name }}
      </h1>
      <p class="text-yellow-300 text-xl mt-5">{{chefInfo?.chef?.data?.attributes?.description }}</p>
      <p class="text-white text-sm mt-10 block">Specialty dishes: 
        <AtomLinkTag v-for ="dish in chefInfo?.chef?.data?.attributes?.dishes?.data" :link="`/dish/${dish?.id}`" class="mr-2 mb-2 gap-2 inline-flex">{{dish?.attributes?.Name}}</AtomLinkTag>
      </p>
    </div>
  </div>
</template>
<style scoped>
.loading, .error {
  font-size: 1.5rem;
  margin: 2rem 0;
}
</style>
