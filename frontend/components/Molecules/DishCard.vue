<script setup lang="ts">
import { getDishDetail } from "~/graphql/getDishDetail";
import type {Enum_Componentmoleculesdishcard_Size, DishEntityResponse} from '~/types'
const { $getImageUrl } = useNuxtApp()

type resDish = {dish: DishEntityResponse}
const prop = defineProps({
  id: String,
  size: {
    type: 
    String as PropType<Enum_Componentmoleculesdishcard_Size>,
  }
})
const { result:dishInfo } = useQuery<resDish>(getDishDetail, { id: prop.id })
</script>
<template>
  <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg flex">
    <NuxtImg v-if="dishInfo?.dish?.data?.attributes?.image" :src="$getImageUrl(String(dishInfo?.dish?.data?.attributes?.image?.data?.attributes?.url))" :alt="dishInfo?.dish?.data?.attributes?.image?.data?.attributes?.alternativeText || ''" class="min-w-[400px] object-cover  top h-screen" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" />
    <div class="p-10">
      <NuxtLink :to="`/dish/${id}`">
        <h4 class="text-green-700 dark:text-white text-2xl font-semibold mb-2">{{ dishInfo?.dish?.data?.attributes?.Name }}</h4>
      </NuxtLink>
      <p class="text-gray-500 dark:text-white text-lg mb-2">{{ dishInfo?.dish?.data?.attributes?.description }}</p>
    </div>
  </div>
</template>