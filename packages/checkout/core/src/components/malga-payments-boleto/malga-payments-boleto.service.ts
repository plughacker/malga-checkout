import { v4 as uuid } from 'uuid'

import { Boleto } from '../../providers/boleto'
import { Charges } from '../../services/charges'

import {
  MalgaPaymentsBoletoChargeRequest,
  MalgaPaymentsBoletoPaymentFailedCallback,
  MalgaPaymentsBoletoPaymentSuccessCallback,
  MalgaPaymentsBoletoShowDialogCallback,
} from './malga-payments-boleto.types'

import { BoletoAttributes } from '../../providers/boleto'
import settings from '../../stores/settings'
import { MalgaPayments } from '../../types/malga-payments.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'
import { MalgaPaymentsPaymentMethodBoleto } from '../../types/malga-payments-payment-methods.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { t } from '@malga-checkout/i18n'

export class MalgaPaymentsBoletoService implements MalgaPayments {
  readonly charge: Charges
  readonly data: BoletoAttributes
  readonly onPaymentSuccess: MalgaPaymentsBoletoPaymentSuccessCallback
  readonly onPaymentFailed: MalgaPaymentsBoletoPaymentFailedCallback
  readonly onShowDialog: MalgaPaymentsBoletoShowDialogCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: MalgaPaymentsBoletoChargeRequest) {
    this.charge = new Charges({ provider: new Boleto({ boleto: data }) })
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  handlePaymentSuccess(boletoData: MalgaPaymentsSuccess) {
    const paymentMethod =
      boletoData.paymentMethod as MalgaPaymentsPaymentMethodBoleto

    if (settings.dialogConfig.show) {
      this.onShowDialog({
        mode: 'boleto',
        amount: boletoData.amount,
        open: true,
        paymentCode: paymentMethod.barcodeData,
        paymentImageUrl: paymentMethod.barcodeImageUrl,
        expirationDate: paymentMethod.expiresDate,
      })
    }

    this.onPaymentSuccess(boletoData)
  }

  handlePaymentFailed(error: MalgaPaymentsError) {
    if (settings.automaticallyGeneratedIdempotencyKey) {
      settings.idempotencyKey = uuid()
    }

    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage: t('dialogs.boleto.errorMessage', settings.locale),
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
