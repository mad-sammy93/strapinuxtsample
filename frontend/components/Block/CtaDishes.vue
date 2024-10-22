<template>
  <section class="bg-yellow-500 py-10 px-5 lg:px-16">
    <div class="mx-auto mt-4 max-w-6xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-4/5">
      <h2 class="text-white text-6xl max-w-20	 font-bold mb-6">{{data?.title || 'Our Dishes'}}</h2> 
      <MoleculesDishCard v-for="(dish, index) in data?.dishes?.data" :key="index" :id="dish?.id ?? ''" />
    </div>
  </section>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type {ComponentBlockCtaDishes} from '~/types'
defineProps({
  data : {
    type: Object as PropType<ComponentBlockCtaDishes>,
  }
})
</script>