<template>
  <div class="p-10 bg-white dark:bg-gray-700" >
    <MoleculesForm :data="data?.Form"/>
  </div>
</template>
<script setup lang="ts">
import type { ComponentBlockContact } from '@/types'
defineProps({
  data: {
    type: Object as PropType<ComponentBlockContact>,
  }
})
</script>
<style scoped lang="sass">

</style>