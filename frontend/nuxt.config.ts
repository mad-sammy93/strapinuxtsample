// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss',
    '@nuxtjs/apollo'
  ],
  devServer: {
    port: 4400
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://spacex-production.up.railway.app'
      }
    },
  },
  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'http://localhost:1337/graphql',
  //       getAuth: () => `Bearer ${process.env.STRAPI_API_TOKEN}`
  //     }
  //   }
  // },
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: 'https://your-graphql-endpoint.com/graphql',
  //       // wsEndpoint: 'ws://your-graphql-endpoint.com/graphql', // Optional, for subscriptions
  //     }
  //   },
  //   defaultOptions: {
  //     // See 'apollo-client' options
  //     httpLinkOptions: {
  //       credentials: 'same-origin'  // Change this as needed
  //     },
  //     // apollo default options
  //     watchQuery: {
  //       fetchPolicy: 'no-cache',
  //       errorPolicy: 'ignore'
  //     },
  //     query: {
  //       fetchPolicy: 'no-cache',
  //       errorPolicy: 'all'
  //     }
  //   },
  //   // Token handling
  //   tokenName: 'apollo-token', // Specify the token name
  //   cookieAttributes: {
  //     expires: 7, // Token expiration in days
  //   },
  //   // Enable auto-queries
  //   autoFetch: false
  // }
})