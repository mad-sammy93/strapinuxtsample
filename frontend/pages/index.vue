<script setup>
const { result } = useInfo()
const site_logo = ref('')
useHead({
  title: 'CURRY & Co. | Home', // TODO get from strapi
})

definePageMeta({
  layout: 'homepage'
})

site_logo.value = result
</script>
<template>
  <div>
    <SectionHero  v-if="site_logo"
    image="https://assets.ju.st/is/2560x0/smart/filters:format(webp):quality(70)/f/111747/5000x3333/38351a2bab/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb.jpg" 
    quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate, voluptatum corrupti, aliquid pariatur voluptates"
    buttonLink="Test"
    buttonText="Test"
    quoteSize="xl"
    />
    <SectionHero 
    image="https://assets.ju.st/is/2560x0/smart/filters:format(jpg):quality(70)/f/111747/5000x3333/4d60140f1e/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb-frit.jpg" 
    quote="aliquid pariatur voluptates "
    buttonLink="Test"
    buttonText="Test"
    quoteSize="3xl"
    />
    <SectionHero 
    image="https://assets.ju.st/is/2560x0/smart/filters:format(webp):quality(70)/f/111747/2447x1376/2a49aeb36c/22-03-2290-21b-bby_jus-e-harvest_breakfast_bowl_0206_srg_dsk.jpg" 
    quote="aliquid pariatur voluptates "
    buttonLink="Test"
    buttonText="Test"
    buttonSize="6xl"
    quoteSize="6xl"
    />
  </div>
</template>