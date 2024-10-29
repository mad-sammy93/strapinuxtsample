<script setup lang="ts">
import { getNavItems } from '@/graphql/getNavItems'
import type { NavigationQueryQuery } from '@/types'

const { result: navigation } = useQuery<NavigationQueryQuery>(getNavItems)
</script>
<template>
  <!-- <header class="bg-opacity-50 header w-full fixed top-0 z-50 flex justify-between items-center space-x-1 bg-yellow-900 dark:bg-opacity-50 dark:bg-slate-700 p-4 shadow-md">
    <NuxtLink
      class="text-3xl font0mono text-white dark:text-yellow-400 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
      to="/"
      >CurryY & Co.</NuxtLink
    >
    <div class="flex page-links">
      <div class="flex space-x-2">
        <div v-if="navigation?.navigation?.data?.attributes?.navitems">
          <NuxtLink
            v-for="link in navigation?.navigation?.data?.attributes?.navitems"
            :key="link?.id"
            :to="link?.path"
            :target="link?.is_external ? '_blank' : '_self'"
            class="text-white dark:text-yellow-400 mr-5 text-xl [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
            >{{ link?.name }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </header> -->

<!-- 
<nav class="border-gray-200 bg-opacity-50 fixed top-0 z-50 w-full bg-yellow-600 dark:bg-opacity-50 dark:bg-slate-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NuxtLink
      class="text-3xl font0mono text-white dark:text-yellow-400 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
      to="/" alt="CurryY & Co. Logo"
      >Curry & Co.</NuxtLink
    >
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-yellow-400 dark:hover:bg-yellow-700 dark:focus:ring-yellow-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full lg:block lg:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
        <li v-if="navigation?.navigation?.data?.attributes?.navitems">
          <NuxtLink
            v-for="link in navigation?.navigation?.data?.attributes?.navitems"
            :key="link?.id"
            :to="link?.path"
            :target="link?.is_external ? '_blank' : '_self'"
            class="text-white dark:text-yellow-400 mr-5 text-xl [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
            >{{ link?.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</nav> -->


<nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
<style scoped lang="sass">
.page-links
  .router-link-active,
  .router-link-exact-active
    font-family: 'BlantikScript', sans-serif
    padding-bottom: 0.3rem
    border-bottom: 2px solid #f1c40f
</style>