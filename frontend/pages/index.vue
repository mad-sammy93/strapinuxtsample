<script setup>
import { chefQuery,siteName } from "~/graphql/queries";
const  { data: siteInfo } = useQueryResult(siteName);
const  chef  = useQueryResult(chefQuery);
const site_logo = ref('')
const site_name = ref('')

definePageMeta({
  layout: 'homepage'
})
useHead({
  title:'CURRY & Co. | Home', // TODO get from strapi
})
</script>
<template>
  <div>
    <SectionHero 
    image="https://assets.ju.st/is/2560x0/smart/filters:format(webp):quality(70)/f/111747/5000x3333/38351a2bab/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb.jpg" 
    quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate, voluptatum corrupti, aliquid pariatur voluptates"
    buttonLink="/"
    buttonText="Test"
    quoteSize="xl"
    />
    <SectionHero 
    image="https://assets.ju.st/is/2560x0/smart/filters:format(jpg):quality(70)/f/111747/5000x3333/4d60140f1e/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb-frit.jpg" 
    quote="aliquid pariatur voluptates "
    buttonLink="/"
    buttonText="Test"
    quoteSize="3xl"
    />
    <SectionHero 
    image="https://assets.ju.st/is/2560x0/smart/filters:format(jpg):quality(70)/f/111747/5000x3333/4d60140f1e/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb-frit.jpg" 
    quote="aliquid pariatur voluptates "
    buttonLink="/"
    buttonText="Test"
    buttonSize="6xl"
    quoteSize="6xl"
    /> 
    <!-- <SectionSlider /> -->
    <!-- <SectionContact /> -->
  </div>
</template>