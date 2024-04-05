import log4js from 'log4js'

export function configureLogs() {
  log4js.configure({
    appenders: {
      logs: { type: 'file', filename: 'logs.log' }
    },
    categories: {
      default: { appenders: ['logs'], level: 'debug' }
    }
  })
}
