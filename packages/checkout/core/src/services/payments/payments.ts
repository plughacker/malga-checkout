import { Api } from '../api'

import settings from '../../stores/settings'
import { PaymentsConstructor, PaymentsPay, Provider } from './payments.types'
import { formatPayData } from './payments.utils'

export class Payments {
  readonly api: Api
  readonly provider: Provider

  constructor({ provider }: PaymentsConstructor) {
    this.api = new Api()
    this.provider = provider
  }

  public async pay({ headers, payload }: PaymentsPay) {
    const errorStatus = ['failed', 'charged_back', 'canceled', 'voided']
    const isSession = !!settings.sessionId

    const endpoint = isSession
      ? `/sessions/${settings.sessionId}/charge`
      : '/charges'

    const response = await this.api.create({
      endpoint,
      data: formatPayData(payload, isSession),
      headers,
    })

    return {
      hasError: errorStatus.includes(response.data.status),
      data: response.data,
    }
  }
}
