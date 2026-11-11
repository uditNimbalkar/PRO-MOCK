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
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            primary: '#c0c1ff',
            secondary: '#4cd7f6',
            accent: '#8b5cf6',
            background: '#121318',
            surface: '#1a1b20'
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
