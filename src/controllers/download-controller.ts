// Notifications
import { notify } from "@/notifications/notify"

// Utils
import { getDownloadUrl } from "@/utils/get-download-url"

export async function downloadController(githubRepoName: string) {
	let downloadUrl: string

	try {
		downloadUrl = await getDownloadUrl(githubRepoName)
	} catch (error) {
		return notify({
			text: "Sorry, the file you wish to download isn't available for your OS.",
			type: "error"
		})
	}

	const aElement = document.createElement("a")

	aElement.href = downloadUrl
	aElement.style.display = "none"
	aElement.click()

	if (aElement == null) return

	document.removeChild(aElement)
}
