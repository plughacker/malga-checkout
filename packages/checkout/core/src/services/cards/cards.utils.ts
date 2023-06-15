import settings from '../../stores/settings'

export const getZeroDollar = () => {
  const cvvCheck = settings.paymentMethods.credit.cvvCheck
  const cvvCheckMerchantId = settings.paymentMethods.credit.cvvCheckMerchantId
  const merchantId = settings.merchantId

  if (cvvCheck === undefined) return {}

  return {
    cvvCheck,
    merchantId: cvvCheckMerchantId || merchantId,
  }
}
