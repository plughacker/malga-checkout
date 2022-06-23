import settings from '../../stores/settings'
import credit from '../../stores/credit'
import payment from '../../stores/payment'
import dialog from '../../stores/dialog'

import { PlugPaymentsBoletoService } from '../plug-payments-boleto/plug-payments-boleto.service'
import { PlugPaymentsCreditService } from '../plug-payments-credit/plug-payments-credit.service'
import { PlugPaymentsPixService } from '../plug-payments-pix/plug-payments-pix.service'

import {
  PlugPaymentsChargeError,
  PlugPaymentsChargeSuccess,
} from '../plug-payments/plug-payments.types'
import { PaymentSession } from '../../services/payment-session/payment-session'

export class PlugCheckoutService {
  readonly paymentSession: PaymentSession
  readonly onPaymentSuccess: (
    data: PlugPaymentsChargeSuccess,
  ) => CustomEvent<{ data: PlugPaymentsChargeSuccess }>
  readonly onPaymentFailed: (
    error: PlugPaymentsChargeError,
  ) => CustomEvent<{ error: PlugPaymentsChargeError }>

  constructor({ onPaymentSuccess, onPaymentFailed }) {
    this.paymentSession = new PaymentSession()
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
  }

  private handleCreditPaymentData = () => {
    if (payment.isSelectedSavedCard) {
      return { cardId: payment.cardId, cardCvv: payment.cvv }
    }

    return credit.form
  }

  private handlePaymentData = () => {
    const credit = this.handleCreditPaymentData()

    const paymentMethodsData = {
      pix: settings.paymentMethods.pix,
      boleto: settings.paymentMethods.boleto,
      credit,
    }

    return (
      paymentMethodsData[payment.selectedPaymentMethod] ||
      paymentMethodsData.credit
    )
  }

  private handlePaymentMethod() {
    const paymentMethods = {
      pix: PlugPaymentsPixService,
      credit: PlugPaymentsCreditService,
      boleto: PlugPaymentsBoletoService,
    }

    return (
      paymentMethods[payment.selectedPaymentMethod] || paymentMethods.credit
    )
  }

  private handleShowDialog(dialogConfigs) {
    const initialDialogConfigs = {
      pix: {
        open: false,
        mode: 'pix',
        amount: 0,
        paymentCode: '',
        paymentImageUrl: '',
        expirationDate: '',
        expirationTime: 3600,
      },
      credit: {
        open: false,
        mode: 'success',
        amount: 0,
      },
      boleto: {
        open: false,
        mode: 'boleto',
        amount: 0,
        paymentCode: '',
        paymentImageUrl: '',
        expirationDate: '',
      },
    }

    const currenInitialDialogConfigs = payment.isSelectedSavedCard
      ? initialDialogConfigs.credit
      : initialDialogConfigs[payment.selectedPaymentMethod]

    dialog.configs = {
      ...currenInitialDialogConfigs,
      ...dialogConfigs,
    }
  }

  public async getPaymentSession() {
    if (!settings.paymentSessionKey) {
      return
    }

    await new Promise(f => setTimeout(f, 3000));

    const paymentSession = await this.paymentSession.find(
      settings.paymentSessionKey,
    )

    settings.transactionConfig = {
      statementDescriptor: paymentSession.statementDescriptor,
      amount: paymentSession.amount,
      capture: paymentSession.capture,
      description: paymentSession.description,
      orderId: paymentSession.orderId,
      currency: paymentSession.currency,
    }

    settings.paymentMethods = paymentSession.paymentMethods.reduce(
      (previousPaymentMethods, currentPaymentMethods) => {
        if (currentPaymentMethods.paymentType == 'pix') {
          previousPaymentMethods.pix = {
            expiresIn: currentPaymentMethods.expiresIn,
          }
        } else if (currentPaymentMethods.paymentType == 'boleto') {
          previousPaymentMethods.boleto = {
            expiresDate: currentPaymentMethods.expiresDate,
            instructions: currentPaymentMethods.instructions,
            interest: currentPaymentMethods.interest,
            fine: currentPaymentMethods.fine,
          }
        } else {
          previousPaymentMethods.credit = {
            installments: currentPaymentMethods.installments,
          }
        }

        return previousPaymentMethods
      }, {
        pix: null,
        boleto: null,
        credit: null,
      }
    )

    return paymentSession
  }

  public async pay() {
    const PaymentMethodClass = this.handlePaymentMethod()
    const paymentMethodData = this.handlePaymentData()

    const paymentMethod = new PaymentMethodClass({
      data: paymentMethodData,
      onPaymentSuccess: this.onPaymentSuccess,
      onPaymentFailed: this.onPaymentFailed,
      onShowDialog: this.handleShowDialog,
    })

    await paymentMethod.pay()
  }
}
