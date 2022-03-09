import payment from '../../stores/payment'
import settings from '../../stores/settings'

import { Pix } from '../../providers/pix'
import { PixAttributes } from '../../providers/pix'

import { Charges } from '../../services/charges'

import {
  PlugPaymentsPixChargeRequest,
  PlugPaymentsPixChargeSuccess,
  PlugPaymentsPixChargeError,
  PlugPaymentsPixPaymentSuccessCallback,
  PlugPaymentsPixPaymentFailedCallback,
  PlugPaymentsPixDialogShowCallback,
} from './plug-payments-pix.types'

export class PlugPaymentsPixService {
  readonly charge?: Charges
  readonly data?: PixAttributes
  readonly onPaymentSuccess?: PlugPaymentsPixPaymentSuccessCallback
  readonly onPaymentFailed?: PlugPaymentsPixPaymentFailedCallback
  readonly onShowDialog?: PlugPaymentsPixDialogShowCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: PlugPaymentsPixChargeRequest) {
    this.charge = new Charges({ provider: new Pix({ pix: data }) })
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  private handlePaymentSuccess(data: PlugPaymentsPixChargeSuccess) {
    payment.chargeId = data.id

    if (settings.dialogConfig.show) {
      this.onShowDialog({
        mode: 'pix',
        amount: data.amount,
        open: true,
        paymentCode: data.paymentMethod.qrCodeData,
        paymentImageUrl: data.paymentMethod.qrCodeImageUrl,
        expirationTime: data.paymentMethod.expiresIn,
      })
    }

    this.onPaymentSuccess(data)
  }

  private handlePaymentFailed(error: PlugPaymentsPixChargeError) {
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

  public async findCharge(chargeId: string) {
    try {
      const chargeResponse = await this.charge.find(chargeId)

      if (chargeResponse.hasError) {
        this.onShowDialog({
          open: true,
          mode: 'error',
          errorTitle: 'O código PIX expirou',
          errorMessage:
            'Caso já tenha feito o pagamento, aguarde o e-mail de confirmação. Se não fez o pagamento ainda, faça um novo pedido.',
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
        successMessage: 'Pagamento feito com sucesso',
      })
    } catch (error) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage:
          'Não foi possível concluir sua transação, tente novamente.',
      })

      this.handlePaymentFailed({
        type: '400',
        message: 'Pix not paid',
        errorStack: error.response.data,
      })
    }
  }
}
