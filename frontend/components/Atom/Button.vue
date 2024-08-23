<template>
  <div class="border-yellow-400 border-3">
    {{ size }}
    <NuxtLink :to="link" :class="(size) ? `text-${size}` : 'text-6xl'" class=" border-2 rounded-md cursor-pointer bg-opacity-50 bg-cyan-400 px-10 py-3 mt-7 text-white">{{ text }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">

defineProps({
  text: String,
  link: String,
  size: {
    default: '2xl',
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' |'6xl'>,
  }
})
</script>