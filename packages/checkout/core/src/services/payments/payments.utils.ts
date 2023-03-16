import { CreateChargePaymentData } from './payments.types'

export function formatPayData(
  payload: CreateChargePaymentData,
  isSession = false,
) {
  if (!isSession) {
    return payload
  }

  return {
    paymentSource: payload.paymentSource,
    paymentMethod: payload.paymentMethod,
    customerId: payload.customerId,
    fraudAnalysis: payload.fraudAnalysis,
    paymentFlow: payload.paymentFlow,
  }
}
