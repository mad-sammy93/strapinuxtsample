<script setup>
// const user = useSupabaseUser()
// const supabase = useSupabaseClient()
import { navigationQuery } from "~/graphql/queries";
const  { data: navigation } = useQueryResult(navigationQuery);

const logout = async () => {
  // const {error} = await supabase.auth.signOut()
  // // navigateTo('/')
  // try{
  //   await $fetch('/api/_supabase/session', {
  //     method: 'POST',
  //     body: {
  //       event: 'SIGNED_OUT', session: null
  //     }
  //   })
  // } catch (error) {
  //   console.log(error)
  // }

  // if (error) {
  //   console.log(error)
  // }
}

</script>
<template>
  <header
    class="bg-opacity-25 header sticky top-0 z-50 flex justify-between items-center space-x-1  bg-gray-800 p-4 shadow-md">
    <NuxtLink class="text-3xl font0mono text-yellow-400 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]" to="/">CURRY & Co.</NuxtLink><div class="flex">
    <NuxtLink to="/style" class="text-yellow-400 mr-5 text-xl [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]">Style</NuxtLink>
    <!-- <div v-if="user" class="flex space-x-2">
      <NuxtLink to="/" class="text-white mr-5 [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]">Profile</NuxtLink>
      <p @click="logout" class="text-white mr-5 cursor-pointer">Logout</p>
    </div> -->
    <div class="flex space-x-2">
      <div v-if="navigation?.navigation?.data?.attributes?.navitems">
        <NuxtLink v-for="link in navigation.navigation.data.attributes.navitems" :key="link.id" :to="link.path" :target="link.is_external ? '_blank' : '_self'" class="text-yellow-400 mr-5 text-xl [text-shadow:_0px_1px_10px_rgb(0_0_0_/_80%)]">{{link.name}}</NuxtLink>
      </div>
    </div>
    </div>
  </header>
</template>