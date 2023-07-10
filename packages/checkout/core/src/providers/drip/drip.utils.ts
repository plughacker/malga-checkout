import { DripAttributes } from './drip.types'

export const getBrowser = (drip: DripAttributes) => {
  if (!drip.items || !drip.items?.length) return {}

  return {
    items: drip.items,
  }
}

export const getItems = (drip: DripAttributes) => {
  if (!drip.browser) return {}

  return {
    browser: drip.browser,
  }
}
