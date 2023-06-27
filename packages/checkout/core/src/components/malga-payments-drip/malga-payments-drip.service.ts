import settings from '../../stores/settings'

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
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        mode: 'success',
        amount: data.amount,
        open: true,
      })
    }

    this.onPaymentSuccess(data)
  }

  handlePaymentFailed(error: MalgaPaymentsError) {
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
