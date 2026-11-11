import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@mdi/font/css/materialdesignicons.css', '~/assets/css/main.css'],
  app: {
    head: {
      title: 'AI Mock Interview Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AI mock interview platform' }
      ]
    }
  },
  nitro: {
    preset: 'node-server'
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    transpile: ['vuetify']
  }
})
