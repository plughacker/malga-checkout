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
  PlugCheckoutFullPaymentMethods,
  PlugCheckoutFullPage,
  PlugCheckoutFullTransaction,
  PlugCheckoutFullDialog,
  PlugCheckoutFullChargeError,
  PlugCheckoutFullChargeSuccess,
  Customer,
  PlugCheckoutFullCustomization,
  PlugCheckoutFullSessionNormalized,
} from './plug-checkout-full.types'

import { PlugCheckoutFullIdentificationFormValues } from './partials/plug-checkout-full-identification/plug-checkout-full-identification.types'

import {
  formatCustomer,
  formatFraudAnalysis,
  formatFraudAnalysisWithCustomerId,
  formatPaymentSession,
  formatSuccess,
  formatProducts,
} from './plug-checkout-full.utils'

@Component({
  tag: 'plug-checkout-full',
  styleUrl: 'plug-checkout-full.scss',
})
export class PlugCheckoutFull implements ComponentInterface {
  @Prop() clientId?: string
  @Prop() publicKey?: string
  @Prop() sessionId?: string
  @Prop() merchantId?: string
  @Prop() idempotencyKey?: string
  @Prop() sandbox = false
  @Prop() paymentMethods?: PlugCheckoutFullPaymentMethods = {
    pix: undefined,
    credit: undefined,
    boleto: undefined,
  }
  @Prop() pageConfig?: PlugCheckoutFullPage = {
    brandUrl: '',
    footerDescription: '',
    backRoute: '',
    delivery: 0,
    products: [],
  }
  @Prop() transactionConfig?: PlugCheckoutFullTransaction = {
    statementDescriptor: '',
    amount: 0,
    description: '',
    orderId: '',
    customerId: '',
    currency: 'BRL',
    capture: false,
    fraudAnalysis: null,
  }
  @Prop() dialogConfig: PlugCheckoutFullDialog = {
    show: true,
    actionButtonLabel: 'Continuar',
    successActionButtonLabel: 'Continuar',
    errorActionButtonLabel: 'Tentar Novamente',
    successRedirectUrl: '',
  }

  @Event() transactionSuccess!: EventEmitter<{
    data: PlugCheckoutFullChargeSuccess
  }>
  @Event() transactionFailed!: EventEmitter<{
    error: PlugCheckoutFullChargeError
  }>

  @State() isLoading = true
  @State() paymentSession?: PlugCheckoutFullSessionNormalized
  @State() customization: PlugCheckoutFullCustomization
  @State() currentSection = 'identification'
  @State() customerFormFields: PlugCheckoutFullIdentificationFormValues = {
    name: '',
    email: '',
    documentCountry: '',
    documentType: '',
    identification: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
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
    paymentSession: PlugCheckoutFullSessionNormalized,
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
    currentCustomerField?: PlugCheckoutFullIdentificationFormValues,
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
      return formatFraudAnalysisWithCustomerId(products)
    }

    return formatFraudAnalysis(customer, products)
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

  componentWillLoad() {
    if (!this.sessionId) {
      this.isLoading = false
    }

    if (this.transactionConfig.customerId) {
      this.currentSection = 'payments'
    }
  }

  render() {
    const customer = formatCustomer(
      this.customerFormFields,
      this.transactionConfig.currency,
    )
    const checkoutCustomer = this.transactionConfig.customerId ? null : customer
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
          'plug-checkout-full__container': true,
          'plug-checkout-full__container--full-height':
            this.currentSection === 'identification',
        }}
      >
        <plug-checkout-full-header
          brand={this.renderBrand()}
          backRoute={this.pageConfig.backRoute}
        />

        <plug-checkout-full-content>
          <checkout-order-summary
            slot="order"
            label="Pedido"
            amount={this.handleGetAmount()}
            products={this.handleGetProducts()}
            delivery={this.pageConfig.delivery}
            currency={this.transactionConfig.currency}
            isLoading={this.isLoading}
          />

          <div slot="informations" class="plug-checkout-full__informations">
            {!this.transactionConfig.customerId && (
              <checkout-accordion
                label="Identificação"
                isEditable={this.currentSection !== 'identification'}
                opened={this.currentSection === 'identification'}
                onExpandClick={() => this.handleChangeSection('identification')}
              >
                <plug-checkout-full-identification
                  currency={this.transactionConfig.currency}
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
              label="Pagamento"
              opened={this.currentSection === 'payments' || this.isLoading}
              onExpandClick={() => this.handleChangeSection('payments')}
            >
              <Fragment>
                <span slot="accordion-header-additional-information">
                  <checkout-icon icon="lock" />
                  Seguro e encriptado
                </span>

                <plug-checkout
                  publicKey={this.publicKey}
                  clientId={this.clientId}
                  sessionId={this.sessionId}
                  merchantId={this.merchantId}
                  idempotencyKey={this.idempotencyKey}
                  sandbox={this.sandbox}
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
                      formatPaymentSession(paymentSession),
                    )
                  }}
                  isLoading={this.isLoading}
                />
              </Fragment>
            </checkout-accordion>
          </div>
        </plug-checkout-full-content>

        {this.pageConfig.footerDescription && (
          <plug-checkout-full-footer
            description={this.pageConfig.footerDescription}
          />
        )}
      </Host>
    )
  }
}
