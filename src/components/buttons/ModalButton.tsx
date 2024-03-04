// i18n
import { getJson } from "@/i18n/utils"

// Controllers
import { modalController } from "@/controllers/modal"

// Types
import type { Language } from "@/types/language"

interface Props {
	type: "affirmative" | "negative"
	id: "yes-btn" | "no-btn"
	language: Language
}

export default function ModalButton({ type, id, language }: Props) {
	const { modal } = getJson(language)

	return (
		<button
			type="button"
			id={id}
			class="inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-800 hover:scale-105 active:scale-90 text-center text-pretty w-full text-lg"
			onClick={() => modalController({ id, language })}
		>
			{type === "affirmative" ? modal.yes : "No"}
		</button>
	)
}
