import { v2 as cloudinary } from "cloudinary"

export function configureCloudinary() {
	cloudinary.config({
		api_key: import.meta.env.CLOUDINARY_APY_KEY,
		api_secret: import.meta.env.CLOUDINARY_APY_SECRET,
		cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME
	})
}
