// Third-Party libraries
import log4js from 'log4js'

// Config
import { configureLogs } from '@/config/logs'

// Types
import type { LogLevel } from '@/types/logs'

interface Props {
  level: LogLevel
  message: unknown
}

configureLogs()

const logger = log4js.getLogger()

export function writeLog({ level, message }: Props) {
  logger.log(level, message)
}
