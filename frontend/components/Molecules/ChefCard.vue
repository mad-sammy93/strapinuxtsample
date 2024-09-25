<script setup lang="ts">
import { dishQuery } from "~/graphql/queries";
const { $getImageUrl } = useNuxtApp()

const prop = defineProps({
  id: String,
  size: {
    type: 
    String as PropType<'full'| 'small'>,
  }
})

const dishInfo = ref({
  name: '',
  imageUrl: '',
  imageAlt: '',
  description: '',
  prebaredBy: '',
});
const getDishName =  (id: string) => {
  console.log(id)

  const {result:data} =  useQuery(dishQuery, { id });
  watchEffect(() => {
    const dish = data?.value?.dish?.data?.attributes;
    if (dish) {
      dishInfo.value = {
        name: dish.Name,
        imageUrl: dish.image?.data?.attributes?.url || '',
        imageAlt: dish.Name || '',
        description: dish.description || '',
        prebaredBy: dish.created_by_chef?.data?.attributes?.Name || '',
      };
    }
  });

  return dishInfo;
}
onMounted(() => {
  getDishName(`${prop.id}`)
})
</script>
<template>
    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
      <NuxtImg v-if="dishInfo.imageUrl" :src="$getImageUrl(dishInfo.imageUrl)" :alt="dishInfo.imageAlt" class="w-full object-cover  top h-screen" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" />
      <div class="p-4">
        <h4 class="text-green-700 font-semibold mb-2">{{ dishInfo.name }}</h4>
        <p class="text-gray-500 text-sm mb-2">{{ dishInfo.description }}</p>
        <p class="text-gray-400 text-xs">prepared by <NuxtLink :to="`/chef/${dishInfo.prebaredBy}`" class="text-gray-700 font-semibold">{{ dishInfo.prebaredBy }}</NuxtLink></p>
      </div>
    </div>
</template>