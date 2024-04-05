// Supabase
import { supabaseClient } from '@/config/supabase'

// Types
import type { App, AppWithOutID } from '@/types/app'

// Services
import { getLogo } from './get-logo'

// Logs
import { writeError } from '@/logs/logger'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export async function getApps(): Promise<void | AppWithOutID[]> {
  try {
    const { data, error } = await supabaseClient
      .from('Apps')
      .select('*')
      .returns<App[]>()

    if (error != null) {
      writeError(error)

      return
    }

    return await Promise.all(
      data.map(async app => {
        const {
          name,
          descriptions,
          githubRepoName,
          alternativeText,
          osArray,
          id: appID,
          logoURL: logoURLFromDB
        } = app

        const logoURL =
          logoURLFromDB ?? (await getLogo({ appName: name, appID }))

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
  } catch (error) {
    writeError(error)
  }
}
