<template>
  <NuxtLink :to="link" class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded hover:bg-gray-700 hover:text-gray-400 border border-gray-500 ease-in duration-75">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String
  }
})
</script>

<style scoped>

</style>