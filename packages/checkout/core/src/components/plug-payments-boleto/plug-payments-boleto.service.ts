import { Boleto } from '../../providers/boleto'
import { Charges } from '../../services/charges'

import {
  PlugPaymentsBoletoChargeRequest,
  PlugPaymentsBoletoChargeSuccess,
  PlugPaymentsBoletoChargeError,
  PlugPaymentsBoletoPaymentFailedCallback,
  PlugPaymentsBoletoPaymentSuccessCallback,
  PlugPaymentsBoletoShowDialogCallback,
} from './plug-payments-boleto.types'

import { BoletoAttributes } from '../../providers/boleto'
import settings from '../../stores/settings'

export class PlugPaymentsBoletoService {
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

  private handlePaymentSuccess(data: PlugPaymentsBoletoChargeSuccess) {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        mode: 'boleto',
        amount: data.amount,
        open: true,
        paymentCode: data.paymentMethod.barcodeData,
        paymentImageUrl: data.paymentMethod.barcodeImageUrl,
        expirationDate: data.paymentMethod.expiresDate,
      })
    }

    this.onPaymentSuccess(data)
  }

  private handlePaymentFailed(error: PlugPaymentsBoletoChargeError) {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage:
          'Não foi possível concluir sua transação, tente novamente.',
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
