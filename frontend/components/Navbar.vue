<script setup lang="ts">
import { getNavItems } from '@/graphql/getNavItems'
import type { NavigationQueryQuery } from '@/types'

const { result: navigation } = useQuery<NavigationQueryQuery>(getNavItems)
</script>
<template>
  <header class="bg-opacity-90 header w-full sticky top-0 z-50 flex justify-between items-center space-x-1 bg-slate-700 p-4 shadow-md">
    <NuxtLink
      class="text-3xl font0mono text-yellow-400 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
      to="/"
      >CURRY & Co.</NuxtLink
    >
    <div class="flex page-links">
      <div class="flex space-x-2">
        <div v-if="navigation?.navigation?.data?.attributes?.navitems">
          <NuxtLink
            v-for="link in navigation?.navigation?.data?.attributes?.navitems"
            :key="link?.id"
            :to="link?.path"
            :target="link?.is_external ? '_blank' : '_self'"
            class="text-yellow-400 mr-5 text-xl [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
            >{{ link?.name }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped lang="sass">
.page-links
  .router-link-active,
  .router-link-exact-active
    font-family: 'BlantikScript', sans-serif
    padding-bottom: 0.3rem
    border-bottom: 2px solid #f1c40f
</style>