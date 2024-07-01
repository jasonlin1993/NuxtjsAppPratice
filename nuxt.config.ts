// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :p',
    public: {
      apiBase: '/api',
    },
  },
  imports: {
    dirs: ['stores'],
  },

  appConfig: {
    theme: {
      primaryColor: '#0ea5e9',
      darkMode: false,
    },
  },
});
