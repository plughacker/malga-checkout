import { Pix } from '../../providers/Pix'
import { Api } from '../../services/api'
import { Charges, ICreateChargeData } from '../../services/charges'
import { cleanObjectProperties } from '../../utils'

import { PlugPaymentsPixChargeRequest } from './plug-payments-pix.types'

export const chargeRequest = async ({
  publicKey,
  clientId,
  sandbox,
  onPaymentSuccess,
  onPaymentFailed,
  data,
}: PlugPaymentsPixChargeRequest) => {
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
      provider: new Pix({
        customer: data.customer,
        customerId: data.customerId,
        pix: data.pix,
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
