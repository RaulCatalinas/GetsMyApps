// i18n
import { SPANISH_CODE } from "@/constants/i18n"

// Types
import type { Language } from "@/types/language"

interface Props {
	id: "yes-btn" | "no-btn"
	language: Language
}

export function modalController({ id, language }: Props) {
	const dialogContainer = document.getElementById(
		"dialog-container"
	) as HTMLDivElement

	if (dialogContainer == null) return

	if (id === "yes-btn") {
		return location.assign(language === SPANISH_CODE ? "/es" : "/")
	}

	return dialogContainer.remove()
}
