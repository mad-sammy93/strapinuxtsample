<template>
  <div class="relative pt-[150px] max-w-[800px] mx-auto ">
    <NuxtImg :src="$getImageUrl(String(data?.image?.data?.attributes?.url))" :alt="data?.image?.data?.attributes?.name" class="w-full  object-cover" />
  </div>
</template>

<script setup lang="ts">
import type { ComponentBlockImage1440Px } from '~/types';
defineProps({
  data: {
    type: Object as PropType<ComponentBlockImage1440Px>,
  }
})
definePageMeta({
  layout: 'layout-1440',
})
</script>

<style scoped>

</style>