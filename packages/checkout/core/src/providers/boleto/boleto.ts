import { BaseProvider } from '../base-provider'
import {
  BoletoAttributes,
  PaymentMethodBoleto,
  BoletoConstructor,
} from './boleto.types'

import settings from '../../stores/settings'
import { normalizeBoletoFees } from './boleto.utils'

export class Boleto extends BaseProvider {
  readonly boleto: BoletoAttributes

  constructor({ boleto }: BoletoConstructor) {
    super({
      customer: settings.transactionConfig.customer,
      customerId: settings.transactionConfig.customerId,
    })
    this.boleto = boleto
  }

  public getPaymentMethod(): PaymentMethodBoleto {
    return {
      paymentType: 'boleto',
      expiresDate: this.boleto.expiresDate,
      instructions: this.boleto.instructions,
      ...normalizeBoletoFees('interest', this.boleto.interest),
      ...normalizeBoletoFees('fine', this.boleto.fine),
    }
  }
}
