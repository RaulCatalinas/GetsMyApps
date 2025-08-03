import { octokit } from '@/config/octokit'

export async function getRepoUrl(githubRepoName: string) {
  const { url } = await octokit.rest.repos.get({
    owner: 'RaulCatalinas',
    repo: githubRepoName
  })

  return url.replace('api.', '').replace('/repos', '')
}
