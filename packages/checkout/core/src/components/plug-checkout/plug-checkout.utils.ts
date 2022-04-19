import credit from '../../stores/credit'
import payment from '../../stores/payment'
import settings from '../../stores/settings'

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
