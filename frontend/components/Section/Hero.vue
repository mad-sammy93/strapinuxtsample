<template>
  <div class="relative w-full" >
    <NuxtImg v-if="image" :src="$getImageUrl(image)" alt="" class="w-full object-cover top h-screen" />
    <AtomQuote :text="quote" :size="String(quoteSize)"/>
    <AtomButton :text="buttonText" :link="buttonLink" class="absolute bottom-1/2 left-1/4" :size="buttonSize"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  quote: String,
  quoteSize: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' |'6xl'>
  },
  buttonLink : String,
  buttonText: String,
  buttonSize: {
    default: '2xl', 
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' |'6xl'>
  }
})
</script>