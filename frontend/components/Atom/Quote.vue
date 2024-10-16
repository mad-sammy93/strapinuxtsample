<script setup lang="ts">
import type { ComponentAtomQuote } from '@/types'
import { useSizeFormat } from '@/composables/useSizeFormat'
defineProps({
  quote: {
    type: Object as PropType<ComponentAtomQuote>
  }
})
</script>
<template>
  <!-- {{ quote }} -->
  <div class="absolute z-10 bottom-1/2 right-80 text-white font-bold max-w-xs [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)] " :class="quote?.size ? `text-${useSizeFormat(quote?.size)}` : 'text-6xl'">
    {{ quote?.title }}
  </div>
</template>