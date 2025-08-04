// Third-Party libraries
import { UAParser } from 'ua-parser-js'

// Types
import type { DeviceType } from '@/types/devices'

export function getDeviceType(userAgent: string): DeviceType {
  const { getDevice } = new UAParser(userAgent)
  const { type } = getDevice()

  switch (type) {
    case 'mobile':
      return 'mobile'

    case 'tablet':
      return 'tablet'

    default:
      return 'desktop'
  }
}
