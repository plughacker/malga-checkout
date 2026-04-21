import { CustomizationColors } from '../../services/sessions/sessions.types'
import {
  Credit,
  MalgaCheckoutPaymentMethods,
} from '../malga-checkout/malga-checkout.types'

export const mergePaymentMethods = (
  sdkMethods: MalgaCheckoutPaymentMethods,
  sessionMethods: MalgaCheckoutPaymentMethods,
): MalgaCheckoutPaymentMethods => {
  const merged = { ...sessionMethods }

  if (sdkMethods?.credit && merged.credit) {
    const sdkCredit = { ...sdkMethods.credit }
    const defined: Partial<Credit> = {}

    for (const key in sdkCredit) {
      if (sdkCredit[key] !== undefined) {
        defined[key] = sdkCredit[key]
      }
    }

    merged.credit = { ...merged.credit, ...defined }
  } else if (sdkMethods?.credit) {
    merged.credit = sdkMethods.credit
  }

  return merged
}

export const setThemePrimaryColors = (primaryColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--malga-checkout-color-brand-accent-light',
    primaryColors.lightest,
  )
  document.documentElement.style.setProperty(
    '--malga-checkout-color-brand-accent-normal',
    primaryColors.light,
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-brand-clean',
    primaryColors.lightest,
  )
  document.documentElement.style.setProperty(
    '--malga-checkout-color-brand-light',
    primaryColors.light,
  )
  document.documentElement.style.setProperty(
    '--malga-checkout-color-brand-normal',
    primaryColors.medium,
  )
  document.documentElement.style.setProperty(
    '--malga-checkout-color-brand-middle',
    primaryColors.dark,
  )
  document.documentElement.style.setProperty(
    '--malga-checkout-color-brand-dark',
    primaryColors.darkest,
  )
}

export const setThemeWarningColors = (warningColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--malga-checkout-color-warning-light',
    warningColors.lightest,
  )
  document.documentElement.style.setProperty(
    '--malga-checkout-color-warning-normal',
    warningColors.light,
  )
  document.documentElement.style.setProperty(
    '--malga-checkout-color-warning-middle',
    warningColors.medium,
  )
}

export const setThemeErrorColors = (errorColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-error',
    errorColors.medium,
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-action-button-success',
    '#FFF',
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-action-button-success-hover',
    '#FFF',
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-action-button-success-font-color',
    errorColors.medium,
  )
}

export const setThemeSuccessColors = (successColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-success',
    successColors.medium,
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-neutral',
    successColors.medium,
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-action-button-success',
    '#FFF',
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-action-button-success-hover',
    '#FFF',
  )

  document.documentElement.style.setProperty(
    '--malga-checkout-color-modal-action-button-success-font-color',
    successColors.medium,
  )
}

export const setThemeBackgroundColor = (backgroundColor: string) => {
  document.documentElement.style.setProperty(
    '--malga-checkout-color-page-background',
    backgroundColor,
  )
}
