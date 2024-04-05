// Cloudinary
import { v2 as cloudinary } from 'cloudinary'

// Logs
import { writeLog } from '@/logs/logger'

interface Props {
  imageURL: string
  appNameForLogs: string
}

export async function optimizeImage({ imageURL, appNameForLogs }: Props) {
  writeLog({
    level: 'info',
    message: `Uploading the ${appNameForLogs} app logo to Cloudinary to optimise it.`
  })

  const { secure_url: secureUrl } = await cloudinary.uploader.upload(imageURL, {
    transformation: [
      {
        width: 125,
        height: 125
      },
      { quality: 'auto' },
      {
        format: 'webp',
        fetch_format: 'webp'
      }
    ],
    upload_preset: 'getsMyApps'
  })

  return secureUrl
}
