<template>
  <NuxtLink class="nav" :to="url || ''">{{ name }}</NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String as PropType<string | null | undefined>,
  },
  url: {
    type: String as PropType<string | null | undefined>,
  },
});
</script>
<style lang="sass">
.nav
  font-size: 20px
  font-weight: 500
  text-decoration: none
  color: $black

.router-link-active
  color: $white
</style>
