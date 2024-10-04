// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: ['~/assets/sass/all.sass'],
  modules: ['@nuxtjs/apollo', '@nuxt/image'],
  image: {
    provider: 'strapi',
    strapi: {
      baseURL: 'http://localhost:1337',
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: ''
      },
    },
  },
  runtimeConfig: {
    public: {
      // Overwritten with ENV variables (on local these are set in docker-compose)
      apiEndpoint: '',
      internalApiEndpoint: '',
      useS3: false
    }
  },
  components: [
    { path: '~/components/uielements', pathPrefix: false, global: true },
    "~/components",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import @/assets/style/global.sass',
        },
      },
    },
  },
})