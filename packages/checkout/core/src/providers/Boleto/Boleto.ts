import { BaseProvider } from '../BaseProvider'
import { IBoleto, IPaymentMethodBoleto } from './Boleto.types'

export class Boleto extends BaseProvider {
  readonly boleto: IBoleto

  constructor({ customer, customerId, boleto }) {
    super({ customer, customerId })
    this.boleto = boleto
  }

  public getPaymentMethod(): IPaymentMethodBoleto {
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
