<template>
  <div>
    <NuxtLink :to="button?.link|| '/'" :class="(button?.size) ? `text-${useSizeFormat(button?.size)}` : 'text-6xl'" class="border-2 rounded-md cursor-pointer bg-opacity-80 bg-black-400 px-10 py-3 mt-7 text-white [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)] hover:shadow-xl" >{{ button?.title }}</NuxtLink>
  </div>
</template>
<script setup lang="ts">
import type { ComponentAtomButton } from '@/types'
import { useSizeFormat } from '@/composables/useSizeFormat';
defineProps({
  button: {
    type: Object as PropType<ComponentAtomButton>,
  }
})
</script>