<script setup lang="ts">
import { homepageContent } from "~/graphql/queries";
import type { HomepageContentQuery } from "~/types";

const { result } = useQuery<HomepageContentQuery>(homepageContent)

definePageMeta({
  layout: 'homepage'
})
useHead({
  title:'CURRY & Co. | Home', // TODO get from strapi
})
</script>
<template>
  <div>
    <pre>{{ result?.homepage }}</pre>
    <div v-if="result?.homepage?.data?.attributes?.blocks ">
      <div v-for="(block, index) in result?.homepage?.data?.attributes?.blocks " :key="index">

        <!-- ComponentBlockHero -->
        <template v-if="block?.__typename === 'ComponentBlockHero'">
          <BlockHero :image="block?.image?.data?.attributes?.url" :quote="block?.Description" :quoteSize="useSizeFormat(block?.quoteSize)" :buttonLink="block.buttonLink" :buttonText="block.buttonText" :buttonSize="useSizeFormat(block.buttonSize)"/>
        </template>

        <!-- ComponentBlockListChef -->
        <template v-if="block?.__typename === 'ComponentListListChef'">
          <!-- <pre>{{ block }}</pre> -->
          <BlockListChef :chefs="block.chefs.data" :listName="block.listName"/>
        </template>
       
        <!-- ComponentBlockCtaDishes -->
        <template v-if="block?.__typename === 'ComponentBlockCtaDishes'">
          <!-- <BlockCtaDishes :dishes="block.dishes.data" :title="block.title" /> -->
        </template>
      </div>
    </div>
    <SectionContact />
  </div>
</template>