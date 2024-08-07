// Utils
import { copyTextToClipboard } from '@/utils/clipboard'

// Notifications
import { notify } from '@/notifications/notify'

// i18n
import { getJson, getLangFromUrl } from '@/i18n/utils'

// Constants
import { SHARE_DATA } from '@/constants/share'

// Logs
import { writeError } from '@/logs/logger'

export async function shareController() {
  const url = new URL(location.href)
  const lang = getLangFromUrl(url)
  const { share } = getJson(lang)

  if ('share' in navigator) {
    try {
      await navigator.share(SHARE_DATA)
    } catch (error) {
      writeError(error)
    }

    return
  }

  try {
    await copyTextToClipboard(location.href)

    notify({
      text: share.success,
      type: 'success'
    })
  } catch (error) {
    writeError(error)

    notify({
      text: share.error,
      type: 'error'
    })
  }
}
