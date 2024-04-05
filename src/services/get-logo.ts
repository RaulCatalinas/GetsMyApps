// Config
import { supabaseClient } from '@/config/supabase'

// Services
import { optimizeImage } from './optimize-image'

// Types
import type { AppID } from '@/types/app'

// Logs
import { writeLog } from '@/logs/logger'

interface Props {
  appName: string
  appID: AppID
}

export async function getLogo({ appName, appID }: Props) {
  writeLog({
    level: 'info',
    message: `Getting the ${appName} app logo from the backend`
  })

  const { data } = supabaseClient.storage
    .from('Logos')
    .getPublicUrl(`${appName}.png`)

  const { publicUrl } = data

  const imageURL = await optimizeImage({
    imageURL: publicUrl,
    appNameForLogs: appName
  })

  await supabaseClient
    .from('Apps')
    .update({ logoURL: imageURL })
    .eq('id', appID)

  return imageURL
}
