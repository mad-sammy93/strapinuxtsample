<template>
  <div class="relative w-full">
    <NuxtImg v-if="image" :src="image" alt="" class="w-full object-cover top h-screen" />
    <AtomQuote :text="quote" :size="quoteSize"/>
    <AtomButton :text="buttonText" :link="buttonLink" class="absolute bottom-1/2 left-1/4" :size="buttonSize"/>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  quote: String,
  quoteSize: String,
  buttonLink : String,
  buttonText: String,
  buttonSize: {
    required: false,
    default: '2xl',
    type: String 
    // type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' |'6xl'>
  }
})
</script>