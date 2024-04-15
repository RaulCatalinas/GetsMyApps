import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://gets-my-apps.vercel.app',
  integrations: [solidJs(), tailwind(), sitemap()],
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
  }
})
