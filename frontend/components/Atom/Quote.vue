<template>
  <div class="absolute z-10 bottom-1/2 right-80 text-white font-bold max-w-xs [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)] " :class="size ? `text-${size}` : 'text-6xl'">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import type {Enum_Componentatomquote_Size} from '@/types'
defineProps({
text: String,
size: {
  type: String as PropType<Enum_Componentatomquote_Size>
}
})
</script>