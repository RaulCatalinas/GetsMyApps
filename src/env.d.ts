/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SUPABASE_DB_PASSWORD: string
	readonly SUPABASE_API_KEY: string
	readonly CLOUDINARY_API_KEY: string
	readonly CLOUDINARY_API_SECRET: string
	readonly CLOUDINARY_CLOUD_NAME: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
