// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxt/image'],
  plugins: ['~/plugins/getImageUrl.ts'],
  devServer: {
    port: 4400
  },
  image: {
    domains: [`${process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT}`],
    quality: 40,
    format: ['webp'],
    ipx: {
      baseURL: process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT,
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT}/graphql`
      }
    }
  },  
  nitro: {
    devProxy: {
      '/api': 'http://127.0.0.1:4500'
    }
  },
  runtimeConfig: {
    public: {
      // Overwritten with ENV variables (on local these are set in docker-compose)
      apiEndpoint: '/api',
      // internalApiEndpoint: '',
      // useS3: false
    }
  }
})