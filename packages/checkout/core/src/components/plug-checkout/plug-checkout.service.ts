import settings from '../../stores/settings'
import credit from '../../stores/credit'
import payment from '../../stores/payment'
import dialog from '../../stores/dialog'

import { PlugPaymentsBoletoService } from '../plug-payments-boleto/plug-payments-boleto.service'
import { PlugPaymentsCreditService } from '../plug-payments-credit/plug-payments-credit.service'
import { PlugPaymentsPixService } from '../plug-payments-pix/plug-payments-pix.service'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSessionService } from '../plug-payments-session/plug-payments-session.service'

export class PlugCheckoutService {
  readonly onPaymentSuccess: (
    data: PlugPaymentsSuccess,
  ) => CustomEvent<{ data: PlugPaymentsSuccess }>
  readonly onPaymentFailed: (
    error: PlugPaymentsError,
  ) => CustomEvent<{ error: PlugPaymentsError }>

  constructor({ onPaymentSuccess, onPaymentFailed }) {
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

    return paymentMethods[payment.selectedPaymentMethod] || paymentMethods.credit
  }

  public async handleSession(sessionId: string) {
    if (!sessionId) {
      return
    }

    const sessionService = new PlugPaymentsSessionService({
      onShowDialog: this.handleShowDialog,
    })
    return sessionService.findSession(sessionId)
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
