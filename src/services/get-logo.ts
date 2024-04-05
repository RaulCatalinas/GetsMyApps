// Config
import { supabaseClient } from '@/config/supabase'

// Services
import { optimizeImage } from './optimize-image'

// Types
import type { AppID } from '@/types/app'

interface Props {
  appName: string
  appID: AppID
}

export async function getLogo({ appName, appID }: Props) {
  const { data } = supabaseClient.storage
    .from('Logos')
    .getPublicUrl(`${appName}.png`)

  const { publicUrl } = data

  const imageURL = await optimizeImage(publicUrl)

  await supabaseClient
    .from('Apps')
    .update({ logoURL: imageURL })
    .eq('id', appID)

  return imageURL
}
