<script setup lang="ts">
import { homepageContent } from "~/graphql/queries";
import type { HomepageContentQuery } from "~/types";

// const { result } = useQuery<HomepageContentQuery>(homepageContent)

definePageMeta({
  layout: 'homepage'
})
useHead({
  title:'CURRY & Co. | Home', // TODO get from strapi
})
</script>
<template>
  <div>
    <!-- <pre>{{ result?.homepage }}</pre> -->
    
    <SectionContact />
  </div>
</template>