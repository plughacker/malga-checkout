import { Api } from '../api'

import { Provider, ChargeConstructor, CreateChargeData } from './charges.types'

export class Charges {
  readonly api: Api
  readonly provider: Provider

  constructor({ api, provider }: ChargeConstructor) {
    this.api = api
    this.provider = provider
  }

  public async create(data: CreateChargeData) {
    const errorStatus = ['failed', 'charged_back', 'canceled', 'voided']

    const payload = {
      ...data,
      paymentMethod: this.provider.getPaymentMethod(),
      paymentSource: this.provider.getPaymentSource(),
    }

    const response = await this.api.create({
      endpoint: '/charges',
      data: payload,
    })

    return {
      hasError: errorStatus.includes(response.data.status),
      data: response.data,
    }
  }

  public async find(chargeId: string) {
    const errorStatus = [
      'failed',
      'charged_back',
      'canceled',
      'voided',
      'pending',
    ]

    const response = await this.api.fetch({ endpoint: `/charges/${chargeId}` })

    return {
      hasError: errorStatus.includes(response.data.status),
      data: response.data,
    }
  }
}
