// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from "vite-plugin-eslint";

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
  css: ["vuetify/lib/styles/main.sass", "~/assets/scss/base.scss"],
  build: {
    transpile: ["vuetify"]
  },
  modules: [
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
    define: {
      "process.env.DEBUG": false
    },
    plugins: [
      eslintPlugin(),
    ]
  },
});
