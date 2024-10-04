<template>
  <div class="our-chefs">
    <h2>{{ heading }}</h2>
    <OurChefs v-if="chefs?.chefs.data" :data="chefs?.chefs.data" />
  </div>
</template>

<script lang="ts" setup>
import { getChefs } from "~/gql/getChefs";
import { ChefEntityResponseCollection } from "~/types";

const props = defineProps({
  heading: {
    type: String,
  },
});

type res = {
  chefs: ChefEntityResponseCollection;
};

const { result: chefs, error } = useQuery<res>(getChefs);
</script>

<style lang="sass">
.our-chefs
  margin: 40px 0px
  h2
    margin-bottom: 20px
</style>
