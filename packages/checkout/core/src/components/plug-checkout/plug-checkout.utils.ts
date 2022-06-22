import credit from '../../stores/credit'
import payment from '../../stores/payment'
import settings from '../../stores/settings'

import { CustomizationColors } from '../../services/customization'

const handleCreditValidations = () => {
  const hasInstallments = settings.paymentMethods.credit.installments.show
  const fields = { ...credit.validations.fields }

  if (!hasInstallments) delete fields.installments

  const validations = Object.values(fields)
  const untouchedFields = validations.filter((field) => field === null)
  const fieldsWithoutErrors = validations.filter((field) => !!field)

  if (!untouchedFields.length && !fieldsWithoutErrors.length) {
    return false
  }

  return true
}

const handleSavedCardValidations = () => {
  if (payment.cvv.length >= 3 && payment.cardId) {
    return false
  }

  return true
}

const handlePixValidations = () => false

const handleBoletoValidations = () => false

const handleUnselectPaymentMethodValidations = () => true

export const handleDisablePayButton = () => {
  const paymentMethodsOptions = {
    credit: handleCreditValidations,
    savedCard: handleSavedCardValidations,
    pix: handlePixValidations,
    boleto: handleBoletoValidations,
    default: handleUnselectPaymentMethodValidations,
  }

  if (payment.isSelectedSavedCard) {
    return paymentMethodsOptions.savedCard()
  }

  return paymentMethodsOptions[payment.selectedPaymentMethod || 'default']()
}

export const setThemePrimaryColors = (primaryColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--plug-checkout-color-brand-accent-light',
    primaryColors.lightest,
  )
  document.documentElement.style.setProperty(
    '--plug-checkout-color-brand-accent-normal',
    primaryColors.light,
  )

  document.documentElement.style.setProperty(
    '--plug-checkout-color-brand-clean',
    primaryColors.lightest,
  )
  document.documentElement.style.setProperty(
    '--plug-checkout-color-brand-light',
    primaryColors.light,
  )
  document.documentElement.style.setProperty(
    '--plug-checkout-color-brand-normal',
    primaryColors.medium,
  )
  document.documentElement.style.setProperty(
    '--plug-checkout-color-brand-middle',
    primaryColors.dark,
  )
  document.documentElement.style.setProperty(
    '--plug-checkout-color-brand-dark',
    primaryColors.darkest,
  )
}

export const setThemeWarningColors = (warningColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--plug-checkout-color-warning-light',
    warningColors.lightest,
  )
  document.documentElement.style.setProperty(
    '--plug-checkout-color-warning-normal',
    warningColors.light,
  )
  document.documentElement.style.setProperty(
    '--plug-checkout-color-warning-middle',
    warningColors.medium,
  )
}

export const setThemeErrorColors = (errorColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--plug-checkout-color-modal-error',
    errorColors.medium,
  )
}

export const setThemeSuccessColors = (successColors: CustomizationColors) => {
  document.documentElement.style.setProperty(
    '--plug-checkout-color-modal-success',
    successColors.medium,
  )
}

export const setThemeBackgroundColor = (backgroundColor: string) => {
  document.documentElement.style.setProperty(
    '--plug-checkout-color-page-background',
    backgroundColor,
  )
}
