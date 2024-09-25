<script setup>
import { chefQuery,siteName,homepageContent } from "~/graphql/queries";
// const  { data: siteInfo } = useQueryResult(siteName);
// const  chef  = useQueryResult(chefQuery);

// const  { data: result }  = useQueryResult(homepageContent);
const  { data: result }  = useAsyncQueryResult(homepageContent);
// console.log(result);

definePageMeta({
  layout: 'homepage'
})
useHead({
  title:'CURRY & Co. | Home', // TODO get from strapi
})

</script>
<template>
  <div>
    <!-- <pre>{{ result?.home?.data?.attributes?.Blocks  }}</pre> -->
    <div v-if="result?.home?.data?.attributes?.Blocks ">
      <div v-for="(block, index) in result?.home?.data?.attributes?.Blocks " :key="index">
        <!-- ComponentBlockList -->
        <template v-if="block.__typename === 'ComponentBlockList'">
          <pre>{{ block }}</pre>
          <BlockList :items="block.chefs.data" :listName="block.listName"/>
        </template>
        <!-- ComponentBlockHero -->
        <template v-if="block.__typename === 'ComponentBlockHero'">
          <BlockHero :image="block.image.data.attributes.url" :quote="block.Description" :quoteSize="useSizeFormat(block.quoteSize)" :buttonLink="block.buttonLink" :buttonText="block.buttonText" :buttonSize="useSizeFormat(block.buttonSize)"/>
        </template>
        <!-- ComponentBlockCtaDishes -->
        <template v-else-if="block.__typename === 'ComponentBlockCtaDishes'">
          <BlockCtaDishes :dishes="block.dishes.data" :title="block.title" />
        </template>
      </div>
    </div>

    <!-- <SectionCtaDishes /> -->
    <SectionContact />
  </div>
</template>