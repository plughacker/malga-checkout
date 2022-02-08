import { BaseProvider } from '../base-provider'
import { PixAttributes, PaymentMethodPix, PixConstructor } from './pix.types'

import settings from '../../stores/settings'

export class Pix extends BaseProvider {
  readonly pix: PixAttributes

  constructor({ pix }: PixConstructor) {
    super({
      customerId: settings.transactionConfig.customerId,
      customer: settings.transactionConfig.customer,
    })
    this.pix = pix
  }

  public getPaymentMethod(): PaymentMethodPix {
    return {
      paymentType: 'pix',
      expiresIn: this.pix.expiresIn,
    }
  }
}
