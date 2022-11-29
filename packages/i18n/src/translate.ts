import { getTranslationValue, Locale, Params } from './utils'

export function t(key: string, locale: Locale, params?: Params) {
  return getTranslationValue(key, locale, params)
}
