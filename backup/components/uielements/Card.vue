<template>
  <div :class="cardType">
    <NuxtImg
      v-if="usp?.attributes?.image.data?.attributes?.url"
      :src="usp?.attributes?.image.data?.attributes?.url"
      :alt="usp?.attributes?.image.data?.attributes?.alternativeText"
      class="image"
    />
    <div class="details">
      <p class="title" v-if="usp?.attributes?.title">
        {{ usp?.attributes?.title }}
      </p>
      <p class="title" v-if="process?.title">
        {{ process?.title }}
      </p>
      <p class="description" v-if="usp?.attributes?.description">
        {{ usp?.attributes?.description }}
      </p>
      <p class="description" v-if="process?.description">
        {{ process.description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  ComponentProcessofmakingfoodProcessofmakingfood,
  HomeSpecialDishEntity,
  Maybe,
} from "~/types";

const props = defineProps({
  usp: {
    type: Object as PropType<HomeSpecialDishEntity>,
  },
  cardType: {
    type: String as PropType<"usp" | "process">,
    required: true,
  },
  process: {
    type: Object as PropType<
      Maybe<ComponentProcessofmakingfoodProcessofmakingfood>
    >,
  },
});
</script>
<style lang="sass" scoped>
.usp
  display: flex
  flex-direction: column
  width: calc( 26% -  20px)
  background: $blueVoilet
  margin: 0 auto
  border-radius: 16px
  gap: 20px
  .image
    width: 100%
    height: 60%
    object-fit: cover
    border-top-left-radius: 16px
    border-top-right-radius: 16px
  .details
    padding: 0 20px
    .title
      color:$vividOrange
      font-weight: 500
      font-size: larger
      padding-bottom: 32px
    .description
      color:$white
.process
  width: calc( 50% - 60px )
  display: flex
  flex-direction: column
  justify-content: center
  .details
    text-align: center
    max-width: 60%
    margin: 0 auto
    .title
      color: $white
      font-size: larger
    .description
      font-size: large
</style>
