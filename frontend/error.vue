<script setup lang="ts">
const error = useError()
const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>
<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl text-yellow-400">{{ error?.statusCode }}</h1>

    <AtomTvIcon :message="error?.message"/>
    <p class="mt-7 text-4xl">{{ error?.message }}</p>
    <p class="mt-7 text-4xl">{{ error?.data }}</p>
    <button
      class="rounded-2xl bg-cyan-800 px-7 py-3 mt-7 text-2xl text-white"
      @click="handleError"
    >
      Go Back
    </button>
  </div>
</template>
