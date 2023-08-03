import { BaseProvider } from '../base-provider'
import {
  NuPayAttributes,
  NuPayConstructor,
  PaymentMethodNuPay,
} from './nupay.types'

import settings from '../../stores/settings'

import { normalizeTaxValue } from './nupay.utils'

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
    const taxValue = normalizeTaxValue(this.nupay)

    return {
      paymentType: 'nupay',
      delayToAutoCancel: this.nupay.delayToAutoCancel,
      orderUrl: this.nupay.orderUrl,
      ...taxValue,
    }
  }
}
