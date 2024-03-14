// Config
import { octokit } from '@/config/octokit'

// Types
import type { GitHubAPIResponse } from '@/types/api-github'

export async function getAssets(githubRepoName: string) {
  const { data } = await octokit.rest.repos.get({
    owner: 'RaulCatalinas',
    repo: githubRepoName
  })

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { releases_url } = data

  const githubAPIUrl = releases_url.replace('{/id}', '/latest')

  const res = await fetch(githubAPIUrl)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { assets }: GitHubAPIResponse = await res.json()

  return assets
}
