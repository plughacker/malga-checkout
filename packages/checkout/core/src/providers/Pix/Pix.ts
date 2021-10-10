import { BaseProvider } from '../base-provider'
import { IPix, IPaymentMethodPix, PixConstructor } from './Pix.types'

export class Pix extends BaseProvider {
  readonly pix: IPix

  constructor({ customerId, customer, pix }: PixConstructor) {
    super({ customerId, customer })
    this.pix = pix
  }

  public getPaymentMethod(): IPaymentMethodPix {
    return {
      paymentType: 'pix',
      expiresIn: this.pix.expiresIn,
    }
  }
}
