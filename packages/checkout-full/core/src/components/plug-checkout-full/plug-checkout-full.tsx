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
} from './plug-checkout-full.types'

import { PlugCheckoutFullIdentificationFormValues } from './partials/plug-checkout-full-identification/plug-checkout-full-identification.types'

import { formatCustomer } from './plug-checkout-full.utils'
import { PaymentSessionData } from '@plug-checkout/core/dist/types/services/payment-session/payment-session.types'

@Component({
  tag: 'plug-checkout-full',
  styleUrl: 'plug-checkout-full.scss',
})
export class PlugCheckoutFull implements ComponentInterface {
  @Prop() clientId?: string
  @Prop() publicKey?: string
  @Prop() merchantId?: string
  @Prop() idempotencyKey: string
  @Prop() paymentSessionKey?: string
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

  @State() isLoading = true

  @State() paymentSessionData?: PaymentSessionData

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

  private handleSetPaymentSessionData = (
    paymentSessionData: PaymentSessionData,
  ) => {
    console.log(paymentSessionData)
    this.paymentSessionData = paymentSessionData
    this.isLoading = false
    console.log(this.isLoading)
  }

  private handleGetAmount = () => {
    if (this.paymentSessionData) {
      return this.paymentSessionData.amount
    }

    return this.transactionConfig.amount
  }

  private handleGetProducts = () => {
    if (this.paymentSessionData) {
      return this.paymentSessionData.items.map((item) => {
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
    if (!this.paymentSessionKey) {
      this.isLoading = false
    }

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
          brand={this.pageConfig.brandUrl}
          backRoute={this.pageConfig.backRoute}
          isLoading={this.isLoading}
        />

        <plug-checkout-full-content>
          <checkout-order-summary
            slot="order"
            label="Pedido"
            amount={this.handleGetAmount()}
            products={this.handleGetProducts()}
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
                paymentSessionKey={this.paymentSessionKey}
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
                onPaymentSessionFetch={({ detail: { paymentSession } }) =>
                  this.handleSetPaymentSessionData(paymentSession)
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
