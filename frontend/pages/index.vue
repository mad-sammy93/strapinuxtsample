<script setup>
import { chefQuery,siteName,homepageContent } from "~/graphql/queries";
// const  { data: siteInfo } = useQueryResult(siteName);
// const  chef  = useQueryResult(chefQuery);

const  { data: homepage }  = useQueryResult(homepageContent);

// const sections = ref(homepage.home.data.attributes) 
definePageMeta({
  layout: 'homepage'
})
useHead({
  title:'CURRY & Co. | Home', // TODO get from strapi
})
const blocks =ref()
blocks.value = homepage?.home?.data?.attributes?.Blocks.map((block) => {
  return block
})
</script>
<template>
  <div>
    <SectionHeader headerTitle="Home"/>
    <pre>{{ blocks }}</pre>

    <SectionCtaDishes v-if="homepage?.home?.data?.attributes?.Blocks.includes('CtaDishes')" :dishes="homepage?.home?.data.attributes.Blocks[0]"/>
    <SectionHero v-for="hero in homepage?.home?.data?.attributes?.Section " :key="hero.id"
    :image="hero.image.data.attributes.url" 
    :data-image="hero.image.data.attributes.url"
    :quote="hero.quote"
    :buttonLink="hero.buttonLink"
    :buttonText="hero.buttonText"
    quoteSize="4xl"
     />
     <SectionChefInfo />
    <!-- <SectionHero v-for="hero in homepage?.home?.data?.attributes?.Section " :key="hero.id"
    image="https://assets.ju.st/is/2560x0/smart/filters:format(webp):quality(70)/f/111747/5000x3333/38351a2bab/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb.jpg" 
    :data-image="hero.image.data.attributes.url"
    :quote="hero.quote"
    :buttonLink="hero.buttonLink"
    :buttonText="hero.buttonText"
    quoteSize="xl"
     /> -->
    <!-- <SectionHero 
    image="https://assets.ju.st/is/2560x0/smart/filters:format(jpg):quality(70)/f/111747/5000x3333/4d60140f1e/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb-frit.jpg" 
    quote="aliquid pariatur voluptates "
    buttonLink="/"
    buttonText="Test"
    quoteSize="3xl"
    /> -->
    <!--<SectionHero 
    image="https://assets.ju.st/is/2560x0/smart/filters:format(jpg):quality(70)/f/111747/5000x3333/4d60140f1e/21-09-2165-28b-bby_jus-scrambled-plated-simple-02_rgb-frit.jpg" 
    quote="aliquid pariatur voluptates "
    buttonLink="/"
    buttonText="Test"
    buttonSize="6xl"
    quoteSize="6xl"
    />  -->
    <SectionCtaDishes />
    <SectionContact />
  </div>
</template>