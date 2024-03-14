/* eslint-disable @typescript-eslint/indent */
import type { Database } from './supabase'

export type App = Pick<
  Database['public']['Tables']['Apps']['Row'],
  'name' | 'descriptions' | 'alternativeText' | 'githubRepoName' | 'osArray'
>

export type AppWithLogo = App & { logoURL: string }
