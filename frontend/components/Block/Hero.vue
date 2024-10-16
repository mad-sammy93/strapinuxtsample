<template>
  <div class="relative w-full" >
    <NuxtImg v-if="data?.image?.data?.attributes?.url" :src="$getImageUrl(data?.image?.data?.attributes?.url)" alt="" class="w-full object-cover object-bottom top h-screen" />
    <!-- {{ data?.Description }} -->
    <AtomQuote :quote="data?.quote"/>
    <AtomButton :button="data?.button" />
  </div>
</template>

<script setup lang="ts">
const { $getImageUrl } = useNuxtApp()
import type {ComponentBlockHero } from '~/types'
defineProps({
  data: {
    type: Object as PropType<ComponentBlockHero>,
  }
})
</script>