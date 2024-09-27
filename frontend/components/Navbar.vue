<template>
  <header class="bg-opacity-25 header sticky top-0 z-50 flex justify-between items-center space-x-1 bg-gray-800 p-4 shadow-md">
    <NuxtLink
      class="text-3xl font0mono text-yellow-400 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
      to="/"
      >CURRY & Co.</NuxtLink
    >
    <div class="flex page-links">
      <!-- <NuxtLink
        to="/style"
        class="text-yellow-400 mr-5 text-xl [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
        >Style</NuxtLink
      > -->
      <div class="flex space-x-2">
        <div v-if="navigation?.navigation?.data?.attributes?.navitems">
          <NuxtLink
            v-for="link in navigation.navigation.data.attributes.navitems"
            :key="link.id"
            :to="link.path"
            :target="link.is_external ? '_blank' : '_self'"
            class="text-yellow-400 mr-5 text-xl [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]"
            >{{ link.name }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { navigationQuery } from '~/graphql/queries'
// const { data: navigation } = useAsyncQueryResult(navigationQuery)
const {result:navigation} =  useQuery(navigationQuery);
</script>
<style scoped lang="sass">
.page-links
  .router-link-active,
  .router-link-exact-active 
    font-family: 'BlantikScript', sans-serif
    padding-bottom: 0.3rem
    border-bottom: 2px solid #f1c40f
</style>