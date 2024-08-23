// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', "@nuxt/image"],
  devServer: {
    port: 4400
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4500/graphql',
        // getAuth: () => `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    },
  },
})