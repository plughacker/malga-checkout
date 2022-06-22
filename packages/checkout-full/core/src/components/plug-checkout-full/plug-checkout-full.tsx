import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  ComponentInterface,
} from '@stencil/core'

import {
  PlugCheckoutFullPaymentMethods,
  PlugCheckoutFullPage,
  PlugCheckoutFullTransaction,
  PlugCheckoutFullDialog,
  PlugCheckoutFullChargeError,
  PlugCheckoutFullChargeSuccess,
  PlugCheckoutFullCustomization,
} from './plug-checkout-full.types'

import { PlugCheckoutFullIdentificationFormValues } from './partials/plug-checkout-full-identification/plug-checkout-full-identification.types'

import { formatCustomer } from './plug-checkout-full.utils'

@Component({
  tag: 'plug-checkout-full',
  styleUrl: 'plug-checkout-full.scss',
})
export class PlugCheckoutFull implements ComponentInterface {
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() idempotencyKey: string
  @Prop() sandbox = false
  @Prop() paymentMethods: PlugCheckoutFullPaymentMethods = {
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
  @Prop() transactionConfig: PlugCheckoutFullTransaction = {
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

  @State() customization: PlugCheckoutFullCustomization
  @State() currentSection = 'identification'
  @State() customerFormFields: PlugCheckoutFullIdentificationFormValues = {
    name: '',
    email: '',
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

  private handleChangeCustomization = (
    customizationData: PlugCheckoutFullCustomization,
  ) => {
    this.customization = customizationData
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

  private renderBrand = () => {
    if (this.customization && this.customization.brandUrl) {
      return this.customization.brandUrl
    }

    return this.pageConfig.brandUrl
  }

  componentWillLoad() {
    if (this.transactionConfig.customerId) {
      this.currentSection = 'payments'
    }
  }

  render() {
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
            amount={this.transactionConfig.amount}
            products={this.pageConfig.products}
            delivery={this.pageConfig.delivery}
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
                />
              </checkout-accordion>
            )}

            <checkout-accordion
              label="Pagamento"
              opened={this.currentSection === 'payments'}
              onExpandClick={() => this.handleChangeSection('payments')}
            >
              {this.currentSection === 'payments' && (
                <span slot="accordion-header-additional-information">
                  <checkout-icon icon="lock" />
                  Seguro e encriptado
                </span>
              )}

              <plug-checkout
                publicKey={this.publicKey}
                clientId={this.clientId}
                merchantId={this.merchantId}
                idempotencyKey={this.idempotencyKey}
                sandbox={this.sandbox}
                transactionConfig={{
                  ...this.transactionConfig,
                  customer: formatCustomer(this.customerFormFields),
                }}
                paymentMethods={this.paymentMethods}
                dialogConfig={this.dialogConfig}
                onPaymentSuccess={({ detail: { data } }) =>
                  this.transactionSuccess.emit({ data })
                }
                onPaymentFailed={({ detail: { error } }) =>
                  this.transactionFailed.emit({ error })
                }
                onCustomizationSuccess={({ detail: { data } }) =>
                  this.handleChangeCustomization(data)
                }
              />
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
