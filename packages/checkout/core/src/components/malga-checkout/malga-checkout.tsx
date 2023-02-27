import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Fragment,
  Watch,
} from '@stencil/core'

import {
  clearEmptyObjectProperties,
  clearedObjectProperties,
} from '@malga-checkout/utils'

import { t } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'

import settings from '../../stores/settings'
import payment from '../../stores/payment'

import {
  PaymentMethods,
  PaymentMethodsType,
} from '../malga-payments/malga-payments.types'

import { MalgaCheckoutService } from './malga-checkout.service'

import {
  MalgaCheckoutPaymentMethods,
  MalgaCheckoutTransaction,
  MalgaCheckoutDialog,
} from './malga-checkout.types'

import { handleDisablePayButton } from './malga-checkout.utils'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { SessionNormalized } from '../../services/sessions/sessions.types'
@Component({
  tag: 'malga-checkout',
  styleUrl: 'malga-checkout.scss',
})
export class MalgaCheckout {
  @Prop() clientId?: string
  @Prop() publicKey: string
  @Prop() sessionId?: string
  @Prop() idempotencyKey?: string
  @Prop() merchantId?: string
  @Prop() sandbox = false
  @Prop() debug = false
  @Prop() locale?: Locale
  @Prop() dialogConfig?: MalgaCheckoutDialog = {
    show: true,
  }
  @Prop() paymentMethods?: MalgaCheckoutPaymentMethods = {
    pix: undefined,
    credit: undefined,
    boleto: undefined,
  }
  @Prop() transactionConfig?: MalgaCheckoutTransaction = {
    statementDescriptor: '',
    amount: 0,
    description: '',
    orderId: '',
    customerId: '',
    currency: 'BRL',
    capture: false,
    customer: null,
    fraudAnalysis: null,
  }
  @Prop() isLoading = false

  @Event() paymentSessionFetch?: EventEmitter<{
    paymentSession: SessionNormalized
  }>

  @Event() paymentSuccess!: EventEmitter<{
    data: MalgaPaymentsSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: MalgaPaymentsError
  }>

  @State() isInternallyLoading = true

  @State() isButtonLoading = false

  @Watch('transactionConfig')
  protected handleWatchTransactionConfig() {
    settings.transactionConfig = this.transactionConfig
  }

  @Watch('locale')
  protected handleWatchLocale() {
    settings.locale = this.locale
  }

  protected MalgaCheckoutService: MalgaCheckoutService

  constructor() {
    this.MalgaCheckoutService = new MalgaCheckoutService({
      onPaymentSuccess: (data) => this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error) => this.paymentFailed.emit({ error }),
    })
  }

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const paymentMethods = Object.keys(settings.paymentMethods)

    const showPaymentMethod = paymentMethods.includes(paymentMethod)

    return paymentMethods.length === 1 && showPaymentMethod
  }

  private handlePay = async () => {
    try {
      this.isButtonLoading = true
      await this.MalgaCheckoutService.pay()

      this.isButtonLoading = false
    } catch (err) {
      console.log(err)
      this.isButtonLoading = false
    }
  }

  private handleStoreSettings = () => {
    settings.clientId = this.clientId
    settings.publicKey = this.publicKey
    settings.sessionId = this.sessionId
    settings.merchantId = this.merchantId
    settings.idempotencyKey = this.idempotencyKey
    settings.locale = this.locale
    settings.sandbox = this.sandbox
    settings.debug = this.debug
    settings.dialogConfig = this.dialogConfig
    settings.paymentMethods = this.paymentMethods
    settings.transactionConfig = this.transactionConfig
  }

  private handleStoreCurrentPaymentMethod = () => {
    const paymentMethods = clearEmptyObjectProperties(settings.paymentMethods)

    if (paymentMethods.length === 1) {
      const [[currentPaymentMethod]] = paymentMethods
      payment.selectedPaymentMethod = currentPaymentMethod
    }
  }

  private async handleSession() {
    const paymentSession = await this.MalgaCheckoutService.handleSession(
      this.sessionId,
    )
    this.paymentSessionFetch.emit({ paymentSession })

    this.handleStoreCurrentPaymentMethod()
    this.isInternallyLoading = false
  }

  private async handleCustomerId() {
    this.MalgaCheckoutService.handleCustomerId(
      this.transactionConfig.customerId,
    )
  }

  async componentWillLoad() {
    this.handleStoreSettings()
    await this.handleSession()
    this.handleCustomerId()
  }

  render() {
    const paymentMethods = clearedObjectProperties(settings.paymentMethods)

    if (this.isInternallyLoading || this.isLoading) {
      return (
        <div class={{ 'malga-checkout__loaders': true }}>
          <checkout-loader />
        </div>
      )
    }

    return (
      <Host class={{ 'malga-checkout__container': true }}>
        <section class={{ 'malga-checkout__content': true }}>
          {paymentMethods.length > 1 && (
            <malga-payments
              paymentMethods={paymentMethods as PaymentMethods}
              onPaymentFail={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('credit') && (
            <Fragment>
              {settings.transactionConfig.customerId && (
                <malga-payments-credit-saved-cards />
              )}
              <malga-payments-credit />
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('boleto') && <malga-payments-boleto />}

          {this.showCurrentPaymentMethod('pix') && (
            <malga-payments-pix
              onPixPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          <div class={{ 'malga-checkout__submit': true }}>
            <checkout-button
              isLoading={this.isButtonLoading}
              locale={settings.locale}
              label={t('paymentMethods.common.payButton', this.locale)}
              disabled={handleDisablePayButton()}
              onClicked={this.handlePay}
            />
            <checkout-icon icon="poweredByMalga" />
          </div>
        </section>
      </Host>
    )
  }
}
