import { Pix } from '../../providers/pix'
import { Api } from '../../services/api'
import { Charges, CreateChargeData } from '../../services/charges'
import { cleanObjectProperties } from '@plug-checkout/utils'

import {
  PlugPaymentsPixChargeRequest,
  PlugPaymentsPixChargeSuccess,
  PlugPaymentsPixChargeError,
  PlugPaymentsPixChargePayload,
  PlugPaymentsPixDialogState,
} from './plug-payments-pix.types'

export class PlugPaymentsPixService {
  readonly charge: Charges
  readonly data: PlugPaymentsPixChargePayload
  readonly showDialog: boolean
  readonly onPaymentSuccess: (
    data: PlugPaymentsPixChargeSuccess,
  ) => CustomEvent<{ data: unknown }>
  readonly onPaymentFailed: (
    error: PlugPaymentsPixChargeError,
  ) => CustomEvent<{ error: unknown }>
  readonly onShowDialog: (dialogData: PlugPaymentsPixDialogState) => void

  constructor({
    publicKey,
    clientId,
    sandbox,
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    showDialog,
    data,
  }: PlugPaymentsPixChargeRequest) {
    this.charge = new Charges({
      api: new Api(clientId, publicKey, sandbox),
      provider: new Pix({
        customer: data.customer,
        customerId: data.customerId,
        pix: data.pix,
      }),
    })
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
    this.showDialog = showDialog
    this.data = data
  }

  private handlePaymentSuccess(data: PlugPaymentsPixChargeSuccess) {
    if (this.showDialog) {
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
        })

        return
      }

      this.handlePaymentSuccess(checkoutResponse.data)
    } catch (error) {
      this.handlePaymentFailed({
        type: error.response.status,
        message: 'Your transaction cannot be completed',
      })
    }
  }
}
