import { Boleto } from '../../providers/boleto'
import { Api } from '../../services/api'
import { Charges, CreateChargeData } from '../../services/charges'
import { cleanObjectProperties } from '@plug-checkout/utils'

import {
  PlugPaymentsBoletoChargeRequest,
  PlugPaymentsBoletoChargeSuccess,
  PlugPaymentsBoletoChargePayload,
  PlugPaymentsBoletoChargeError,
  PlugPaymentsBoletoDialogState,
} from './plug-payments-boleto.types'

export class PlugPaymentsBoletoService {
  readonly charge: Charges
  readonly data: PlugPaymentsBoletoChargePayload
  readonly showDialog: boolean
  readonly onPaymentSuccess: (
    data: PlugPaymentsBoletoChargeSuccess,
  ) => CustomEvent<{ data: unknown }>
  readonly onPaymentFailed: (
    error: PlugPaymentsBoletoChargeError,
  ) => CustomEvent<{ error: unknown }>
  readonly onShowDialog: (dialogData: PlugPaymentsBoletoDialogState) => void

  constructor({
    publicKey,
    clientId,
    sandbox,
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    showDialog,
    data,
  }: PlugPaymentsBoletoChargeRequest) {
    this.charge = new Charges({
      api: new Api(clientId, publicKey, sandbox),
      provider: new Boleto({
        customer: data.customer,
        customerId: data.customerId,
        boleto: data.boleto,
      }),
    })
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
    this.showDialog = showDialog
    this.data = data
  }

  private handlePaymentSuccess(data: PlugPaymentsBoletoChargeSuccess) {
    if (this.showDialog) {
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
    if (this.showDialog) {
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
      const payload = cleanObjectProperties({
        currency: this.data.currency,
        orderId: this.data.orderId,
        description: this.data.description,
        merchantId: this.data.merchantId,
        amount: this.data.amount,
        statementDescriptor: this.data.statementDescriptor,
        capture: this.data.capture,
      })

      const checkoutResponse = await this.charge.create(
        payload as CreateChargeData,
      )

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
