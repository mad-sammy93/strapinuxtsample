// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxt/image'],
  devServer: {
    port: 4400
  },
  apollo: {
    clients: {
      default: {
        // httpEndpoint: 'https://spacex-production.up.railway.app'

        httpEndpoint: 'http://localhost:4500/graphql'
      }
    },
  },
})