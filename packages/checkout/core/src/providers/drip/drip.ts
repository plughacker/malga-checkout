import { BaseProvider } from '../base-provider'
import {
  DripAttributes,
  DripConstructor,
  PaymentMethodDrip,
} from './drip.types'

import settings from '../../stores/settings'

import { getItems, getBrowser } from './drip.utils'

export class Drip extends BaseProvider {
  readonly drip: DripAttributes

  constructor({ drip }: DripConstructor) {
    super({
      customerId: settings.transactionConfig.customerId,
      customer: settings.transactionConfig.customer,
    })
    this.drip = drip
  }

  public getPaymentMethod(): PaymentMethodDrip {
    const items = getItems(this.drip)
    const browser = getBrowser(this.drip)

    return {
      paymentType: 'drip',
      ...items,
      ...browser,
    }
  }
}
