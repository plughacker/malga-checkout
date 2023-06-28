import { BaseProvider } from '../base-provider'
import {
  NuPayAttributes,
  NuPayConstructor,
  PaymentMethodNuPay,
} from './nupay.types'

import settings from '../../stores/settings'

export class NuPay extends BaseProvider {
  readonly nupay: NuPayAttributes

  constructor({ nupay }: NuPayConstructor) {
    super({
      customerId: settings.transactionConfig.customerId,
      customer: settings.transactionConfig.customer,
    })
    this.nupay = nupay
  }

  public getPaymentMethod(): PaymentMethodNuPay {
    return {
      paymentType: 'nupay',
      param: this.nupay.param,
    }
  }
}
