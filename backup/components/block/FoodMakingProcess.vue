<template>
  <div class="making-process">
    <div class="heading">
      <h2>{{ data?.heading }}</h2>
    </div>
    <div class="process-card" v-if="data?.process && data?.process?.length > 1">
      <Card
        card-type="process"
        v-for="(process, index) in data?.process"
        :process="process"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentBlocksFoodMakingProcess } from "~/types";

const props = defineProps({
  data: {
    type: Object as PropType<ComponentBlocksFoodMakingProcess>,
  },
});
</script>
<style lang="sass">
.making-process
  margin: 60px 0px
  .heading
    display: flex
    justify-content: center
    padding-bottom: 40px

  .process-card
    display: flex
    flex-wrap: wrap
    gap: 60px
</style>
