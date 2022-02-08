import { BaseProvider } from '../base-provider'
import {
  BoletoAttributes,
  PaymentMethodBoleto,
  BoletoConstructor,
} from './boleto.types'

import settings from '../../stores/settings'

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
      interest: {
        days: this.boleto.interest.days,
        amount: this.boleto.interest.amount,
        percentage: this.boleto.interest.percentage,
      },
      fine: {
        days: this.boleto.fine.days,
        amount: this.boleto.fine.amount,
        percentage: this.boleto.fine.percentage,
      },
    }
  }
}
