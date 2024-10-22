<template>
  <NuxtLink :to="link" class="bg-gray-300 text-gray-700 rounded-lg overflow-hidden shadow-lg  hover:bg-gray-700 hover:text-white ease-in-out duration-300 px-2 py-1 font-semibold">
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