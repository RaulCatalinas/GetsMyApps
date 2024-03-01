/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SUPABASE_DB_PASSWORD: string
	readonly SUPABASE_API_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
