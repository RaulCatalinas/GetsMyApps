// Cloudinary
import { v2 as cloudinary } from 'cloudinary'

// Constants
import {
  CLOUDINARY
} from '@/constants/env'

export function configureCloudinary() {
  cloudinary.config({
    api_key: CLOUDINARY.APY_KEY,
    api_secret: CLOUDINARY.APY_SECRET,
    cloud_name: CLOUDINARY.CLOUD_NAME
  })
}
