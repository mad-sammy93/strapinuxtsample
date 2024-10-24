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
  <div class="text-center text-white font-bold my-4 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)] " :class="quote?.size ? `text-${useSizeFormat(quote?.size)}` : 'text-6xl'">
    {{ quote?.title }}
  </div>
</template>