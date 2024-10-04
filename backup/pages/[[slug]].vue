<template>
  <div>
    <template v-if="pagesData?.pages?.data && pagesData?.pages?.data.length < 1"
      ><h1>Page not found</h1></template
    >
    <template v-else>
      <div
        v-for="(block, index) in pagesData?.pages.data[0].attributes?.blocks"
        :key="'block-' + index"
      >
        <template v-if="block?.__typename === 'ComponentBlocksRichText'">
          <BlockRichText :data="block" />
        </template>
        <template v-if="block?.__typename === 'ComponentBlocksSingleImage'">
          <BlockSingleImage
            :data="block"
            :class="route.params.slug ? route.params.slug : 'home'"
          />
        </template>
        <template v-if="block?.__typename === 'ComponentBlocksUsp'">
          <BlockUspOverview :data="block" />
        </template>
        <template
          v-if="block?.__typename === 'ComponentBlocksFoodMakingProcess'"
        >
          <BlockFoodMakingProcess :data="block" />
        </template>
        <template
          v-if="block?.__typename === 'ComponentBlocksDishesServedHero'"
        >
          <BlockDishesHeroHeader :data="block" />
        </template>
        <template
          v-if="block?.__typename === 'ComponentBlocksDishesServedOverview'"
        >
          <BlockDishesOverview :heading="block.heading" />
        </template>
        <template v-if="block?.__typename === 'ComponentBlocksOurChefs'">
          <BlockOurChefsOverview :heading="block.chefHeading" />
        </template>
        <template v-if="block?.__typename === 'ComponentBlocksContactHero'">
          <BlockContactHero :data="block" />
        </template>
        <template v-if="block?.__typename === 'ComponentBlocksContactBlock'">
          <BlockContactBlock :data="block" />
        </template>
        <!-- <template v-if="block?.__typename === 'NAME_OF_COMPONENT'">
          Repeat for all blocks
          {{ block }}
        </template> -->
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { getPages } from "../gql/getPages";
import { PageEntityResponseCollection, PageFiltersInput } from "../types";

const route = useRoute();

type resPages = { pages: PageEntityResponseCollection };

const filters: PageFiltersInput = {
  slug: { eq: `${route.params.slug ? route.params.slug : "home"}` },
};

const { data: pagesData, error: pagesError } = await useAsyncQuery<resPages>(
  getPages,
  { filters }
);
</script>
