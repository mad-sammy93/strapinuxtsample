<template>
  <div class="contact-hero">
    <NuxtImg
      :src="data?.contactHeroImage.data?.attributes?.url"
      :alt="data?.contactHeroImage.data?.attributes?.alternativeText"
    />
    <h1>{{ data?.contactHeroHeading }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ComponentBlocksContactHero } from "~/types";

const props = defineProps({
  data: {
    type: Object as PropType<ComponentBlocksContactHero>,
  },
});
</script>

<style lang="sass">
.contact-hero
  position: relative
  margin: 60px 0px
  img
    width: 100%
    height: 500px
    object-fit: cover
  h1
    color: $vividOrange
    position: absolute
    top: 50%
    left:0
    right: 0
    text-align: center
</style>
