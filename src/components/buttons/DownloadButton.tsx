// Controllers
import { downloadController } from '@/controllers/download-controller'

// Icons
import DownloadIcon from '@/icons/buttons/DownloadIcon'

interface Props {
  githubRepoName: string
}

export default function DownloadButton(props: Props) {
  const handleClick = async () => {
    await downloadController(props.githubRepoName)
  }

  return (
    <button
      type="button"
      class="bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-90 text-black font-bold py-2 px-4 rounded w-full flex justify-center items-center"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleClick}
    >
      <DownloadIcon />
      <span class="pl-2 text-2xl text-center">Download</span>
    </button>
  )
}
