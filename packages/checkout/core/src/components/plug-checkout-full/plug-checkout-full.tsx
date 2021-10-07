import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core'
import { ICustomer } from '../../providers/BaseProvider'
import { IBoleto } from '../../providers/Boleto'
import { IPix } from '../../providers/Pix'
import { PlugPaymentsCreditInstallmentsConfig } from '../plug-payments-credit/plug-payments-credit.types'
import {
  PaymentMethods,
  PlugPaymentsChargeError,
  PlugPaymentsChargeSuccess,
} from '../plug-payments/plug-payments.types'

@Component({
  tag: 'plug-checkout-full',
  styleUrl: 'plug-checkout-full.scss',
})
export class PlugCheckoutFull {
  @Prop() paymentMethods: PaymentMethods = ['card', 'pix', 'boleto']
  @Prop() showCreditCard = false
  @Prop() brandUrl: string
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() statementDescriptor: string
  @Prop() amount: number
  @Prop() delivery?: number
  @Prop() products?: {
    name: string
    amount: number
    quantity: number
    description: string
  }[]
  @Prop() pix?: IPix
  @Prop() boleto?: IBoleto
  @Prop() installments?: PlugPaymentsCreditInstallmentsConfig
  @Prop() customer?: ICustomer
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() footerDescription?: string
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false
  @Prop() hasIdentificationSection = true

  @State() currentSection: string

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: PlugPaymentsChargeError
  }>

  private handleChangeSection = (section: string) => {
    this.currentSection = section
  }

  render() {
    return (
      <Host class={{ 'plug-checkout-full__container': true }}>
        <plug-checkout-full-header brand={this.brandUrl} />
        <plug-checkout-full-content>
          <checkout-order-summary
            slot="order"
            label="Pedido"
            amount={this.amount}
            products={this.products}
            delivery={this.delivery}
          />

          <div slot="informations" class="plug-checkout-full__informations">
            {this.hasIdentificationSection && (
              <checkout-accordion
                label="Identificação"
                isEditable={this.currentSection !== 'identification'}
                opened={this.currentSection === 'identification'}
                onExpandClick={() => this.handleChangeSection('identification')}
              >
                <plug-checkout-full-identification
                  onSubmitForm={() => this.handleChangeSection('payments')}
                />
              </checkout-accordion>
            )}

            <checkout-accordion
              label="Pagamento"
              isEditable={this.currentSection !== 'payments'}
              contentHeight={
                this.currentSection === 'payments' ? '100%' : '0px'
              }
              opened={this.currentSection === 'payments'}
              onExpandClick={() => this.handleChangeSection('payments')}
            >
              <plug-payments
                publicKey={this.publicKey}
                clientId={this.clientId}
                merchantId={this.merchantId}
                customerId={this.customerId}
                statementDescriptor={this.statementDescriptor}
                amount={this.amount}
                showCreditCard={this.showCreditCard}
                boleto={this.boleto}
                pix={this.pix}
                installments={this.installments}
                sandbox={this.sandbox}
                paymentMethods={this.paymentMethods}
                onPaymentSuccess={({ detail: { data } }) =>
                  this.paymentSuccess.emit({ data })
                }
                onPaymentFailed={({ detail: { error } }) =>
                  this.paymentFailed.emit({ error })
                }
              />
            </checkout-accordion>
          </div>
        </plug-checkout-full-content>

        {this.footerDescription && (
          <plug-checkout-full-footer description={this.footerDescription} />
        )}
      </Host>
    )
  }
}
