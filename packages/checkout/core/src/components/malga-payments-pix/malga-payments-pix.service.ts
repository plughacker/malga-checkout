import payment from '../../stores/payment'
import settings from '../../stores/settings'

import { Pix } from '../../providers/pix'
import { PixAttributes } from '../../providers/pix'

import { Charges } from '../../services/charges'

import {
  MalgaPaymentsPixChargeRequest,
  MalgaPaymentsPixPaymentSuccessCallback,
  MalgaPaymentsPixPaymentFailedCallback,
  MalgaPaymentsPixDialogShowCallback,
} from './malga-payments-pix.types'
import { MalgaPayments } from '../../types/malga-payments.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { MalgaPaymentsPaymentMethodPix } from '../../types/malga-payments-payment-methods.types'
import { t } from '@malga-checkout/i18n'

export class MalgaPaymentsPixService implements MalgaPayments {
  readonly charge?: Charges
  readonly data?: PixAttributes
  readonly onPaymentSuccess?: MalgaPaymentsPixPaymentSuccessCallback
  readonly onPaymentFailed?: MalgaPaymentsPixPaymentFailedCallback
  readonly onShowDialog?: MalgaPaymentsPixDialogShowCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: MalgaPaymentsPixChargeRequest) {
    this.charge = new Charges({ provider: new Pix({ pix: data }) })
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  handlePaymentSuccess(data: MalgaPaymentsSuccess) {
    payment.chargeId = data.id

    const paymentMethod = data.paymentMethod as MalgaPaymentsPaymentMethodPix

    if (settings.dialogConfig.show) {
      this.onShowDialog({
        mode: 'pix',
        amount: data.amount,
        open: true,
        paymentCode: paymentMethod.qrCodeData,
        paymentImageUrl: paymentMethod.qrCodeImageUrl,
        expirationTime: paymentMethod.expiresIn,
      })
    }

    this.onPaymentSuccess(data)
  }

  handlePaymentFailed(error: MalgaPaymentsError) {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage: t('dialogs.pix.errorMessage', settings.locale),
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

  public async findCharge(chargeId: string) {
    try {
      const chargeResponse = await this.charge.find(chargeId)

      if (chargeResponse.hasError) {
        this.onShowDialog({
          open: true,
          mode: 'error',
          errorTitle: t('dialogs.pix.errorTitleExpired', settings.locale),
          errorMessage: t('dialogs.pix.errorMessageExpired', settings.locale),
        })

        this.handlePaymentFailed({
          type: '400',
          message: 'Pix not paid',
          errorStack: chargeResponse.data,
        })

        return
      }

      this.onShowDialog({
        mode: 'success',
        open: true,
        successMessage: t('dialogs.pix.successMessage', settings.locale),
      })
    } catch (error) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage: t('dialogs.pix.errorMessage', settings.locale),
      })

      this.handlePaymentFailed({
        type: '400',
        message: 'Pix not paid',
        errorStack: error.response.data,
      })
    }
  }
}
