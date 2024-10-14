import { DripAttributes } from './drip.types'

export const getItems = (drip: DripAttributes) => {
  if (!drip.items || !drip.items?.length) return {}

  return {
    items: drip.items,
  }
}

export const getBrowser = (drip: DripAttributes) => {
  if (!drip.browser) return {}

  return {
    browser: drip.browser,
  }
}

export const getSuccessRedirectUrl = (drip: DripAttributes) => {
  if (!drip.successRedirectUrl) return {}

  return { successRedirectUrl: drip.successRedirectUrl }
}

export const getCancelRedirectUrl = (drip: DripAttributes) => {
  if (!drip.cancelRedirectUrl) return {}

  return { cancelRedirectUrl: drip.cancelRedirectUrl }
}
