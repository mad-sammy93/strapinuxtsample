// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true, 
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxt/image'],
  plugins: ['~/plugins/getImageUrl.ts'],
  devServer: {
    port: 4400
  },
  // build: {
  //   transpile: [
  //     '@apollo/client',
  //     // 'ts-invariant/process',
  //   ],
  // },
  image: {
    domains: [`${process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT}`],
    quality: 40,
    format: ['webp'],
    ipx: {
      baseURL: process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT,
    }
  },
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: `${process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT}/graphql`,
  //     },
  //   },
  // },
  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4500/graphql',
      },
    }
  },
  // apollo: {
  //   // autoImports: true,
  //   clients: {
  //     default: {
  //       httpEndpoint: `${process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT}/graphql`,
  //       // browserHttpEndpoint: `${process.env.NUXT_PUBLIC_INTERNAL_API_ENDPOINT}/graphql`, // Add this for client-side fetches
  //       // browserHttpEndpoint: '/graphql',
  //       // httpLinkOptions: {
  //       //   credentials: 'same-origin'
  //       // },
  //       // tokenName: 'apollo-token',
  //     }
  //   }
  // },
  // nitro: {
  //   devProxy: {
  //     '/api': 'http://strapi:4500'
  //   }
  // },
  runtimeConfig: {
    public: {
      // Overwritten with ENV variables (on local these are set in docker-compose)
      // internalApiEndpoint: 'http://strapi:4500/graphql',  // Internal (server-side) API
      // apiEndpoint: 'http://strapi:4500/graphql',
      internalApiEndpoint: '',
      apiEndpoint: '',
      useS3: false
    }
  }
})