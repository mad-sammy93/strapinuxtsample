<script setup>
// const user = useSupabaseUser()
// const supabase = useSupabaseClient()

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
    class="header sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-rose-700 p-4 shadow-md">
    <!-- {{user}} -->
    <NuxtLink class="text-3xl font0mono text-yellow-400" to="/">Curry & Co</NuxtLink>
    <div v-if="user" class="flex space-x-2">
      <NuxtLink to="/" class="text-white mr-5">Profile</NuxtLink>
      <p @click="logout" class="text-white mr-5 cursor-pointer">Logout</p>
    </div>
    <div v-else class="flex space-x-2">
      <NuxtLink to="/" class="text-white mr-5">Login</NuxtLink>
    </div>
  </header>
</template>