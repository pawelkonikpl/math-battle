// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const customLightTheme: ThemeDefinition = {
  colors: {
    background: '#00ffea',
    surface: '#FFFFFF',
    primary: '#ea652d',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme
      }
    },
    components,
    directives,

  })

  nuxtApp.vueApp.use(vuetify)
})
