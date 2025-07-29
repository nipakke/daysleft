import { EVENTS } from "./data/events";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui-pro", "nuxt-time", "nuxt-og-image"],


  app: {
    pageTransition: import.meta.dev ? undefined : { name: 'page', mode: 'out-in' }
  },

  site: {
    url: 'https://daysleft-countdown.netlify.app',
    name: 'daysleft.site'
  },


  vite: {
    optimizeDeps: {
      entries: [
        "dayjs",
        "@vueuse/core"
      ]
    }
  },

  nitro: {
    prerender: {
      routes: [
        ...Object.keys(EVENTS).map(id => `/countdown/${id}`)
      ]
    },
    routeRules: {
      "/": { prerender: true },
      "/countdown/**": { prerender: true },
    }
  },
})
