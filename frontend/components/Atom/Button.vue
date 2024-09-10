<template>
  <div>
    <NuxtLink :to="link" :class="(size) ? `text-${size}` : 'text-6xl'" class="border-2 rounded-md cursor-pointer bg-opacity-80 bg-black-400 px-10 py-3 mt-7 text-white [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]">{{ text }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">

defineProps({
  text: String,
  link: String,
  size: {
    default: 'size_lg',
    type: String as PropType<Sizes>,
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