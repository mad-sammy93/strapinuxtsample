<template>
  <div>
    <SectionHeader :headerTitle="name"/>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const name = route.params.name;


</script>
<style scoped lang="sass">

</style>