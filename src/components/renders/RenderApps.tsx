// Types
import type { AppWithLogo } from "@/types/app"

// Utils
import { firstLetterToUpperCase } from "@/utils/first-letter-to-uppercase"

// Components
import DownloadButton from "../buttons/DownloadButton"
import SearchForm from "../forms/SearchForm"

// Hooks
import { useSearch } from "@/hooks/useSearch"

// i18n
import { getJson, getLangFromUrl } from "@/i18n/utils"

interface Props {
	apps: AppWithLogo[]
	i18nURL: URL
}

export default function RenderApps({ apps, i18nURL }: Props) {
	const { getFilteredApps, handleChange } = useSearch(apps)

	const lang = getLangFromUrl(i18nURL)

	const { renderApps } = getJson(lang)

	return (
		<div class="flex flex-col items-center justify-center">
			<SearchForm handleChange={handleChange} />

			{getFilteredApps().length === 0 && (
				<h1 class="text-white text-center text-pretty text-4xl font-sans m-4 shadow-md">
					{renderApps.error}
				</h1>
			)}

			<div class="grid grid-cols-2 max-sm:grid-cols-1 mt-4 gap-4 place-items-center">
				{getFilteredApps().length > 0 &&
					getFilteredApps().map(app => {
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
								<p class="text-center text-pretty mb-2">
									{renderApps.available}:
								</p>
								<div
									class={`
                    grid grid-cols-${osArray.length === 1 ? 1 : 3}
                    gap-2 place-items-center
                  `}
								>
									{osArray.map(os => (
										<span class="inline-flex rounded-full p-2 text-base font-medium bg-gray-200 text-gray-800 text-pretty">
											{firstLetterToUpperCase(os)}
										</span>
									))}
								</div>
								<img
									src={logoURL}
									alt={alternativeText}
									class="mx-auto m-3 flex items-center justify-center"
									width="125"
									height="125"
									loading="lazy"
								/>
								<DownloadButton githubRepoName={githubRepoName} />
							</article>
						)
					})}
			</div>
		</div>
	)
}
