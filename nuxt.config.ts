// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from "vite-plugin-eslint";
import path from "path";
import vuetify from "vite-plugin-vuetify";
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Math battles",
      meta: [
        { name: "description", content: "My amazing site." }
      ],
    }
  },

  pages: true,
  css: ["vuetify/lib/styles/main.sass","~/assets/scss/settings.scss",  "~/assets/scss/base.scss", ],
  build: {
    transpile: ["vuetify"]
  },
  modules: [
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => (config?.plugins as any).push(vuetify()));
    },
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json"
      },
      {
        code: "pl",
        file: "pl.json"
      }
    ], // used in URL path prefix
    lazy: true,
    langDir: "lang",
    defaultLocale: "pl",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root"  // recommended
    },
    vueI18n: {
      locale: "pl",
      legacy: false
    }
  },
  vite: {
    ssr: {
      noExternal: [
        'vuetify',
      ],
    },
    define: {
      "process.env.DEBUG": false
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './components')
      },
    },
    plugins: [
      eslintPlugin(),
    ]
  },
});
