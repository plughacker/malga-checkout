import { BaseProvider } from '../base-provider'
import { PixAttributes, PaymentMethodPix, PixConstructor } from './pix.types'

import settings from '../../stores/settings'
import { getItems } from './pix.utils'

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
    const items = getItems(this.pix)

    return {
      paymentType: 'pix',
      expiresIn: this.pix.expiresIn,
      ...items,
    }
  }
}
