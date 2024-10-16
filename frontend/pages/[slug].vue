<template>
  <div>
    {{ slug }}
    <!-- <div v-if="result?.pages?.data[0]?.attributes?.PageBlock">
      <div v-for="(block, index) in result.pages.data[0].attributes.PageBlock" :key="index"> -->
        <!-- ComponentBlockList -->
        <!-- <template v-if="block.__typename === 'ComponentBlockList'">
          <BlockList :items="block.chefs.data" :listName="block.listName"/>
        </template> -->
        <!-- ComponentBlockHero -->
        <!-- <template v-if="block.__typename === 'ComponentBlockHero'">
          <BlockHero :image="block.image.data.attributes.url" :quote="block.Description" :quoteSize="block.quoteSize" :buttonLink="block.buttonLink" :buttonText="block.buttonText" :buttonSize="block.buttonSize"/>
        </template> -->
        <!-- ComponentBlockHero -->
        <!-- <template v-else-if="block.__typename === 'ComponentBlockCtaDishes'">
          <BlockCtaDishes :dishes="block.dishes.data" :title="block.title" />
        </template> -->
      <!-- </div>
    </div> -->
    <!-- <div v-else> -->
      <!-- {{ error }} -->
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getPageBySlugQuery } from '~/graphql/queries';
// import type { GetPageBySlugQuery } from '~/types';

const route = useRoute();
const slug = route.params.slug;
// const { result, loading, error } = useQuery(getPageBySlugQuery, { slug });
</script>