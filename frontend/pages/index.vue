<script lang="ts" setup>
// import {  useQuery } from '@vue/apollo-composable'


import { homepageContent } from "~/graphql/queries";
import type { HomepageContentQuery } from "~/types";
// const { client } = useApolloClient('default') // Ensure 'default' client is used

const { result: homepage, error  } = useQuery<HomepageContentQuery>(homepageContent)
  // const { result, loading, error } = useQuery(homepageContent, null,{ client })
// const result = ref()
// onMounted(() => {
//   const query = useQuery(homepageContent)
  
//   result.value = query.result
//   console.log('[query]',query);
//   // result = query.result
//   // loading = query.loading
//   // error = query.error
// })


// definePageMeta({
//   layout: 'homepage'
// })
// useHead({
//   title:'CURRY & Co. | Home', // TODO get from strapi
// })
</script>
<template>
  homepage
  <pre>{{ homepage || error}}</pre>
    <!-- <div v-if="result?.homepage?.data?.attributes?.blocks ">
      <div v-for="(block, index) in result?.homepage?.data?.attributes?.blocks " :key="index"> -->

        <!-- ComponentBlockHero -->
        <!-- <template v-if="block?.__typename === 'ComponentBlockHero'">
          <BlockHero :image="block?.image?.data?.attributes?.url" :quote="block.Description" :quoteSize="useSizeFormat(block?.quoteSize)" :buttonLink="block.buttonLink" :buttonText="block.buttonText" :buttonSize="useSizeFormat(block.buttonSize)"/>
        </template> -->

        <!-- ComponentBlockListChef -->
        <!-- <template v-if="block?.__typename === 'ComponentListListChef'">
          <BlockListChef :chefs="block.chefs.data" :listName="block.listName"/>
        </template> -->

        <!-- ComponentBlockCtaDishes -->
        <!-- <template v-if="block?.__typename === 'ComponentBlockCtaDishes'">
          <BlockCtaDishes :dishes="block.dishes.data" :title="block.title" />
        </template> -->
      <!-- </div>
    </div> -->
</template>