<template>
  <div class="bg-green-700 rounded-md shadow rouded overflow-hidden flex justify-between mb-4">
    <div class="">
      <!-- <pre>{{ chefInfo }}</pre> -->
      <!-- <img
        :src="dishInfo?.image?.data?.attributes?.url"
        :alt="dishInfo?.name"
        class="w-80 mr-3 h-44"
      /> -->
      <NuxtImg v-if="chefInfo?.image" :src="$getImageUrl(chefInfo?.image?.data?.attributes?.url)" class="w-full mr-3  object-cover top h-screen max-h-[800px]"/>
      <div class="p-7">
        <h1 class="text-white text-4xl">
          {{ chefInfo?.Name }}
        </h1>
        <p class="text-yellow-300 text-xl  mt-5" >{{ chefInfo?.description }}</p>
        <p class="text-white text-sm mt-10">Specialty dishes: 
         <AtomLinkTag v-for ="dish in chefInfo?.dishes?.data" :link="`/dish/${dish?.id}`">{{dish?.attributes?.Name}}</AtomLinkTag>
          <!-- <NuxtLink :to="`/chef/${chefInfo?.created_by_chef?.data?.id}`" class="text-yellow-400 font-semibold">{{ chefInfo?.created_by_chef.data?.attributes?.Name }}</NuxtLink> -->
        </p>
      </div>
    </div>
    <!-- <div class="p-2 flex">
      <NuxtLink :to="link">View</NuxtLink>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getChefDetail } from '@/graphql/getChefDetail'; // Ensure the query is in the correct path
import type { GetChefDetailQuery } from '@/types';

// Get the current route to extract the chef ID
const route = useRoute();
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id as string;

const chefInfo = ref()

const getChefInfo = (chefId: string) => {
  const { result } = useQuery<GetChefDetailQuery>(getChefDetail, {id: chefId})
  console.log(chefId,result.value);

  chefInfo.value = result?.value?.chef?.data?.attributes
}
definePageMeta({
  layout: 'layout-1440',
})
useHead({
  title:'CURRY & Co. | Chef '+ chefInfo.value?.Name, // TODO get from strapi
})
onBeforeMount(() => {
  getChefInfo(id)
})
</script>
<style scoped>
.loading, .error {
  font-size: 1.5rem;
  margin: 2rem 0;
}
</style>
