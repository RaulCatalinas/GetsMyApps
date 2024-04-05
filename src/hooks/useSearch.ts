// SolidJS
import { createSignal } from 'solid-js'

// Types
import type { AppWithOutID } from '@/types/app'

export function useSearch(apps: AppWithOutID[]) {
  const [getFilteredApps, setFilteredApps] = createSignal<AppWithOutID[]>(apps)

  const handleChange = (value: string) => {
    setFilteredApps(
      apps.filter(app => {
        return (
          app.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          app.osArray.some(os =>
            os.toLocaleLowerCase().includes(value.toLocaleLowerCase())
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
