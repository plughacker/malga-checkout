import { Card } from '../../providers/Card'
import { Api } from '../../services/api'
import { Charges, ICreateChargeData } from '../../services/charges'
import { cleanObjectProperties } from '../../utils'

import {
  PlugPaymentsCreditChargeRequest,
  PlugPaymentsCreditChargePayload,
  PlugPaymentsCreditChargeSuccess,
  PlugPaymentsCreditChargeError,
  PlugPaymentsCreditDialogState,
} from './plug-payments-credit.types'

export class PlugPaymentsCreditService {
  readonly charge: Charges
  readonly data: PlugPaymentsCreditChargePayload
  readonly showDialog: boolean
  readonly onPaymentSuccess: (
    data: PlugPaymentsCreditChargeSuccess,
  ) => CustomEvent<{ data: unknown }>
  readonly onPaymentFailed: (
    error: PlugPaymentsCreditChargeError,
  ) => CustomEvent<{ error: unknown }>
  readonly onShowDialog: (dialogData: PlugPaymentsCreditDialogState) => void

  constructor({
    publicKey,
    clientId,
    sandbox,
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    showDialog,
    data,
  }: PlugPaymentsCreditChargeRequest) {
    this.charge = new Charges({
      api: new Api(clientId, publicKey, sandbox),
      provider: new Card({ card: data.card }),
    })
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
    this.showDialog = showDialog
    this.data = data
  }

  private handlePaymentSuccess(data: PlugPaymentsCreditChargeSuccess) {
    if (this.showDialog) {
      this.onShowDialog({
        mode: 'success',
        amount: data.amount,
        open: true,
      })
    }

    this.onPaymentSuccess(data)
  }

  private handlePaymentFailed(error: PlugPaymentsCreditChargeError) {
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
        customerId: this.data.customerId,
        currency: this.data.currency,
        orderId: this.data.orderId,
        description: this.data.description,
        merchantId: this.data.merchantId,
        amount: this.data.amount,
        statementDescriptor: this.data.statementDescriptor,
        capture: this.data.capture,
      })

      const checkoutResponse = await this.charge.create(
        payload as ICreateChargeData,
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
