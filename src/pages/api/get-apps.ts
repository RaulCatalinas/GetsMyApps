// Astro
import type { APIRoute } from 'astro'

// Services
import { getApps } from '@/services/get-apps'

export const GET: APIRoute = async () => {
  try {
    const apps = await getApps()

    if (!Array.isArray(apps)) {
      return new Response(null, { status: 404 })
    }

    return new Response(JSON.stringify(apps))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
