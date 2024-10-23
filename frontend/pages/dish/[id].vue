<script setup lang="ts">
import {getDishDetail} from '@/graphql/getDishDetail'
import type { DishEntityResponse } from '@/types';

const route = useRoute();
type resDish = {dish: DishEntityResponse}
const { result:dishInfo } = useQuery<resDish>(getDishDetail, {id: route.params.id})

useHead({
  title:'CURRY & Co. | '+ dishInfo?.value?.dish?.data?.attributes?.Name, 
})
definePageMeta({
  layout: 'layout-1440',
})
</script>
<template>
  <div class="bg-green-700 rounded-md shadow rouded overflow-hidden justify-between mb-4">
    <div class="flex flex-col">
      <NuxtImg v-if="dishInfo?.dish?.data?.attributes?.image" :src="$getImageUrl(String(dishInfo?.dish?.data?.attributes?.image?.data?.attributes?.url))" class="w-full mr-3 object-cover top h-screen max-h-[600px]"/>
      <div class="p-7">
        <h1 class="text-white text-4xl">
          {{ dishInfo?.dish?.data?.attributes?.Name }}
        </h1>
        <p class="text-yellow-300 text-xl  mt-5" >{{ dishInfo?.dish?.data?.attributes?.description }}</p>
        <p class="text-white text-sm mt-10">prepared by <NuxtLink :to="`/chef/${dishInfo?.dish?.data?.attributes?.created_by_chef?.data?.id}`" class="text-yellow-400 font-semibold">{{ dishInfo?.dish?.data?.attributes?.created_by_chef?.data?.attributes?.Name }}</NuxtLink></p>
      </div>
    </div>
  </div>
</template>