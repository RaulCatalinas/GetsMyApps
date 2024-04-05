/* eslint-disable @typescript-eslint/indent */
import type { Database } from './supabase'

export type App = Pick<
  Database['public']['Tables']['Apps']['Row'],
  | 'name'
  | 'descriptions'
  | 'alternativeText'
  | 'githubRepoName'
  | 'osArray'
  | 'id'
  | 'logoURL'
>

export type AppWithOutID = Omit<App, 'id'>

export type AppID = `${string}-${string}-${string}-${string}-${string}`
