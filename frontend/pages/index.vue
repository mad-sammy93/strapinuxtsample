<script setup>
useHead({
  title: 'Curry & Co. | Home', // TODO get from strapi
})

definePageMeta({
  layout: 'homepage'
})
const query = gql`
  query getShips($limit: Int!) {
    ships(limit: $limit) {
      id
      name
    }
  }
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery(query, variables)
</script>
<template>
  <div>
    Welcome    
    <p>There are {{ data?.ships?.length || 0 }} ships.</p>
  </div>
</template>