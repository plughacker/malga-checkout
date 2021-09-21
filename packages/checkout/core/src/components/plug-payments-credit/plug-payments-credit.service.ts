import { Card } from '../../providers/Card'
import { Api } from '../../services/api'
import { Charges, ICreateChargeData } from '../../services/charges'
import { cleanObjectProperties } from '../../utils'

import { PlugPaymentsCreditOneShotRequest } from './plug-payments-credit.types'

export const chargeRequest = async ({
  publicKey,
  clientId,
  sandbox,
  onPaymentSuccess,
  onPaymentFailed,
  data,
}: PlugPaymentsCreditOneShotRequest) => {
  try {
    const payload = cleanObjectProperties({
      customerId: '',
      currency: 'BRL',
      orderId: '',
      description: '',
      merchantId: data.merchantId,
      amount: data.amount,
      statementDescriptor: data.statementDescriptor,
      capture: data.capture,
    })

    const charge = new Charges({
      api: new Api(clientId, publicKey, sandbox),
      provider: new Card({ card: data.card }),
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
    onPaymentFailed(error.response.data.error)
  }
}
