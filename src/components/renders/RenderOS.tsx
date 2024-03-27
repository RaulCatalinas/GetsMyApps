// SolidJS
import { For } from 'solid-js'

// Utils
import { firstLetterToUpperCase } from '@/utils/first-letter-to-uppercase'

// i18n
import { getJson, getLangFromUrl } from '@/i18n/utils'

interface Props {
  osArray: string[]
  i18nURL: URL
}

export default function RenderOS(props: Props) {
  // eslint-disable-next-line solid/reactivity
  const lang = getLangFromUrl(props.i18nURL)
  const { renderApps } = getJson(lang)

  return (
    <>
      <p class="text-center text-pretty mb-2">{renderApps.available}:</p>
      <div
        class={`
          grid grid-cols-${props.osArray.length === 1 ? 1 : 3}
          gap-2 place-items-center
        `}
      >
        <For each={props.osArray}>
          {os => (
            <span
              class={`
                inline-flex rounded-full p-2 
                text-base font-medium bg-gray-200 
                text-gray-800 text-pretty
              `}
            >
              {firstLetterToUpperCase(os)}
            </span>
          )}
        </For>
      </div>
    </>
  )
}
