<template>
  <div>
    <div v-if="result">
      <div v-for="(block, index) in result?.pages?.data[0]?.attributes?.PageBlock" :key="index">
        <!-- ComponentBlockList -->
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

        <!-- ComponentBlockImage1440Px -->
        <template v-if="block?.__typename === 'ComponentBlockContact'">
          <BlockContact :data="block"/>
        </template>

        <!-- ComponentBlockImage1440Px -->
        <template v-if="block?.__typename === 'ComponentBlockImage1440Px'">
          <BlockImage1440 :data="block"/>
        </template>
      </div>
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPageBySlugQuery } from '@/graphql/getPageBySlug';
import type { PageEntityResponseCollection } from '@/types';

const route = useRoute();
const slug = route.params.slug;
type resPage = { pages : PageEntityResponseCollection} 
const { result, loading, error } = useQuery<resPage>(getPageBySlugQuery, { slug })

useHead({
  title:'CURRY & Co. | ', // TODO get from strapi
})
// Watch for result or error after loading
watchEffect(() => {
  if (!loading.value && !result.value?.pages?.data.length) {
    showError({
      statusCode: 404,
      statusMessage: `Page not found: ${slug}`,
    });
  }
});
</script>