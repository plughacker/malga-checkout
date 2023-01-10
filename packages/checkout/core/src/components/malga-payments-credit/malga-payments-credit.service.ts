import settings from '../../stores/settings'
import payment from '../../stores/payment'
import { handleSubmitValidation } from '../../stores/credit'

import { Card } from '../../providers/card'

import { Charges } from '../../services/charges'
import { Customers } from '../../services/customers'
import { CustomerCards } from '../../services/customer-cards'

import {
  MalgaPaymentsCreditChargeRequest,
  MalgaPaymentsCreditFormValues,
  MalgaPaymentsCreditPaymentFailedCallback,
  MalgaPaymentsCreditPaymentSuccessCallback,
  MalgaPaymentsCreditShowDialogCallback,
  MalgaPaymentsCreditManualCard,
} from './malga-payments-credit.types'
import { MalgaPayments } from '../../types/malga-payments.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { t } from '@malga-checkout/i18n'

export class MalgaPaymentsCreditService implements MalgaPayments {
  readonly charge: Charges
  readonly customer: Customers
  readonly customerCards: CustomerCards
  readonly data: MalgaPaymentsCreditFormValues
  readonly onPaymentSuccess: MalgaPaymentsCreditPaymentSuccessCallback
  readonly onPaymentFailed: MalgaPaymentsCreditPaymentFailedCallback
  readonly onShowDialog: MalgaPaymentsCreditShowDialogCallback

  constructor({
    onPaymentSuccess,
    onPaymentFailed,
    onShowDialog,
    data,
  }: MalgaPaymentsCreditChargeRequest) {
    this.charge = new Charges({ provider: new Card({ card: data }) })
    this.customer = new Customers()
    this.customerCards = new CustomerCards()
    this.data = data
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
    this.onShowDialog = onShowDialog
  }

  handlePaymentSuccess(data: MalgaPaymentsSuccess) {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        mode: 'success',
        amount: data.amount,
        open: true,
      })
    }

    this.onPaymentSuccess(data)
  }

  handlePaymentFailed(error: MalgaPaymentsError) {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage: t('dialogs.card.errorMessage', settings.locale),
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

      if (
        payment.isSelectedSavedCard &&
        payment.cvv.trim().length < 3 &&
        (!payment.installments || payment.installments === 'none')
      ) {
        return
      }

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

      if (this.data['saveCard' as keyof MalgaPaymentsCreditManualCard]) {
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
