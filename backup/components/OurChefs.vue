<template>
  <div class="chefs-wrapper">
    <div class="chef" v-for="(chef, index) in data" :key="chef.id || index">
      <h3>{{ chef.attributes?.name }}</h3>
      <p>
        Favorite Dish: {{ chef.attributes?.dishes?.data[0].attributes?.name }}
      </p>
      <p>{{ chef.attributes?.workingWithUs }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChefEntity } from "~/types";

const props = defineProps({
  data: {
    type: Array as PropType<ChefEntity[]>,
  },
});
</script>
<style lang="sass">
.chefs-wrapper
  display: flex
  flex-direction: column
  align-items: center
  gap: 40px
  .chef
    max-width: 200px
    width: 100%
    padding: 20px
    background: $white
    border-radius: 8px
    p
      margin: 10px 0px
</style>
