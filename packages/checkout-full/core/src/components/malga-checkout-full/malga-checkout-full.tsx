import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  ComponentInterface,
  Fragment,
} from '@stencil/core'

import {
  MalgaCheckoutFullPaymentMethods,
  MalgaCheckoutFullPage,
  MalgaCheckoutFullTransaction,
  MalgaCheckoutFullDialog,
  MalgaCheckoutFullChargeError,
  MalgaCheckoutFullChargeSuccess,
  Customer,
  MalgaCheckoutFullCustomization,
  MalgaCheckoutFullSessionNormalized,
} from './malga-checkout-full.types'

import { MalgaCheckoutFullIdentificationFormValues } from './partials/malga-checkout-full-identification/malga-checkout-full-identification.types'

import {
  formatCustomer,
  formatFraudAnalysis,
  formatFraudAnalysisWithCustomerId,
  formatPaymentSession,
  formatSuccess,
  formatProducts,
} from './malga-checkout-full.utils'
import { Locale } from '@malga-checkout/i18n/dist/utils'
import { getCurrentLocale } from '@malga-checkout/i18n'
import { t } from '@malga-checkout/i18n'

@Component({
  tag: 'malga-checkout-full',
  styleUrl: 'malga-checkout-full.scss',
})
export class MalgaCheckoutFull implements ComponentInterface {
  @Prop() clientId?: string
  @Prop() publicKey?: string
  @Prop() sessionId?: string
  @Prop() merchantId?: string
  @Prop() idempotencyKey?: string
  @Prop() locale?: Locale
  @Prop() sandbox = false
  @Prop() debug = false
  @Prop() paymentMethods?: MalgaCheckoutFullPaymentMethods = {
    pix: undefined,
    credit: undefined,
    boleto: undefined,
  }
  @Prop() pageConfig?: MalgaCheckoutFullPage = {
    brandUrl: '',
    footerDescription: '',
    backRoute: '',
    delivery: 0,
    products: [],
    internationalCustomer: false,
  }
  @Prop() transactionConfig?: MalgaCheckoutFullTransaction = {
    statementDescriptor: '',
    amount: 0,
    description: '',
    orderId: '',
    customerId: '',
    currency: 'BRL',
    capture: false,
    fraudAnalysis: null,
    paymentFlowMetadata: null,
  }
  @Prop() dialogConfig: MalgaCheckoutFullDialog = {
    show: true,
  }

  @Event() transactionSuccess!: EventEmitter<{
    data: MalgaCheckoutFullChargeSuccess
  }>
  @Event() transactionFailed!: EventEmitter<{
    error: MalgaCheckoutFullChargeError
  }>

  @State() isLoading = true
  @State() language: Locale = 'default'
  @State() paymentSession?: MalgaCheckoutFullSessionNormalized
  @State() customization: MalgaCheckoutFullCustomization
  @State() currentSection = 'identification'
  @State() customerFormFields: MalgaCheckoutFullIdentificationFormValues = {
    name: '',
    email: '',
    phoneNumber: '',
    documentCountry: '',
    documentType: '',
    identification: '',
    zipCode: '',
    street: '',
    streetNumber: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    country: '',
  }

  private handleChangeCustomization = (paymentSession) => {
    if (paymentSession && paymentSession.customization) {
      this.customization = paymentSession.customization
    }
  }

  private handleSetPaymentSessionData = (
    paymentSession: MalgaCheckoutFullSessionNormalized,
  ) => {
    this.paymentSession = paymentSession
    this.isLoading = false
  }

  private handleChangeSection = (section: string) => {
    this.currentSection = section
  }

  private handleSetCustomerFormValues = (field: string, value: string) => {
    this.customerFormFields = { ...this.customerFormFields, [field]: value }
  }

  private handleSetManyCustomerFormValues = (
    currentCustomerField?: MalgaCheckoutFullIdentificationFormValues,
  ) => {
    this.customerFormFields = {
      ...this.customerFormFields,
      ...currentCustomerField,
    }
  }

  private handleFraudAnalysis = (customer: Customer) => {
    const items = this.paymentSession && this.paymentSession.items
    const products = formatProducts(
      !!this.paymentSession,
      items,
      this.pageConfig.products,
    )

    if (this.transactionConfig.customerId) {
      return formatFraudAnalysisWithCustomerId(
        products,
        this.transactionConfig.fraudAnalysis?.usePartialCustomer,
      )
    }

    return formatFraudAnalysis(
      customer,
      products,
      this.transactionConfig.fraudAnalysis?.usePartialCustomer,
    )
  }

  private renderBrand = () => {
    if (this.customization && this.customization.brandUrl) {
      return this.customization.brandUrl
    }

    return this.pageConfig.brandUrl
  }

  private handleGetAmount = () => {
    if (this.paymentSession) {
      return this.paymentSession.amount
    }

    return this.transactionConfig.amount
  }

