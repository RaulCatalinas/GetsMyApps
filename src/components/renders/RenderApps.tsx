// Types
import type { AppWithOutID } from '@/types/app'

// Components
import DownloadButton from '../buttons/DownloadButton'
import SearchForm from '../forms/SearchForm'
import RenderAppLogo from './RenderAppLogo'
import RenderOS from './RenderOS'

// Hooks
import { useSearch } from '@/hooks/useSearch'

// i18n
import { getJson, getLangFromUrl } from '@/i18n/utils'

// SolidJS
import { For } from 'solid-js'

interface Props {
  apps: AppWithOutID[]
  i18nURL: URL
}

export default function RenderApps(props: Props) {
  // eslint-disable-next-line solid/reactivity
  const { getFilteredApps, handleChange } = useSearch(props.apps)

  // eslint-disable-next-line solid/reactivity
  const lang = getLangFromUrl(props.i18nURL)

  const { renderApps } = getJson(lang)

  return (
    <div class="flex flex-col items-center justify-center">
      <SearchForm handleChange={handleChange} i18nURL={props.i18nURL} />

      {getFilteredApps().length === 0 && (
        <h1 class="text-white text-center text-pretty text-4xl font-sans m-4 shadow-md">
          {renderApps.error}
        </h1>
      )}

      {getFilteredApps().length > 0 && (
        <div class="grid grid-cols-2 max-sm:grid-cols-1 mt-4 gap-4 place-items-center">
          <For each={getFilteredApps()}>
            {app => {
              const {
                name,
                descriptions,
                logoURL,
                alternativeText,
                githubRepoName,
                osArray
              } = app

              const description = descriptions[lang]

              return (
                <article class="bg-white rounded-lg shadow-md mt-4 p-4 w-max">
                  <h1 class="text-xl font-semibold text-center text-balance">
                    {name}
                  </h1>
                  <p class="text-center text-pretty">{description}</p>
                  <RenderOS osArray={osArray} i18nURL={props.i18nURL} />
                  <RenderAppLogo
                    logoURL={logoURL ?? ''}
                    alternativeText={alternativeText}
                  />
                  <DownloadButton githubRepoName={githubRepoName} lang={lang} />
                </article>
              )
            }}
          </For>
        </div>
      )}
    </div>
  )
}
