import { CustomizationColors } from '../../services/sessions/sessions.types'

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
