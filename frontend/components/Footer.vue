<template>
  <div class=" flex justify-between items-center  ">
  <footer class="bg-yellow-500 sticky bottom-0 py-8 w-full">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <nav class="mb-4 text-sm">
        <ul class="flex space-x-2">
          <li>
            <NuxtLink to="/" class="text-black">Home</NuxtLink>
          </li>
          <li>›</li>
          <li>
            <NuxtLink to="/" class="text-black">Learn</NuxtLink>
          </li>
          <li>›</li>
          <li>
            <span class="text-black">Human Health</span>
          </li>
        </ul>
      </nav>

      <!-- Divider -->
      <hr class="border-t border-black mb-8" />

      <!-- Footer Content -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-black">
        <!-- Products -->
        <div>
          <h5 class="font-bold mb-2">Products</h5>
          <ul>
            <li><NuxtLink to="/" class="hover:underline">All products</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">JUST Egg</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">JUST Mayo</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">JUST Dressings</NuxtLink></li>
          </ul>
        </div>

        <!-- Find -->
        <div>
          <h5 class="font-bold mb-2">Find</h5>
          <ul>
            <li><NuxtLink to="/" class="hover:underline">Find JUST Egg</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Buy online</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Store locator</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Restaurants</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Foodservice</NuxtLink></li>
          </ul>
        </div>

        <!-- Learn -->
        <div>
          <h5 class="font-bold mb-2">Learn</h5>
          <ul>
            <li><NuxtLink to="/" class="hover:underline">Recipes</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Health</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Stories</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">FAQ</NuxtLink></li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h5 class="font-bold mb-2">About</h5>
          <ul>
            <li><NuxtLink to="/" class="hover:underline">About us</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Mission</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Careers</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Contact us</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:underline">Newsroom</NuxtLink></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="flex space-x-4">
          <NuxtLink to="/" class="text-black hover:text-white">
            <i class="fab fa-tiktok"></i>
          </NuxtLink>
          <NuxtLink to="/" class="text-black hover:text-white">
            <i class="fab fa-instagram"></i>
          </NuxtLink>
          <NuxtLink to="/" class="text-black hover:text-white">
            <i class="fab fa-linkedin"></i>
          </NuxtLink>
          <NuxtLink to="/" class="text-black hover:text-white">
            <i class="fab fa-twitter"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
