// Utils
import { getDeviceType } from './devices'

// Constants
import { LOADING_EAGER_COUNT_MAP } from '@/constants/loading'

// Types
import type { LoadingStrategy } from '@/types/loading'

interface GetLoadingStrategyProps {
  userAgent: string
  index: number
  hasSpecialIcons?: boolean
}

export function getLoadingStrategy({
  userAgent,
  index,
  hasSpecialIcons
}: GetLoadingStrategyProps): LoadingStrategy {
  const deviceType = getDeviceType(userAgent)

  if (hasSpecialIcons && deviceType !== 'mobile') {
    return index < LOADING_EAGER_COUNT_MAP.desktop ? 'eager' : 'lazy'
  }

  return index < LOADING_EAGER_COUNT_MAP[deviceType] ? 'eager' : 'lazy'
}
