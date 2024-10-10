<template>
  <div>
    <NuxtLink :to="link" :class="(size) ? `text-${size}` : 'text-6xl'" class="border-2 rounded-md cursor-pointer bg-opacity-80 bg-black-400 px-10 py-3 mt-7 text-white [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]">{{ text }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type {Enum_Componentatombutton_Size} from '@/types'
defineProps({
  text: String,
  link: String,
  size: {
    default: '2xl',
    type: String as PropType<Enum_Componentatombutton_Size>
  }
})
</script>