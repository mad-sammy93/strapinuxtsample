<template>
  <div class="relative w-full" >
    <NuxtImg v-if="image" :src="$getImageUrl(image)" alt="" class="w-full object-cover object-bottom top h-screen" />
    <!-- <AtomTitle /> -->
    <AtomQuote :text="quote" :size="quoteSize"/>
    <AtomButton :text="buttonText" :link="buttonLink" class="absolute bottom-1/2 left-1/4" :size="buttonSize" />
  </div>
</template>

<script setup lang="ts">
const { $getImageUrl } = useNuxtApp()
import {Enum_Componentblockhero_Quotesize,Enum_Componentblockhero_Buttonsize } from '@/types'
defineProps({
  image: String,
  quote: String,
  quoteSize: {
    default: 'lg', 
    type: String as PropType<Enum_Componentblockhero_Quotesize> 
  },
  buttonLink : String,
  buttonText: String,
  buttonSize: {
    default: 'lg', 
    type: String as PropType<Enum_Componentblockhero_Buttonsize>,
  }
})
</script>