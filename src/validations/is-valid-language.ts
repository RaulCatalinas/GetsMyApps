import type { Language } from '@/types/language'

export function isValidLanguage(language: string): language is Language {
  return language === 'es' || language === 'en'
}
