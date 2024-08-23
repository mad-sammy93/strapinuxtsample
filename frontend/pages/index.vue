<script setup>
useHead({
  title: 'Curry & Co. | Home', // TODO get from strapi
})

definePageMeta({
  layout: 'homepage'
})
const query = gql`{
  websiteInfo{
    data{
      attributes{
        site_logo{data{attributes{url}}},
        Site_name
      }
      
    }
  }
}`;

const site_logo = ref('')
const variables = { limit: 5 }
onMounted(async () => {
  const { data } = await useAsyncQuery(query, variables)
  site_logo.value = data.value.websiteInfo.data.attributes.site_logo.data.attributes.url
})

</script>
<template>
  <div>
    Welcome    
    <p>{{ site_logo }}</p>
    <!-- <NuxtImg src="http://localhost:4500/uploads/curry_968205a589.png" alt="" class="w-full object-cover" /> -->

  </div>
</template>