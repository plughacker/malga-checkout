import credit from '../../stores/credit'
import payment from '../../stores/payment'

const handleCreditValidations = () => {
  const validations = Object.values(credit.validations.fields)
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
