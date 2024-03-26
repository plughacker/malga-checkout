import { v4 as uuid } from 'uuid'

import settings from '../../stores/settings'
import payment from '../../stores/payment'

import { Drip, DripAttributes } from '../../providers/drip'

import { Charges } from '../../services/charges'

import {
  MalgaPaymentsDripChargeRequest,
  MalgaPaymentsDripPaymentSuccessCallback,
  MalgaPaymentsDripPaymentFailedCallback,
  MalgaPaymentsDripDialogShowCallback,
} from './malga-payments-drip.types'
import { MalgaPayments } from '../../types/malga-payments.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { t } from '@malga-checkout/i18n'
import { MalgaPaymentsPaymentMethodDrip } from '../../types/malga-payments-payment-methods.types'

export class MalgaPaymentsDripService implements MalgaPayments {
  readonly charge?: Charges
  readonly data?: DripAttributes
  readonly onPaymentSuccess?: MalgaPaymentsDripPaymentSuccessCallback
  readonly onPaymentFailed?: MalgaPaymentsDripPaymentFailedCallback
  readonly onShowDialog?: MalgaPaymentsDripDialogShowCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: MalgaPaymentsDripChargeRequest) {
    this.charge = new Charges({ provider: new Drip({ drip: data }) })
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  handlePaymentSuccess(data: MalgaPaymentsSuccess) {
    payment.paymentUrl = (
      data.paymentMethod as MalgaPaymentsPaymentMethodDrip
    ).paymentUrl
    this.onPaymentSuccess(data)
  }

  handlePaymentFailed(error: MalgaPaymentsError) {
    if (settings.automaticallyGeneratedIdempotencyKey) {
      settings.idempotencyKey = uuid()
    }

    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage: t('dialogs.drip.errorMessage', settings.locale),
      })
    }

    this.onPaymentFailed(error)
  }

  public async pay() {
    try {
      const checkoutResponse = await this.charge.create()

      if (checkoutResponse.hasError) {
        this.handlePaymentFailed({
          type: checkoutResponse.data.status,
          message: 'Your transaction cannot be completed',
          errorStack: checkoutResponse.data,
        })

        return
      }

      this.handlePaymentSuccess(checkoutResponse.data)
    } catch (error) {
      this.handlePaymentFailed({
        type: error.response.status,
        message: 'Your transaction cannot be completed',
        errorStack: error.response.data,
      })
    }
  }
}
