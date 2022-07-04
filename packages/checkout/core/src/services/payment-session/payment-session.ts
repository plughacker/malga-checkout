import { Api } from '../api'
import {
  PaymentSessionDataNormalized,
} from './payment-session.types'
import { normalizePaymentSession } from './payment-session.utils'

export class PaymentSession {
  readonly api: Api

  constructor() {
    this.api = new Api()
  }

  public async find(
    paymentSessionKey: string,
  ): Promise<PaymentSessionDataNormalized> {
    const response = await this.api.fetch({
      endpoint: `/sessions/${paymentSessionKey}/external`,
    })

    return normalizePaymentSession(response.data)
  }
}
