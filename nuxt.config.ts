// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-19',
  ssr: true,
  modules: ['@nuxt/content', "@nuxt/image"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  ignore: [
    'middleware/manifest-route-rule.js'
  ]
})