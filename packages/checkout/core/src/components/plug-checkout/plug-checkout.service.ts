import settings from '../../stores/settings'
import credit from '../../stores/credit'
import payment from '../../stores/payment'

import { PlugPaymentsBoletoService } from '../plug-payments-boleto/plug-payments-boleto.service'
import { PlugPaymentsCreditService } from '../plug-payments-credit/plug-payments-credit.service'
import { PlugPaymentsPixService } from '../plug-payments-pix/plug-payments-pix.service'

import {
  PlugPaymentsChargeError,
  PlugPaymentsChargeSuccess,
} from '../plug-payments/plug-payments.types'
import dialog from '../../stores/dialog'

export class PlugCheckoutService {
  readonly onPaymentSuccess: (
    data: PlugPaymentsChargeSuccess,
  ) => CustomEvent<{ data: PlugPaymentsChargeSuccess }>
  readonly onPaymentFailed: (
    error: PlugPaymentsChargeError,
  ) => CustomEvent<{ error: PlugPaymentsChargeError }>

  constructor({ onPaymentSuccess, onPaymentFailed }) {
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
  }

  private handlePaymentData = () => {
    const commonData = {
      merchantId: settings.merchantId,
      amount: settings.transactionConfig.amount,
      statementDescriptor: settings.transactionConfig.statementDescriptor,
      capture: settings.transactionConfig.capture,
      orderId: settings.transactionConfig.orderId,
      description: settings.transactionConfig.description,
      customerId: settings.transactionConfig.customerId,
      customer: settings.transactionConfig.customer,
      currency: settings.transactionConfig.currency,
    }

    const paymentMethodsData = {
      pix: { ...commonData, pix: settings.paymentMethods.pix },
      credit: { ...commonData, card: credit.form },
      boleto: { ...commonData, boleto: settings.paymentMethods.boleto },
    }

    return paymentMethodsData[payment.selectedPaymentMethod]
  }

  private handlePaymentMethod = () => {
    const paymentMethods = {
      pix: PlugPaymentsPixService,
      credit: PlugPaymentsCreditService,
      boleto: PlugPaymentsBoletoService,
    }

    return paymentMethods[payment.selectedPaymentMethod]
  }

  private handleDialogConfigs = () => {
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

    return initialDialogConfigs[payment.selectedPaymentMethod]
  }

  private handleShowDialog(dialogConfigs) {
    const initialDialogConfigs = this.handleDialogConfigs()

    dialog.configs = { ...initialDialogConfigs, ...dialogConfigs }
  }

  public async pay() {
    const PaymentMethodClass = this.handlePaymentMethod()
    const paymentMethodData = this.handlePaymentData()

    const paymentMethod = new PaymentMethodClass({
      publicKey: settings.publicKey,
      clientId: settings.clientId,
      sandbox: settings.sandbox,
      showDialog: settings.dialogConfig.show,
      data: paymentMethodData,
      onPaymentSuccess: this.onPaymentSuccess,
      onPaymentFailed: this.onPaymentFailed,
      onShowDialog: this.handleShowDialog,
    })

    await paymentMethod.pay()
  }
}
