// Config
import { supabaseClient } from "@/config/supabase"

// Cloudinary

export async function getLogo(appName: string) {
	const { data } = await supabaseClient.storage
		.from("Logos")
		.getPublicUrl(`${appName}.png`)

	const { publicUrl } = data

	return publicUrl
}
