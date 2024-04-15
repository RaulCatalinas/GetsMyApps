// Octokit
import { Octokit } from 'octokit'

// Constants
import { GITHUB_ACCESS_TOKEN } from '@/constants/env'

export const octokit = new Octokit({
  auth: GITHUB_ACCESS_TOKEN
})
