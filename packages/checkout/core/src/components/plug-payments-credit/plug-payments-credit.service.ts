import settings from '../../stores/settings'
import payment from '../../stores/payment'
import { handleSubmitValidation } from '../../stores/credit'

import { Card } from '../../providers/card'

import { Charges } from '../../services/charges'
import { Customers } from '../../services/customers'
import { CustomerCards } from '../../services/customer-cards'

import {
  PlugPaymentsCreditChargeRequest,
  PlugPaymentsCreditFormValues,
  PlugPaymentsCreditPaymentFailedCallback,
  PlugPaymentsCreditPaymentSuccessCallback,
  PlugPaymentsCreditShowDialogCallback,
  PlugPaymentsCreditManualCard,
} from './plug-payments-credit.types'
import { PlugPayments } from '../../types/plug-payments.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'

export class PlugPaymentsCreditService implements PlugPayments {
  readonly charge: Charges
  readonly customer: Customers
  readonly customerCards: CustomerCards
  readonly data: PlugPaymentsCreditFormValues
  readonly onPaymentSuccess: PlugPaymentsCreditPaymentSuccessCallback
  readonly onPaymentFailed: PlugPaymentsCreditPaymentFailedCallback
  readonly onShowDialog: PlugPaymentsCreditShowDialogCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: PlugPaymentsCreditChargeRequest) {
    this.charge = new Charges({ provider: new Card({ card: data }) })
    this.customer = new Customers()
    this.customerCards = new CustomerCards()
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  handlePaymentSuccess(data: PlugPaymentsSuccess) {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        mode: 'success',
        amount: data.amount,
        open: true,
      })
    }

    this.onPaymentSuccess(data)
  }

  handlePaymentFailed(error: PlugPaymentsError) {
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

  private async handleCustomerId() {
    if (
      !settings.transactionConfig.customer &&
      !settings.transactionConfig.customerId
    ) {
      return null
    }

    if (settings.transactionConfig.customerId) {
      return settings.transactionConfig.customerId
    }

    return this.customer.create()
  }

  public async pay() {
    try {
      if (payment.selectedPaymentMethod === 'credit') {
        const formIsValid = await handleSubmitValidation()

        if (!formIsValid) return
      }

      if (payment.isSelectedSavedCard && payment.cvv.trim().length < 3) return

      const customerId = await this.handleCustomerId()
      const checkoutResponse = await this.charge.create(customerId)

      if (checkoutResponse.hasError) {
        this.handlePaymentFailed({
          type: checkoutResponse.data.status,
          message: 'Your transaction cannot be completed',
          errorStack: checkoutResponse.data,
        })

        return
      }

      if (this.data['saveCard' as keyof PlugPaymentsCreditManualCard]) {
        await this.customerCards.create(
          checkoutResponse.data.paymentSource.cardId,
          customerId,
        )
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
