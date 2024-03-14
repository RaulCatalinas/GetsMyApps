// Config
import { supabaseClient } from '@/config/supabase'

// Services
import { optimizeImage } from './optimize-image'

export async function getLogo(appName: string) {
  const { data } = supabaseClient.storage
    .from('Logos')
    .getPublicUrl(`${appName}.png`)

  const { publicUrl } = data

  return await optimizeImage(publicUrl)
}
