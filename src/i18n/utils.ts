// JSON
import enJson from './json/en.json'
import esJson from './json/es.json'

// Validations
import { isValidLanguage } from '@/validations/is-valid-language'

// Types
import type { Language } from '@/types/language'

// Constants
import { DEFAULT_LANGUAGE, SPANISH_CODE } from '@/constants/i18n'

export function getLangFromUrl(url: URL): Language {
  const { pathname } = url

  const [, lang] = pathname.split('/')

  if (!isValidLanguage(lang)) return DEFAULT_LANGUAGE

  return lang
}

export function getJson(lang: Language) {
  if (lang === SPANISH_CODE) return esJson

  return enJson
}
