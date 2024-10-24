<script setup lang="ts">
import { getDishes } from '@/graphql/getDishes'
import type { DishEntityResponseCollection } from '@/types'

const route = useRoute()
type resDish = { dishes: DishEntityResponseCollection }
const { result: dishInfo } = useQuery<resDish>(getDishes, { id: route.params.id })
definePageMeta({
  layout: 'layout-1440',
})
useHead({
  title: 'CURRY & Co. | Dishess',
})
</script>
<template>
  <div class="grid grid-cols-1 gap-10">
    <MoleculesDishCard
      v-for="(dish, index) in dishInfo?.dishes?.data"
      :key="index"
      :id="dish?.id ?? ''"
    />
  </div>
</template>