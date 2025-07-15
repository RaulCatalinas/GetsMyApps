// Config
import { turso } from '@/config/turso'

// Types
import type { AppWithOutID } from '@/types/app'
import type { JsonDescriptions } from '@/types/json'

// Logs
import { writeError } from '@/logs/logger'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export async function getApps(): Promise<void | AppWithOutID[]> {
  try {
    const { rows } = await turso.execute('SELECT * FROM apps')

    return await Promise.all(
      rows.map(async app => {
        const {
          name: nameValue,
          descriptions: descriptionsValue,
          githubRepoName: githubRepoNameValue,
          alternativeText: alternativeTextValue,
          osArray: osArrayString,
          logoURL: logoURLFromDB
        } = app

        const name = String(nameValue)
        const descriptions = descriptionsValue as unknown as JsonDescriptions
        const githubRepoName = String(githubRepoNameValue)
        const alternativeText = String(alternativeTextValue)
        const logoURL = String(logoURLFromDB)

        let osArray: string[]

        try {
          osArray = JSON.parse(osArrayString as string)
        } catch (error) {
          console.error('Error parsing osArray:', error)
          osArray = []
        }
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
