import { getJson, getLangFromUrl } from "@/i18n/utils"

interface Props {
	handleChange: (value: string) => void
	i18nURL: URL
}

export default function SearchForm({ handleChange, i18nURL }: Props) {
	const lang = getLangFromUrl(i18nURL)
	const { search } = getJson(lang)

	const divWidth = lang === "es" ? 330 : 280

	return (
		<div
			class={`
				flex flex-col items-center justify-center 
				w-[${divWidth}px] h-max rounded-3xl 
			bg-gray-900 shadow-md border border-gray-700
			`}
			id="search"
		>
			<label
				for="input-search"
				class="mt-2 text-base font-medium text-gray-300 text-center text-pretty"
			>
				{search.label}
			</label>
			<input
				type="search"
				class="flex-grow-0 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 m-2 placeholder:text-center w-[calc(100%_-_1rem)]"
				placeholder={search.placeholder}
				onInput={event => {
					handleChange(event.target.value)
				}}
			/>
		</div>
	)
}
