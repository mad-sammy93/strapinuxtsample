<template>
  <section class="bg-green-700 py-10 px-5 lg:px-16">
    <div class="mx-auto mt-4 max-w-6xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-4/5">
      <h2 class="text-white text-2xl font-bold mb-6">{{data?.title || 'Our Chefs'}}</h2>

      <!-- Small Video Blocks -->
      <section class="grid gap-6 mt-10 grid-cols-3">
        <MoleculesChefCard class="first:col-span-full" 
        v-for="(chef, index) in data?.chefs?.data" 
        :id="chef?.id"
        :key="index" 
        :size="(index == 0) ? 'full':'small'" 
        />
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import type {ComponentListListChef} from '@/types'
defineProps({
  data : {
    type: Object as PropType<ComponentListListChef>,
  }
})
</script>