import { downloadController } from "@/controllers/download-controller"

interface Props {
	githubRepoName: string
}

export default function DownloadButton({ githubRepoName }: Props) {
	return (
		<button
			type="button"
			class="bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-90 text-black font-bold py-2 px-4 rounded w-full text-[22px]"
			onClick={async () => await downloadController(githubRepoName)}
		>
			Download
		</button>
	)
}
