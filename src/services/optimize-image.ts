// Cloudinary
import { v2 as cloudinary } from 'cloudinary'

export async function optimizeImage(imageURL: string) {
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
