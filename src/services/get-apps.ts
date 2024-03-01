// Supabase
import { supabaseClient } from "@/config/supabase"

// Types
import type { App, AppWithLogo } from "@/types/supabase"

// Services
import { getLogo } from "./get-logo"

// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
export async function getApps(): Promise<void | AppWithLogo[]> {
	const { data, error } = await supabaseClient
		.from("Apps")
		.select("*")
		.returns<App[]>()

	if (error) return console.error(error)

	return await Promise.all(
		data.map(async app => {
			const { name, description, githubRepoURL, alternativeText } = app

			const logoURL = await getLogo(name)

			return {
				name,
				description,
				githubRepoURL,
				logoURL,
				alternativeText
			}
		})
	)
}
