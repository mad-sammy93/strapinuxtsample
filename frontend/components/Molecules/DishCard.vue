<script setup lang="ts">
import { dishQuery } from "~/graphql/queries";
import type {Enum_Componentmoleculesdishcard_Size, GetDishDetailQuery} from '~/types'
const { $getImageUrl } = useNuxtApp()

const prop = defineProps({
  id: String,
  size: {
    type: 
    String as PropType<Enum_Componentmoleculesdishcard_Size>,
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

  const {result:data} =  useQuery<GetDishDetailQuery>(dishQuery, { id });
  console.log('[DISH]',data.value?.dish);
  
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
  <div class="bg-white rounded-lg overflow-hidden shadow-lg flex">
    <NuxtImg v-if="dishInfo.imageUrl" :src="$getImageUrl(dishInfo.imageUrl)" :alt="dishInfo.imageAlt" class="min-w-[400px] object-cover  top h-screen" :class="(size=='full'? 'object-bottom [height:600px]': 'object-center [height:300px]')" />
    <div class="p-10">
      <NuxtLink :to="`/dish/${id}`"><h4 class="text-green-700 text-2xl font-semibold mb-2">{{ dishInfo.name }}</h4></NuxtLink>
      <p class="text-gray-500 text-lg mb-2">{{ dishInfo.description }}</p>
    </div>
  </div>
</template>