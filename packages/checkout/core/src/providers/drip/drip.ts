import { BaseProvider } from '../base-provider'
import {
  DripAttributes,
  DripConstructor,
  PaymentMethodDrip,
} from './drip.types'

import settings from '../../stores/settings'

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
    return {
      paymentType: 'drip',
      param: this.drip.param,
    }
  }
}
