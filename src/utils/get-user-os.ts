import { OS } from "@/types/os.d"

export function getUserOS(): OS {
	if (navigator.userAgent.indexOf("Win") !== -1) return OS.Windows
	if (navigator.userAgent.indexOf("iPhone OS") !== -1) return OS.iOS
	if (navigator.userAgent.indexOf("X11") !== -1) return OS.Unix
	if (navigator.userAgent.indexOf("Android") !== -1) return OS.Android
	if (navigator.userAgent.indexOf("Linux") !== -1) return OS.Linux

	return OS.Mac
}
