export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  pinia: {
    storesDirs: ['./stores/**/*.ts'],
  },
  components: true,
  runtimeConfig: {
    // 🔒 This is private! Server-side only. 
    // Nuxt will automatically replace 'http://samplecom.local' 
    // with whatever you type inside your .env file!
    wpApiUrl: process.env.WP_API_URL || 'http://localhost/wp-json/wp/v2', 
  },

  // 🎯 THE ANIMATION CAPABILITY FLAG
  app: {
    pageTransition: { name: 'fade-dungeon', mode: 'out-in' }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false }
})