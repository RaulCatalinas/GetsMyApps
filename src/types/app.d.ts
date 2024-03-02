import type { Database } from "./supabase"

export type App = Pick<
	Database["public"]["Tables"]["Apps"]["Row"],
	"name" | "description" | "alternativeText" | "githubRepoName" | "osArray"
>

export type AppWithLogo = App & { logoURL: string }
