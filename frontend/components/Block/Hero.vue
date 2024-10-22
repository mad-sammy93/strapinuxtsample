<template>
  <div class="relative w-full" >
    <!-- FIXME Layout  -->
    <NuxtImg v-if="data?.image?.data?.attributes?.url" :src="$getImageUrl(data?.image?.data?.attributes?.url)" alt="" class="w-full object-cover object-bottom top h-screen" />
   <!-- <pre> {{ data }}</pre> -->
    <AtomQuote :quote="data?.quote ?? undefined"/>
    <AtomButton :button="data?.button ?? undefined" />
  </div>
</template>

<script setup lang="ts">
const { $getImageUrl } = useNuxtApp()
import type { ComponentBlockHero } from '~/types'
defineProps({
  data: {
    type: Object as PropType<ComponentBlockHero>,
  }
})
</script>