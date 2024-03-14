// Supabase
import { supabaseClient } from '@/config/supabase'

// Types
import type { App, AppWithLogo } from '@/types/app'

// Services
import { getLogo } from './get-logo'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export async function getApps(): Promise<void | AppWithLogo[]> {
  const { data, error } = await supabaseClient
    .from('Apps')
    .select('*')
    .returns<App[]>()

  if (error != null) {
    console.error(error)
    return
  }

  return await Promise.all(
    data.map(async app => {
      const { name, descriptions, githubRepoName, alternativeText, osArray } =
        app

      const logoURL = await getLogo(name)

      return {
        name,
        descriptions,
        githubRepoName,
        logoURL,
        alternativeText,
        osArray
      }
    })
  )
}
