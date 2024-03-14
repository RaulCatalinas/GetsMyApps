// Services
import { getAssets } from '@/services/get-assets'

// Utils
import { getUserOS } from './get-user-os'

export async function getDownloadUrl(githubRepoName: string) {
  const assets = await getAssets(githubRepoName)

  const userOS = getUserOS()

  const assetToDownload = assets.find(asset =>
    asset.name.toLowerCase().includes(userOS)
  )

  if (assetToDownload == null) throw new Error('Asset not found')

  const { browser_download_url: browserDownloadUrl } = assetToDownload

  return browserDownloadUrl
}
