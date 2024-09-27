<template>
  <section class="bg-green-700 py-10 px-5 lg:px-16">
    <div class="mx-auto mt-4 max-w-6xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-4/5">
      <h2 class="text-white text-2xl font-bold mb-6">{{title}}</h2>

      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="relative">
          <img 
            src="https://picsum.photos/200/300" 
            alt="Large Video" 
            class="w-full h-64 object-cover rounded-lg"
          />
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg"></div>
        </div>
        
        <div class="flex flex-col justify-center">
          <h3 class="text-white text-xl font-semibold mb-3">
            {{ dishes[0].attributes.Name}}

          </h3>
          <p class="text-white text-sm">
            prepared by Ewa Malinowska, Daria Rudny-Dul
          </p>
        </div>
      </div> -->

      <!-- Small Video Blocks -->
      <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"> -->

    
      <section class="grid gap-6 mt-10 grid-cols-3">
        <MoleculesCard class="first:col-span-full" :id="chef.id" :size="(index==0)?'full':'small'" v-for="(chef, index) in chefs" :key="index" :item="chef" :attributes="chef.attributes"/>
      </section>
    </div>
    <!-- </div> -->
  </section>
</template>
<script setup lang="ts">
type ListItem = {
  id: string
  attributes: {
    Name: string
    description: string
  }
}

defineProps({
  title: String,
  chefs: {
    type: Array as PropType<ListItem[]>,
  }
})
</script>