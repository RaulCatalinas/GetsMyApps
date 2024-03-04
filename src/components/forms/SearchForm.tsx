interface Props {
	handleChange: (value: string) => void
}

export default function SearchForm({ handleChange }: Props) {
	return (
		<div
			class="flex items-center justify-center w-[370px] h-12 rounded-full bg-gray-900 shadow-md border border-gray-700"
			id="search"
		>
			<label for="input-search" class="ml-2 text-sm font-medium text-gray-300">
				App name or OS
			</label>
			<input
				type="search"
				class="flex-grow-0 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 m-2"
				placeholder="App name or OS"
				onInput={event => {
					handleChange(event.target.value)
				}}
			/>
		</div>
	)
}
