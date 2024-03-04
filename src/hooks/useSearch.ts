// SolidJS
import { createSignal } from "solid-js"

// Types
import type { AppWithLogo } from "@/types/app"

export function useSearch(apps: AppWithLogo[]) {
	const [getFilteredApps, setFilteredApps] = createSignal<AppWithLogo[]>(apps)

	const handleChange = (value: string) => {
		setFilteredApps(
			apps.filter(app => {
				return (
					app.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
					app.osArray.some(os =>
						os.toLowerCase().includes(value.toLocaleLowerCase())
					)
				)
			})
		)
	}

	return {
		getFilteredApps,
		handleChange
	}
}
