interface Props {
  logoURL: string
  alternativeText: string
}

export default function RenderAppLogo(props: Props) {
  return (
    <img
      src={props.logoURL}
      alt={props.alternativeText}
      class="mx-auto m-3 flex items-center justify-center"
      width="125"
      height="125"
      decoding="async"
    />
  )
}
