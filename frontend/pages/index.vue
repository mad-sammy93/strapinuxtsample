<script lang="ts" setup>
import { homepageContent } from "@/graphql/getHomepage";
import type { HomepageEntityResponse } from "@/types";

type resHome = { homepage : HomepageEntityResponse} 
const { result, error:err } = useQuery<resHome>(homepageContent)

definePageMeta({
  layout: 'homepage'
})
useHead({
  title:'CURRY & Co. | Home',
})
</script>
<template>
  <div v-if="result?.homepage?.data?.attributes?.blocks">
    <div v-for="(block, index) in result?.homepage?.data?.attributes?.blocks" :key="index">

      <!-- ComponentBlockHero -->
      <template v-if="block?.__typename === 'ComponentBlockHero'">
        <BlockHero v-if="block?.id" :data="block"/>
      </template>

      <!-- ComponentBlockListChef -->
      <template v-if="block?.__typename === 'ComponentListListChef'">
        <BlockListChef :data="block"/>
      </template>

      <!-- ComponentBlockCtaDishes -->
      <template v-if="block?.__typename === 'ComponentBlockCtaDishes'">
        <BlockCtaDishes :data="block"/>
      </template>
    </div>
  </div>
</template>