  private handleGetProducts = () => {
    if (this.paymentSession) {
      return this.paymentSession.items.map((item) => {
        return {
          name: item.name,
          amount: item.unitPrice,
          quantity: item.quantity,
          description: item.description,
        }
      })
    }

    return this.pageConfig.products
  }

  private handleChangeLanguage = (language: Locale) => {
    this.language = language
  }

  componentWillLoad() {
    if (!this.sessionId) {
      this.isLoading = false
    }

    if (this.transactionConfig.customerId) {
      this.currentSection = 'payments'
    }

    this.language = getCurrentLocale(this.locale)
  }

  render() {
    const customer = formatCustomer(
      this.customerFormFields,
      this.pageConfig.internationalCustomer,
    )
    const checkoutCustomer = this.transactionConfig.customerId ? null : customer
    const currency = this.paymentSession
      ? this.paymentSession.currency
      : this.transactionConfig.currency
    const transactionConfig = this.paymentSession
      ? this.paymentSession.transactionConfig
      : this.transactionConfig
    const paymentMethods = this.paymentSession
      ? this.paymentSession.checkoutPaymentMethods
      : this.paymentMethods

    const fraudAnalysis = this.handleFraudAnalysis(customer)

    return (
      <Host
        class={{
          'malga-checkout-full__container': true,
          'malga-checkout-full__container--full-height':
            this.currentSection === 'identification',
        }}
      >
        <malga-checkout-full-header
          locale={this.language}
          language={this.language}
          brand={this.renderBrand()}
          backRoute={this.pageConfig.backRoute}
          onChangeLanguage={({ detail: { value } }) =>
            this.handleChangeLanguage(value)
          }
        />

        <malga-checkout-full-content>
          <checkout-order-summary
            slot="order"
            locale={this.language}
            label={t('page.order', this.language)}
            amount={this.handleGetAmount()}
            products={this.handleGetProducts()}
            delivery={this.pageConfig.delivery}
            currency={currency}
            isLoading={this.isLoading}
          />

          <div slot="informations" class="malga-checkout-full__informations">
            {!this.transactionConfig.customerId && (
              <checkout-accordion
                label={t('page.identification', this.language)}
                isEditable={this.currentSection !== 'identification'}
                opened={this.currentSection === 'identification'}
                onExpandClick={() => this.handleChangeSection('identification')}
              >
                <malga-checkout-full-identification
                  locale={this.language}
                  internationalCustomer={this.pageConfig.internationalCustomer}
                  formValues={this.customerFormFields}
                  onFieldChange={({ detail }) => {
                    this.handleSetCustomerFormValues(detail.field, detail.value)
                  }}
                  onManyFieldsChange={({ detail }) => {
                    this.handleSetManyCustomerFormValues(
                      detail.customerFormValues,
                    )
                  }}
                  onSubmitForm={() => this.handleChangeSection('payments')}
                  isLoading={this.isLoading}
                />
              </checkout-accordion>
            )}

            <checkout-accordion
              label={t('page.payment', this.language)}
              opened={this.currentSection === 'payments' || this.isLoading}
              onExpandClick={() => this.handleChangeSection('payments')}
            >
              <Fragment>
                <span slot="accordion-header-additional-information">
                  <checkout-icon icon="lock" />
                  {t('page.secureAndEncrypted', this.language)}
                </span>

                <malga-checkout
                  locale={this.language}
                  publicKey={this.publicKey}
                  clientId={this.clientId}
                  sessionId={this.sessionId}
                  merchantId={this.merchantId}
                  idempotencyKey={this.idempotencyKey}
                  sandbox={this.sandbox}
                  debug={this.debug}
                  transactionConfig={{
                    ...transactionConfig,
                    customerId: this.transactionConfig.customerId,
                    customer: checkoutCustomer,
                    fraudAnalysis,
                  }}
                  paymentMethods={paymentMethods}
                  dialogConfig={this.dialogConfig}
                  onPaymentSuccess={({ detail: { data } }) =>
                    this.transactionSuccess.emit({
                      data: formatSuccess(data),
                    })
                  }
                  onPaymentFailed={({ detail: { error } }) =>
                    this.transactionFailed.emit({ error })
                  }
                  onPaymentSessionFetch={({ detail: { paymentSession } }) => {
                    this.handleChangeCustomization(paymentSession)
                    this.handleSetPaymentSessionData(
                      formatPaymentSession(
                        paymentSession,
                        this.transactionConfig,
                      ),
                    )
                  }}
                  isLoading={this.isLoading}
                />
              </Fragment>
            </checkout-accordion>
          </div>
        </malga-checkout-full-content>

        <malga-checkout-full-footer
          language={this.language}
          onChangeLanguage={({ detail: { value } }) =>
            this.handleChangeLanguage(value)
          }
          description={this.pageConfig.footerDescription}
        />
      </Host>
    )
  }
}
