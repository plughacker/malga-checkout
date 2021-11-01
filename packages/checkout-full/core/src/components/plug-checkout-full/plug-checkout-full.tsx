import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core'

import {
  PlugCheckoutFullPaymentMethods,
  PlugCheckoutFullPage,
  PlugCheckoutFullTransaction,
  PlugCheckoutFullDialog,
  PlugCheckoutFullChargeError,
  PlugCheckoutFullChargeSuccess,
} from './plug-checkout-full.types'

import { PlugCheckoutFullIdentificationFormValues } from './partials/plug-checkout-full-identification/plug-checkout-full-identification.types'

@Component({
  tag: 'plug-checkout-full',
  styleUrl: 'plug-checkout-full.scss',
})
export class PlugCheckoutFull {
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() sandbox = false
  @Prop() paymentMethods: PlugCheckoutFullPaymentMethods = {
    pix: undefined,
    credit: undefined,
    boleto: undefined
  }
  @Prop() pageConfig: PlugCheckoutFullPage = {
    brandUrl: '',
    footerDescription: '',
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
  }
  @Prop() dialogConfig: PlugCheckoutFullDialog = {
    show: true,
    actionButtonLabel: 'Continuar',
    successActionButtonLabel: 'Continuar',
    errorActionButtonLabel: 'Tentar Novamente',
  }

  @Event() checkoutSuccess!: EventEmitter<{
    data: PlugCheckoutFullChargeSuccess
  }>
  @Event() checkoutFailed!: EventEmitter<{
    error: PlugCheckoutFullChargeError
  }>

  @State() currentSection: string
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

  render() {
    return (
      <Host
        class={{
          'plug-checkout-full__container': true,
          'plug-checkout-full__container--full-height':
            this.currentSection === 'identification',
        }}
      >
        <plug-checkout-full-header brand={this.pageConfig.brandUrl} />

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
              isEditable={this.currentSection !== 'payments'}
              opened={this.currentSection === 'payments'}
              onExpandClick={() => this.handleChangeSection('payments')}
            >
              <span slot="accordion-header-additional-information">
                <checkout-icon icon="lock" />
                Seguro e encriptado
              </span>

              <plug-checkout
                publicKey={this.publicKey}
                clientId={this.clientId}
                merchantId={this.merchantId}
                sandbox={this.sandbox}
                transactionConfig={{ ...this.transactionConfig, customer: this.customerFormFields }}
                paymentMethods={this.paymentMethods}
                dialogConfig={this.dialogConfig}
                onPaymentSuccess={({ detail: { data } }) =>
                  this.checkoutSuccess.emit({ data })
                }
                onPaymentFailed={({ detail: { error } }) =>
                  this.checkoutFailed.emit({ error })
                }
              />
            </checkout-accordion>
          </div>
        </plug-checkout-full-content>

        {this.pageConfig.footerDescription && (
          <plug-checkout-full-footer description={this.pageConfig.footerDescription} />
        )}
      </Host>
    )
  }
}
