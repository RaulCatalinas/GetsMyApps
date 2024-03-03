// Config
import { octokit } from "@/config/octokit"

// Types
import type { GitHubAPIResponse } from "@/types/api-github"

export async function getAssets(githubRepoName: string) {
	const { data } = await octokit.rest.repos.get({
		owner: "RaulCatalinas",
		repo: githubRepoName
	})

	const { releases_url } = data

	const githubAPIUrl = releases_url.replace("{/id}", "/latest")

	const res = await fetch(githubAPIUrl)
	const { assets }: GitHubAPIResponse = await res.json()

	return assets
}
