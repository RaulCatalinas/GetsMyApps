import { defineConfig } from 'astro/config'

import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs({}), tailwind({})],
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
