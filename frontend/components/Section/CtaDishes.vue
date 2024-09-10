<template>
  <section class="bg-green-700 py-10 px-5 lg:px-16">
    <div class="mx-auto mt-4 max-w-6xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-4/5">
      <h2 class="text-white text-2xl font-bold mb-6">Dishes</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="relative">
          <img 
            src="" 
            alt="Large Video" 
            class="w-full h-64 object-cover rounded-lg"
          />
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg"></div>
        </div>
        
        <div class="flex flex-col justify-center">
          <h3 class="text-white text-xl font-semibold mb-3">
            The eyes of sweet tooths will light up at the sight of puff pastry cones. An express recipe for a quick dessert
          </h3>
          <p class="text-white text-sm">
            prepared by Ewa Malinowska, Daria Rudny-Dul
          </p>
        </div>
      </div>

      <!-- Small Video Blocks -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div v-for="(video, index) in videos" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img :src="video.image" :alt="video.title" class="w-full h-40 object-cover">
          <div class="p-4">
            <h4 class="text-green-700 font-semibold mb-2">{{ video.title }}</h4>
            <p class="text-gray-500 text-sm mb-2">{{ video.description }}</p>
            <p class="text-gray-400 text-xs">prepared by {{ video.chef }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Mock Data for Small Video Cards (replace this with dynamic data)
const videos = [
  {
    // image: "/path/to/image1.jpg",
    title: "This is the best eggplant recipe I know. The tacos taste amazing",
    description: "prepared by Ewa Malinowska, Sebastian Lubera",
    chef: "Ewa Malinowska, Sebastian Lubera"
  },
  {
    // image: "/path/to/image2.jpg",
    title: "Bombay Potatoes Like You've Never Had Them Before. They taste so good",
    description: "prepared by Ewa Malinowska, Sebastian Lubera",
    chef: "Ewa Malinowska, Sebastian Lubera"
  },
  {
    // image: "/path/to/image3.jpg",
    title: "Skewer the chicken and zucchini on a skewer and bake",
    description: "prepared by Ewa Malinowska, Sebastian Lubera",
    chef: "Ewa Malinowska, Sebastian Lubera"
  }
]


</script>
