<template>
  <div class="relative w-full" >
    <!-- <NuxtImg v-if="image" :src="$getImageUrl(image)" alt="" class="w-full object-cover top h-screen" /> -->
    <div class="mx-auto mt-4 max-w-6xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <h1>{{ headerTitle }}</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  headerTitle: {
    type: String,
    required: true,
    default: 'Title'
  },
  image: {
    type: String,
    default: ''
  }
})
</script>