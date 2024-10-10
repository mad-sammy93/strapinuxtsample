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
import type {Enum_Componentatomquote_Size,Enum_Componentatombutton_Size } from '~/types'
defineProps({
  image: String,
  quote: String,
  quoteSize: {
    default: 'lg', 
    type: String as PropType<Enum_Componentatomquote_Size> 
  },
  buttonLink : String,
  buttonText: String,
  buttonSize: {
    default: 'lg', 
    type: String as PropType<Enum_Componentatombutton_Size>,
  }
})
</script>