import interpolate from 'interpolate'

import { path } from 'ramda'

import pt from './configs/pt/translations.json' assert { type: 'json' }
import en from './configs/en/translations.json' assert { type: 'json' }
import config from './configs/translations.json' assert { type: 'json' }

export type Locale = 'pt' | 'pt_BR' | 'en' | 'en_US' | 'en-US' | 'pt-BR'
export type Params = Record<string, string>

function getBrowserLocale() {
  const [language] = window.navigator.language.split('-')
  const languages = ['pt', 'en']
  const hasCurrentLanguage = languages.includes(language)

  return hasCurrentLanguage ? language : 'pt'
}

function getCurrentLocale(locale?: Locale) {
  if (!locale && !window) return 'pt'

  if (!locale && window) return getBrowserLocale() as Locale

  if (locale) return locale

  return 'pt'
}

function getLocale(locale?: Locale) {
  const currentLocale = getCurrentLocale(locale)
  const locales = {
    config,
    pt,
    en,
    pt_BR: pt,
    en_US: en,
    'pt-BR': pt,
    'en-US': en,
  }

  return locales[currentLocale]
}

export function getTranslationValue(
  key: string,
  locale: Locale,
  params?: Params,
) {
  const currentLocale = getLocale(locale)
  const parsedKeys = key.split('.')
  const translationValue = path(parsedKeys, currentLocale)

  return !params
    ? translationValue
    : interpolate(translationValue, params)
}
