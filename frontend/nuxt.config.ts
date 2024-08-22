// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss',
    // '@nuxtjs/apollo'
  ],
  devServer: {
    port: 4400
  },
  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'http://localhost:1337/graphql',
  //       getAuth: () => `Bearer ${process.env.STRAPI_API_TOKEN}`
  //     }
  //   }
  // },
})