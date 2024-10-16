// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true, 
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxt/image'],
  plugins: ['@/plugins/getImageUrl.ts', '@/plugins/apollo-client.ts'],
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
        httpEndpoint: 'api/graphql',
      },
    }
  },
  nitro: {
    devProxy: {
      '/api': 'http://strapi:4500'
    }
  },
  runtimeConfig: {
    public: {
      // Overwritten with ENV variables (on local these are set in docker-compose)
      // internalApiEndpoint: 'http://strapi:4500/graphql',  // Internal (server-side) API
      // apiEndpoint: 'http://strapi:4500/graphql',
      internalApiEndpoint: '/api',
      apiEndpoint: '/api',
      useS3: false
    }
  }
})