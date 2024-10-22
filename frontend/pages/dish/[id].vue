<template>
  <div class="bg-green-700 rounded-md shadow rouded overflow-hidden flex justify-between mb-4">
    <div class="">
      <!-- <pre>{{ dishInfo?.image }}</pre> -->
      <!-- <img
        :src="dishInfo?.image?.data?.attributes?.url"
        :alt="dishInfo?.name"
        class="w-80 mr-3 h-44"
      /> -->
      <NuxtImg v-if="dishInfo?.image" :src="$getImageUrl(dishInfo?.image?.data?.attributes?.url)" class="w-full mr-3  object-cover top h-screen max-h-[600px]"/>
      <div class="p-7">
        <h1 class="text-white text-4xl">
          {{ dishInfo?.Name }}
        </h1>
        <p class="text-yellow-300 text-xl  mt-5" >{{ dishInfo?.description }}</p>
        <p class="text-white text-sm mt-10">prepared by <NuxtLink :to="`/chef/${dishInfo?.created_by_chef?.data?.id}`" class="text-yellow-400 font-semibold">{{ dishInfo?.created_by_chef.data?.attributes?.Name }}</NuxtLink></p>
      </div>
    </div>
    <!-- <div class="p-2 flex">
      <NuxtLink :to="link">View</NuxtLink>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import {getDishDetail} from '@/graphql/getDishDetail'
import type {  GetDishDetailQuery } from '@/types';

definePageMeta({
  layout: 'layout-1440',
})
useHead({
  title:'CURRY & Co. | Home', // TODO get from strapi
})

const route = useRoute();
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id as string;
const dishInfo = ref()
const getDishInfo = (dishId: string) => {
  const { result } = useQuery<GetDishDetailQuery>(getDishDetail, {id: dishId})
  console.log(dishId,result.value);

  dishInfo.value = result?.value?.dish?.data?.attributes
}
onBeforeMount(() => {
  getDishInfo(id)
})
</script>