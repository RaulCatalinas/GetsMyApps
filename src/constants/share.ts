import { getJson, getLangFromUrl } from "@/i18n/utils"

const url = new URL(location.href)
const lang = getLangFromUrl(url)
const { shareAPI } = getJson(lang)

export const SHARE_DATA: ShareData = {
	title: "EasyViewer",
	url: location.href,
	text: shareAPI.text
}
