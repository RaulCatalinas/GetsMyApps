/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SUPABASE_API_KEY: string
	readonly CLOUDINARY_APY_KEY: string
	readonly CLOUDINARY_APY_SECRET: string
	readonly CLOUDINARY_CLOUD_NAME: string
	readonly GITHUB_ACCESS_TOKEN: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
