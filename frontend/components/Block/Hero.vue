<template>
  <div class="relative w-full" >
    <NuxtImg v-if="image" :src="$getImageUrl(image)" alt="" class="w-full object-cover top h-screen" />
    <AtomTitle />
    <AtomQuote :text="quote" :size="quoteSize"/>
    <AtomButton :text="buttonText" :link="buttonLink" class="absolute bottom-1/2 left-1/4" :size="buttonSize"/>
    <!-- {{ buttonSize }}
    {{ quoteSize }} -->
  </div>
</template>

<script setup lang="ts">
enum Sizes {
  size_sm = 'sm',
  size_md = 'md',
  size_lg = 'lg',
  size_xl = 'xl',
  size_2xl = '2xl',
  size_3xl = '3xl',
  size_4xl = '4xl',
  size_5xl = '5xl',
  size_6xl = '6xl',
}
defineProps({
  image: String,
  quote: String,
  quoteSize: {
    type: String as PropType<Sizes>,
    default: 'lg', 
  },
  buttonLink : String,
  buttonText: String,
  buttonSize: {
    default: 'lg', 
    type: String as PropType<Sizes>
  }
})



</script>