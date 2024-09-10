<template>
  <section class="bg-gray-800  flex flex-col justify-between">
    <!-- Main content -->
    <div class="flex flex-col lg:flex-row items-center justify-between  lg:p-16 max-w-6xl mx-auto">
      <!-- Left column (Image) -->
      <div class="flex-1 flex justify-center lg:justify-start mb-8 lg:mb-0 p-12">
        <img src="@/assets/images/curry.png" alt="Envelope Icon" class="max-w-xs lg:max-w-md" />
      </div>

      <!-- Right column (Text and form) -->
      <div class="flex-1 max-w-lg">
        <h2 class="text-yellow-500 text-5xl lg:text-6xl font-bold mb-8">We send really good emails.</h2>
        <form class="space-y-4">
          <input
            type="email"
            placeholder="Enter your email here"
            class="w-full p-4 border-b text-white border-gray-100 bg-transparent focus:outline-none"
          />
          <div class="flex items-start space-x-2">
            <input type="checkbox" id="subscribe-checkbox" class="mt-1 text-white" />
            <label for="subscribe-checkbox" class="text-yellow-500">
              By subscribing, you confirm you have read and accept our
              <a href="/privacy-policy" class="underline text-yellow-800">privacy policy</a>.
            </label>
          </div>
          <button type="submit" class="bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
            Subscribe →
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>