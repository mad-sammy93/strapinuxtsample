<template>
  <div class="usp-overview">
    <h2>{{ data?.sectionHeading }}</h2>
    <div class="usps-card">
      <Card
        v-for="(usp, index) in uspData?.homeSpecialDishes.data"
        :key="usp.id || index"
        :usp="usp"
        card-type="usp"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { getHomeSpecialDishes } from "~/gql/getHomeSpecialDishes";
import {
  ComponentBlocksUsp,
  HomeSpecialDishEntityResponseCollection,
} from "~/types";

const props = defineProps({
  data: {
    type: Object as PropType<ComponentBlocksUsp>,
  },
});

type res = {
  homeSpecialDishes: HomeSpecialDishEntityResponseCollection;
};

const { data: uspData, error } = useAsyncQuery<res>(getHomeSpecialDishes);
</script>
<style lang="sass">
.usp-overview
  margin: 60px auto

  h2
    display: flex
    justify-content: center
    padding-bottom: 40px

  .usps-card
    display: flex
    flex-wrap: wrap
    gap: 20px
</style>
