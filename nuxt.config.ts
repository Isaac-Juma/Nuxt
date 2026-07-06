export default defineNuxtConfig({
  //
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image'],

  //.....
  pinia: {
    storesDirs: ['./stores/**/*.ts'],
  },

  //
  components: true,

  // 🔒 This is private! Server-side only. 
  runtimeConfig: {
    // Nuxt will automatically replace 'http://samplecom.local' 
    // with whatever I type inside my .env file!
    wpApiUrl: process.env.WP_API_URL || 'http://localhost/wp-json/wp/v2', 
  },

  //...
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false }
})