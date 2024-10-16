<script lang="ts" setup>
import { homepageContent } from "@/graphql/getHomepage";
import type { HomepageContentQuery,ComponentBlockHero } from "@/types";

const { result, error:err } = useQuery<HomepageContentQuery>(homepageContent)
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
    <div v-if="result?.homepage?.data?.attributes?.blocks">
      <div v-for="(block, index) in result?.homepage?.data?.attributes?.blocks" :key="index">

        <!-- ComponentBlockHero -->
        <template v-if="block?.__typename === 'ComponentBlockHero'">
          <BlockHero :data="block"/>
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