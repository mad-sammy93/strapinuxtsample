<template>
  <div class="single-image">
    <NuxtImg
      provider="strapi"
      :src="data?.image.data?.attributes?.url"
      :alt="data?.image.data?.attributes?.name"
    />
  </div>
</template>

<script lang="ts" setup>
import type { ComponentBlocksSingleImage } from "../../types";

const props = defineProps({
  data: Object as PropType<ComponentBlocksSingleImage>,
});
</script>

<style lang="sass">
.home
  img
    width: 100%
    object-fit: cover
    height: 500px
    margin-top: 60px

.chefs
  display: flex
  justify-content: center
  margin-top: 60px
  img
    object-fit: cover
</style>
