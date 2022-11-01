import { Api } from '../api'
import { cleanObjectProperties } from '@plug-checkout/utils'

import settings from '../../stores/settings'

import { ChargeConstructor, CreateChargeData } from './charges.types'
import { formatFraudAnalysis } from './charges.utils'
import { Payments, Provider } from '../payments'

export class Charges {
  readonly api: Api
  readonly provider: Provider
  readonly payments: Payments

  constructor({ provider }: ChargeConstructor) {
    this.api = new Api()
    this.provider = provider
    this.payments = new Payments({ provider })
  }

  public async create(customerId?: string) {
    const fraudAnalysis = formatFraudAnalysis(
      settings.transactionConfig.fraudAnalysis,
      settings.transactionConfig.customer,
    )

    const data: CreateChargeData = cleanObjectProperties({
      customerId: customerId || settings.transactionConfig.customerId,
      currency: settings.transactionConfig.currency,
      orderId: settings.transactionConfig.orderId,
      description: settings.transactionConfig.description,
      merchantId: settings.merchantId,
      amount: settings.transactionConfig.amount,
      statementDescriptor: settings.transactionConfig.statementDescriptor,
      capture: settings.transactionConfig.capture,
      sessionId: settings.sessionId,
      fraudAnalysis,
    })

    const payload = {
      ...data,
      paymentMethod: this.provider.getPaymentMethod(),
      paymentSource: await this.provider.getPaymentSource(),
    }
    
    const headers = settings.idempotencyKey
      ? { 'X-Idempotency-Key': settings.idempotencyKey }
      : {}

    return this.payments.pay({
      headers,
      payload,
    })
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
