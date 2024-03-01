import { v2 as cloudinary } from "cloudinary"

export async function optimizeImage(imageURL: string) {
	const { secure_url } = await cloudinary.uploader.upload(imageURL, {
		width: 125,
		height: 125,
		quality: "auto"
	})

	return secure_url
}
