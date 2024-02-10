// https://nuxt.com/docs/api/configuration/nuxt-config
// 06-notesApp
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    '~/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
