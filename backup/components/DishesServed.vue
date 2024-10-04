<template>
  <div class="dishes-served">
    <div class="dish" v-for="(dish, index) in dishes" :key="dish.id || index">
      <NuxtImg
        :src="dish.attributes?.dishImage.data?.attributes?.url"
        :alt="dish.attributes?.dishImage.data?.attributes?.alternativeText"
      />
      <div class="info">
        <h3>{{ dish.attributes?.name }}</h3>
        <p>{{ dish.attributes?.ingredients }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DishEntity } from "~/types";

const props = defineProps({
  dishes: {
    type: Array as PropType<DishEntity[]>,
  },
});
</script>

<style lang="sass">
.dishes-served
  margin-top: 40px
  display: flex
  flex-wrap: wrap
  gap: 40px
  .dish
    width: calc(30% - 20px)
    margin: 0 auto
    img
      width: 100%
</style>
