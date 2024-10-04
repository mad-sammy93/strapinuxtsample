<template>
  <div class="dishes-hero">
    <NuxtImg
      provider="strapi"
      :src="data?.heroImage.data?.attributes?.url"
      :alt="data?.heroImage.data?.attributes?.alternativeText"
    />
    <h1>{{ data?.heroHeading }}</h1>
  </div>
</template>
<script setup lang="ts">
import { ComponentBlocksDishesServedHero } from "~/types";

const props = defineProps({
  data: {
    type: Object as PropType<ComponentBlocksDishesServedHero>,
  },
});
</script>

<style lang="sass">
.dishes-hero
  margin-top: 60px
  max-width: $lg
  position: relative
  margin-bottom: 60px
  img
    width: 100%
    height: 700px
    object-fit: cover
  h1
    position: absolute
    top: 50%
    right: 0
    left: 0
    text-align: center
    color: $white
</style>
