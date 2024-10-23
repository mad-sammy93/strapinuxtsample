<script setup lang="ts">
const { $getImageUrl } = useNuxtApp()
import type { ComponentBlockHero } from '~/types'
defineProps({
  data: {
    type: Object as PropType<ComponentBlockHero>,
  }
})
</script>
<template>
  <div class="relative w-full" >
    <!-- FIXME Layout  -->
    <div class="overlay  hover:display-block"></div>
    <NuxtImg v-if="data?.image?.data?.attributes?.url" :src="$getImageUrl(data?.image?.data?.attributes?.url)" :alt="data?.image?.data?.attributes?.name" class="w-full object-cover object-bottom top h-screen"/>
    <div v-if="data?.Description" class="text-shadow p-10 text-white absolute top-[150px] left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-2xl">{{ data?.Description }}</div>
    <AtomQuote v-if="data?.quote" :quote="data?.quote ?? undefined"/>
    <AtomButton v-if="data?.button" :button="data?.button ?? undefined" class="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"/>
  </div>
</template>
<style scoped lang="sass">
.overlay
  transition: all 0.5s
  position: absolute 
  width: 100%
  height: 100%
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0,0,0,0.3)
  z-index: 0
</style>