// Notifications
import { notify } from '@/notifications/notify'

// Utils
import { getDownloadUrl } from '@/utils/get-download-url'

// i18n
import { getJson, getLangFromUrl } from '@/i18n/utils'

export async function downloadController(githubRepoName: string) {
  const url = new URL(location.href)
  const lang = getLangFromUrl(url)
  const { controllers } = getJson(lang)

  let downloadUrl: string

  try {
    downloadUrl = await getDownloadUrl(githubRepoName)
  } catch (error) {
    notify({
      text: controllers.download.error,
      type: 'error'
    })

    return
  }

  const aElement = document.createElement('a')

  aElement.href = downloadUrl
  aElement.style.display = 'none'
  aElement.click()

  document.removeChild(aElement)
}
