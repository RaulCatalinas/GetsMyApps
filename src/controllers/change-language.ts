// Types
import type { Language } from "@/types/language"

// COnstants
import { SPANISH_CODE } from "@/constants/i18n"

export function changeLanguageController() {
	const languageDropdown = document.getElementById("select-language")

	languageDropdown?.addEventListener("change", event => {
		const language = (event.target as HTMLSelectElement).value as Language

		if (language === SPANISH_CODE) return location.assign("/es")

		location.assign("/")
	})
}
