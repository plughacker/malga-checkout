import { BaseProvider } from '../BaseProvider'
import { IPix, IPaymentMethodPix } from './Pix.types'

export class Pix extends BaseProvider {
  readonly pix: IPix

  constructor({ customerId, customer, pix }) {
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
