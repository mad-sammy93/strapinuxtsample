<template>
  <div class="shadow rouded overflow-hidde flex justify-between mb-4">
    <div class="flex">
      <!-- {{ item }} -->
      <img
        :src="image"
        :alt="title"
        class="w-80 mr-3 h-44"
      />
      <div class="p-3">
        <h1 class="text-2xl">
          {{ title }}
        </h1>
        <p class="text-blue-400">${{ description }}</p>
      </div>
    </div>
    <div class="p-2 flex">
      <NuxtLink :to="link">View</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  description: String,
  link: String,
  item: Object
})
</script>