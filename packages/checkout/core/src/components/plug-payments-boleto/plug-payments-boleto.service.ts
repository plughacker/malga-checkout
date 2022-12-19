import { Boleto } from '../../providers/boleto'
import { Charges } from '../../services/charges'

import {
  PlugPaymentsBoletoChargeRequest,
  PlugPaymentsBoletoPaymentFailedCallback,
  PlugPaymentsBoletoPaymentSuccessCallback,
  PlugPaymentsBoletoShowDialogCallback,
} from './plug-payments-boleto.types'

import { BoletoAttributes } from '../../providers/boleto'
import settings from '../../stores/settings'
import { PlugPayments } from '../../types/plug-payments.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'
import { PlugPaymentsPaymentMethodBoleto } from '../../types/plug-payments-payment-methods.types'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { t } from '@plug-checkout/i18n'

export class PlugPaymentsBoletoService implements PlugPayments {
  readonly charge: Charges
  readonly data: BoletoAttributes
  readonly onPaymentSuccess: PlugPaymentsBoletoPaymentSuccessCallback
  readonly onPaymentFailed: PlugPaymentsBoletoPaymentFailedCallback
  readonly onShowDialog: PlugPaymentsBoletoShowDialogCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: PlugPaymentsBoletoChargeRequest) {
    this.charge = new Charges({ provider: new Boleto({ boleto: data }) })
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  handlePaymentSuccess(boletoData: PlugPaymentsSuccess) {
    const paymentMethod =
      boletoData.paymentMethod as PlugPaymentsPaymentMethodBoleto

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

  handlePaymentFailed(error: PlugPaymentsError) {
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
