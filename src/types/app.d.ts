/* eslint-disable @typescript-eslint/indent */
import type { JsonDescriptions } from '@/types/json'

export type App = {
  alternativeText: string
  descriptions: JsonDescriptions
  githubRepoName: string
  id: AppID
  logoURL: string
  name: string
  osArray: string[]
}

export type AppWithOutID = Omit<App, 'id'>

export type AppID = Number
