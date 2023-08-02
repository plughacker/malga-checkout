import settings from '../../stores/settings'
import payment from '../../stores/payment'

import { Charges } from '../../services/charges'

import {
  MalgaPaymentsNuPayChargeRequest,
  MalgaPaymentsNuPayPaymentFailedCallback,
  MalgaPaymentsNuPayPaymentSuccessCallback,
  MalgaPaymentsNuPayShowDialogCallback,
} from './malga-payments-nupay.types'
import { MalgaPayments } from '../../types/malga-payments.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { t } from '@malga-checkout/i18n'
import { NuPay, NuPayAttributes } from '../../providers/nupay'
import { MalgaPaymentsTransactionsRequestsNuPay } from '../../types/malga-payments-transaction-requests.types'

export class MalgaPaymentsNuPayService implements MalgaPayments {
  readonly charge: Charges
  readonly data: NuPayAttributes
  readonly onPaymentSuccess: MalgaPaymentsNuPayPaymentSuccessCallback
  readonly onPaymentFailed: MalgaPaymentsNuPayPaymentFailedCallback
  readonly onShowDialog: MalgaPaymentsNuPayShowDialogCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: MalgaPaymentsNuPayChargeRequest) {
    this.charge = new Charges({ provider: new NuPay({ nupay: data }) })
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  handlePaymentSuccess(data: MalgaPaymentsSuccess) {
    const paymentUrl = (
      data.transactionRequests as MalgaPaymentsTransactionsRequestsNuPay[]
    )[0]?.nupay?.paymentUrl

    if (!!paymentUrl) {
      payment.paymentUrl = paymentUrl
    }

    this.onPaymentSuccess(data)
  }

  handlePaymentFailed(error: MalgaPaymentsError) {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage: t('dialogs.nupay.errorMessage', settings.locale),
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
