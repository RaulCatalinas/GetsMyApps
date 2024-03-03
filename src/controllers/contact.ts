import { SOCIAL_NETWORKS } from "@/constants/social-networks"

type SocialNetworkKey = keyof typeof SOCIAL_NETWORKS

export function contactController() {
	const contactMethod = document.getElementById("contact-method")

	contactMethod?.addEventListener("change", event => {
		const socialNetworkKey = (event.target as HTMLSelectElement)
			.value as SocialNetworkKey

		const socialNetwork = SOCIAL_NETWORKS[socialNetworkKey]

		open(socialNetwork, "_blank")
	})
}
