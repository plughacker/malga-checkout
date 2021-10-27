import { BaseProvider } from '../base-provider'
import { PixAttributes, PaymentMethodPix, PixConstructor } from './pix.types'

export class Pix extends BaseProvider {
  readonly pix: PixAttributes

  constructor({ customerId, customer, pix }: PixConstructor) {
    super({ customerId, customer })
    this.pix = pix
  }

  public getPaymentMethod(): PaymentMethodPix {
    return {
      paymentType: 'pix',
      expiresIn: this.pix.expiresIn,
    }
  }
}
