import settings from '../../stores/settings'
import credit from '../../stores/credit'
import payment from '../../stores/payment'
import dialog from '../../stores/dialog'

import { MalgaPaymentsBoletoService } from '../malga-payments-boleto/malga-payments-boleto.service'
import { MalgaPaymentsCreditService } from '../malga-payments-credit/malga-payments-credit.service'
import { MalgaPaymentsPixService } from '../malga-payments-pix/malga-payments-pix.service'
import { MalgaPaymentsDripService } from '../malga-payments-drip/malga-payments-drip.service'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { MalgaPaymentsSessionService } from '../malga-payments-session/malga-payments-session.service'
import { Customers } from '../../services/customers'
import { MalgaPaymentsNuPayService } from '../malga-payments-nupay/malga-payments-nupay.service'

export class MalgaCheckoutService {
  readonly onPaymentSuccess: (
    data: MalgaPaymentsSuccess,
  ) => CustomEvent<{ data: MalgaPaymentsSuccess }>
  readonly onPaymentFailed: (
    error: MalgaPaymentsError,
  ) => CustomEvent<{ error: MalgaPaymentsError }>

  constructor({ onPaymentSuccess, onPaymentFailed }) {
    this.onPaymentSuccess = onPaymentSuccess
    this.onPaymentFailed = onPaymentFailed
  }

  private handleCreditPaymentData = () => {
    const isShowingInstallmentSelector =
      settings.paymentMethods.credit.installments.show

    if (payment.isSelectedSavedCard) {
      const installments = isShowingInstallmentSelector
        ? payment.installments
        : settings.paymentMethods.credit.installments.quantity

      return {
        cardId: payment.cardId,
        cardCvv: payment.cvv,
        installments,
      }
    }

    const installments = isShowingInstallmentSelector
      ? credit.form.installments
      : settings.paymentMethods.credit.installments.quantity

    return {
      ...credit.form,
      installments,
    }
  }

  private handlePaymentData = () => {
    const credit = this.handleCreditPaymentData()

    const paymentMethodsData = {
      nupay: settings.paymentMethods.nupay,
      drip: settings.paymentMethods.drip,
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
      drip: MalgaPaymentsDripService,
      pix: MalgaPaymentsPixService,
      credit: MalgaPaymentsCreditService,
      boleto: MalgaPaymentsBoletoService,
      nupay: MalgaPaymentsNuPayService,
    }

    console.log(payment.selectedPaymentMethod)

    return (
      paymentMethods[payment.selectedPaymentMethod] || paymentMethods.credit
    )
  }

  public async handleSession(sessionId: string) {
    if (!sessionId) {
      return
    }

    const sessionService = new MalgaPaymentsSessionService({
      onShowDialog: this.handleShowDialog,
    })

    return sessionService.findSession(sessionId)
  }

  public async handleCustomerId(customerId: string) {
    if (!customerId) return

    const customerService = new Customers()
    const { data: customer } = await customerService.find(customerId)

    const hasCustomerAddress = Object.values(customer.address || {}).some(
      (value) => value,
    )

    const address = hasCustomerAddress ? customer.address : null

    settings.transactionConfig = {
      ...settings.transactionConfig,
      fraudAnalysis: {
        customer: {
          name: customer.name,
          email: customer.email,
          phoneNumber: customer.phoneNumber,
          document: {
            number: customer.document.number,
            type: customer.document.type,
            country: customer.document.country,
          },
          address,
        },
        ...settings.transactionConfig.fraudAnalysis,
      },
    }
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
      drip: {
        open: false,
        mode: 'success',
        amount: 0,
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
      nupay: {
        open: false,
        mode: 'success',
        amount: 0,
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
    console.log('inferno')

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
