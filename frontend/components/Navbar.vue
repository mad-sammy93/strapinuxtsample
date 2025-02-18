<script setup lang="ts">
import { getNavItems } from '@/graphql/getNavItems'
import type { NavigationQueryQuery } from '@/types'

const { result: navigation } = useQuery<NavigationQueryQuery>(getNavItems)
</script>
<template>
   <nav class="border-gray-200 bg-gray-400 dark:bg-gray-800 dark:border-gray-700 z-50 w-full">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink
      class="text-3xl font0mono text-white dark:text-yellow-400 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
      to="/"
      >CURRY & Co.</NuxtLink>
      <div class="flex page-links">
        <div class="flex p-2">
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
