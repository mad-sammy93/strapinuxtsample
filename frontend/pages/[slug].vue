<template>
  <div>
    <div v-if="result">
      <pre>{{ result?.pages?.data[0]?.attributes }}</pre>
      <div v-for="(block, index) in result?.pages?.data[0]?.attributes?.PageBlock" :key="index">
        
        <!-- ComponentBlockList -->
        <template v-if="block?.__typename === 'ComponentBlockHero'">
          <BlockHero :data="block"/>
        </template>

        <!-- ComponentBlockListChef -->
        <!-- <template v-if="block?.__typename === 'ComponentListListChef'">
          <BlockListChef :data="block"/>
        </template> -->

        <!-- ComponentBlockCtaDishes -->
        <template v-if="block?.__typename === 'ComponentBlockCtaDishes'">
          <BlockCtaDishes :data="block"/>
        </template>
      </div>
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getPageBySlugQuery } from '@/graphql/getPageBySlug';
import type { GetPageBySlugQuery, Page, PageEntityResponseCollection } from '@/types';

const route = useRoute();
const slug = route.params.slug;
type resPage = { pages : PageEntityResponseCollection} 
const { result, loading, error } = useQuery<resPage>(getPageBySlugQuery, { slug })

useHead({
  title:'CURRY & Co. | ', // TODO get from strapi
})
</script>