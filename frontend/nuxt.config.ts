// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxt/image'],
  devServer: {
    port: 4400
  },
  apollo: {
    // autoImports: true,
    // authType: 'Bearer',
    // authHeader: 'Authorization',
    // tokenStorage: 'cookie',
    // proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: 'http://127.0.0.1:4500/graphql'
      }
    }
  },
  // runtimeConfig: {
  //   public: {
  //     // Overwritten with ENV variables (on local these are set in docker-compose)
  //     apiEndpoint: '',
  //     internalApiEndpoint: '',
  //     useS3: false
  //   }
  // }
})