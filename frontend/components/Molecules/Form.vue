<template>
  <div>
    <!-- <pre v-for="(data, index) in data">{{ data }}
    <p>index: {{ index }}</p>
    </pre> -->

    <form class="max-w-lg mx-auto">

    <h1 class="text-4xl mb-5 font-medium dark:text-white text-slate-700">Share whats on Your mind!!</h1>
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="sambert@smartshore.com"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your message</label
        >
        <textarea
          id="message"
          rows="4"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Send message
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { ComponentBlockContact } from '@/types'
defineProps({
  data: {
    type: Object as PropType<ComponentBlockContact>,
  },
})
</script>

<style scoped></style>
