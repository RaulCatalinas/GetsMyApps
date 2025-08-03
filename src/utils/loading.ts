import { DESKTOP_EAGER_COUNT, MOBILE_EAGER_COUNT } from '@/constants/loading'
import { MOBILE_REGEX } from '@/constants/regex'

interface GetLoadingStrategyProps {
  userAgent: string
  index: number
}

export function getLoadingStrategy({
  userAgent,
  index
}: GetLoadingStrategyProps) {
  const isMobile = MOBILE_REGEX.test(userAgent)

  const finalEagerCount = isMobile ? MOBILE_EAGER_COUNT : DESKTOP_EAGER_COUNT

  return index < finalEagerCount ? 'eager' : 'lazy'
}
