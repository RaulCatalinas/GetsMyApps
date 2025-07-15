// Astro
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

// Tailwind CSS
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://gets-my-apps.vercel.app',
  integrations: [solidJs(), sitemap()],
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: false
  }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
