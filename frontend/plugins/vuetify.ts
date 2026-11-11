import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#2f80ed',
            secondary: '#1f2937',
            accent: '#8b5cf6'
          }
        }
      }
    },
    icons: {
      defaultSet: 'mdi'
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
