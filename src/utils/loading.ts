// Utils
import { getDeviceType } from './devices'

// Constants
import { LOADING_EAGER_COUNT_MAP } from '@/constants/loading'

// Types
import type { LoadingStrategy } from '@/types/loading'

interface GetLoadingStrategyProps {
  userAgent: string
  index: number
}

export function getLoadingStrategy({
  userAgent,
  index
}: GetLoadingStrategyProps): LoadingStrategy {
  const deviceType = getDeviceType(userAgent)

  return index < LOADING_EAGER_COUNT_MAP[deviceType] ? 'eager' : 'lazy'
}
