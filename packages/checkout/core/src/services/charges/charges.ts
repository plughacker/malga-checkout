import { Api } from '../api'
import { cleanObjectProperties } from '@plug-checkout/utils'

import settings from '../../stores/settings'

import { Provider, ChargeConstructor, CreateChargeData } from './charges.types'

export class Charges {
  readonly api: Api
  readonly provider: Provider

  constructor({ provider }: ChargeConstructor) {
    this.api = new Api()
    this.provider = provider
  }

  public async create(customerId?: string) {
    const errorStatus = ['failed', 'charged_back', 'canceled', 'voided']

    const data: CreateChargeData = cleanObjectProperties({
      customerId: customerId || settings.transactionConfig.customerId,
      currency: settings.transactionConfig.currency,
      orderId: settings.transactionConfig.orderId,
      description: settings.transactionConfig.description,
      merchantId: settings.merchantId,
      amount: settings.transactionConfig.amount,
      statementDescriptor: settings.transactionConfig.statementDescriptor,
      capture: settings.transactionConfig.capture,
    })

    const payload = {
      ...data,
      paymentMethod: this.provider.getPaymentMethod(),
      paymentSource: await this.provider.getPaymentSource(),
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
