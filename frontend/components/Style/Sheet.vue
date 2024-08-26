<template>
  <div>
    <!-- <Navbar />
    <Footer /> -->
    {{ data }}
  </div>
</template>
<script>
export default {
  async asyncData({ app }) {
    const query = gql`{
      websiteInfo{
        data{
          attributes{
            site_logo{data{attributes{url}}},
            Site_name,        
          }
        }
      }
    }`;
    const { data } = await app.apolloProvider.defaultClient.query({ query });
    return { data };
  }
}
</script>