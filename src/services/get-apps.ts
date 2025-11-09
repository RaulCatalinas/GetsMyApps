// Config
import { turso } from '@/config/turso'

// Types
import type { AppWithOutID } from '@/types/app'
import type { JsonDescriptions } from '@/types/json'

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
          logoURL: logoURLFromDB,
          in_development: inDevelopmentValue
        } = app

        const name = String(nameValue)
        const githubRepoName = String(githubRepoNameValue)
        const alternativeText = String(alternativeTextValue)
        const logoURL = String(logoURLFromDB)
        const inDevelopment = Boolean(inDevelopmentValue)

        let osArray: string[]
        let descriptions: JsonDescriptions

        try {
          osArray = JSON.parse(osArrayString as string)
        } catch (error) {
          console.error('Error parsing osArray:', error)
          osArray = []
        }

        try {
          descriptions = JSON.parse(descriptionsValue as string)
        } catch (error) {
          console.error('Error parsing descriptions:', error)
          descriptions = { en: '', es: '' }
        }
        return {
          name,
          descriptions,
          githubRepoName,
          logoURL,
          alternativeText,
          osArray,
          inDevelopment
        }
      })
    )
  } catch (error) {
    return undefined
  }
}
