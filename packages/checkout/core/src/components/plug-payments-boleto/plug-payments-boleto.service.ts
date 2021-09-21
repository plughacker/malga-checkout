import { Boleto } from '../../providers/Boleto'
import { Api } from '../../services/api'
import { Charges, ICreateChargeData } from '../../services/charges'
import { cleanObjectProperties } from '../../utils'

import { PlugPaymentsBoletoChargeRequest } from './plug-payments-boleto.types'

export const chargeRequest = async ({
  publicKey,
  clientId,
  sandbox,
  onPaymentSuccess,
  onPaymentFailed,
  data,
}: PlugPaymentsBoletoChargeRequest) => {
  try {
    const payload = cleanObjectProperties({
      currency: data.currency,
      orderId: data.orderId,
      description: data.description,
      merchantId: data.merchantId,
      amount: data.amount,
      statementDescriptor: data.statementDescriptor,
      capture: data.capture,
    })

    const charge = new Charges({
      api: new Api(clientId, publicKey, sandbox),
      provider: new Boleto({
        customer: data.customer,
        customerId: data.customerId,
        boleto: data.boleto,
      }),
    })

    const checkoutResponse = await charge.create(payload as ICreateChargeData)

    if (checkoutResponse.hasError) {
      onPaymentFailed({
        type: checkoutResponse.data.status,
        message: 'Your transaction cannot be completed',
      })

      return
    }

    onPaymentSuccess(checkoutResponse.data)
  } catch (error) {
    onPaymentFailed({
      type: error.data.status,
      message: 'Your transaction cannot be completed',
    })
  }
}
