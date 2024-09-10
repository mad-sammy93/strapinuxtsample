<template>
    <div class="absolute z-10 bottom-1/2 right-80 text-white font-bold max-w-xs [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)] " :class="size ? `text-${size}` : 'text-6xl'">
      {{ text }}
    </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  size: {
    type: String as PropType<Sizes>
  }
})
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
</script>