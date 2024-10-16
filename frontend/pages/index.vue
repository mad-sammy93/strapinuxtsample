<script lang="ts" setup>
import { homepageContent } from "@/graphql/getHomepage";
import type { HomepageContentQuery } from "@/types";
import { useSizeFormat } from '@/composables/useSizeFormat';

const { result, error:err , loading} = useQuery<HomepageContentQuery>(homepageContent)
console.log('[homepage]',result.value,err.value);

definePageMeta({
  layout: 'homepage'
})
useHead({
  title:'CURRY & Co. | Home', // TODO get from strapi
})
</script>
<template>
  <!-- homepage
  <pre v-if="loading">{{ loading }}</pre>
  <pre v-else-if="err">{{  err}}</pre>
  <pre v-else>{{ homepage }}</pre> -->
    <div v-if="result?.homepage?.data?.attributes?.blocks ">
      <div v-for="(block, index) in result?.homepage?.data?.attributes?.blocks " :key="index">

        <!-- ComponentBlockHero -->
        <template v-if="block?.__typename === 'ComponentBlockHero'">
          <pre v-if="block">{{ block }}</pre>
          <!-- <BlockHero :image="block?.image?.data?.attributes?.url" :quote="block.Description" :quoteSize="useSizeFormat(block?.quoteSize)" :buttonLink="block.buttonLink" :buttonText="block.buttonText" :buttonSize="useSizeFormat(block.buttonSize)"/> -->
        </template>

        <!-- ComponentBlockListChef -->
        <template v-if="block?.__typename === 'ComponentListListChef'">
          <!-- <BlockListChef :chefs="block.chefs.data" :listName="block.listName"/> -->
        </template>

        <!-- ComponentBlockCtaDishes -->
        <template v-if="block?.__typename === 'ComponentBlockCtaDishes'">
          <!-- <BlockCtaDishes :dishes="block.dishes.data" :title="block.title" /> -->
        </template>
      </div>
    </div>
</template>