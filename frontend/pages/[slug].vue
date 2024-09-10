<template>
  <div>
    <div v-if="result?.pages?.data[0]?.attributes?.PageBlock">
      <div v-for="(block, index) in result.pages.data[0].attributes.PageBlock" :key="index">
        <!-- ComponentBlockList -->
        <template v-if="block.__typename === 'ComponentBlockList'">
          <BlockList :items="block.chefs.data" :listName="block.listName"/>
        </template>
        <!-- ComponentBlockHero -->
        <template v-else-if="block.__typename === 'ComponentBlockHero'">
          <pre>{{ block }}</pre>
          <BlockHero :image="block.image.data.attributes.url" :quote="block.Description" :quoteSize="block.quoteSize" :buttonLink="block.buttonLink" :buttonText="block.buttonText" :buttonSize="block.buttonSize"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getPageBySlugQuery } from '~/graphql/queries';

const route = useRoute();
const slug = route.params.slug;
const { result, loading, error } = useQuery(getPageBySlugQuery, { slug });

const blocks =ref<any>()
// blocks.value = result?.pages?.data[0]?.attributes?.PageBlock[0]
</script>

<style scoped>

</style>