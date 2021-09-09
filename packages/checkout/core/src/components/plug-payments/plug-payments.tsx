import {
  Component,
  Host,
  h,
  ComponentInterface,
  State,
  Prop,
} from '@stencil/core'

@Component({
  tag: 'plug-payments',
  styleUrl: 'plug-payments.scss',
})
export class PlugPayments implements ComponentInterface {
  @Prop() showCreditCard = false

  @State() currentPayment: string

  private handlePaymentChange = (value: string) => {
    this.currentPayment = value
  }

  render() {
    return (
      <Host class={{ 'plug-payments__container': true }}>
        <section class={{ 'plug-payments__content': true }}>
          <checkout-radio-field
            fullWidth
            label="Boleto"
            value="boleto"
            isChecked={this.currentPayment === 'boleto'}
            onClicked={() => this.handlePaymentChange('boleto')}
          />
          {this.currentPayment === 'boleto' && <plug-payments-boleto />}

          <checkout-radio-field
            fullWidth
            label="PIX"
            value="pix"
            isChecked={this.currentPayment === 'pix'}
            onClicked={() => this.handlePaymentChange('pix')}
          />
          {this.currentPayment === 'pix' && <plug-payments-pix />}

          <checkout-radio-field
            fullWidth
            label="Cartão de crédito"
            value="credit"
            isChecked={this.currentPayment === 'credit'}
            onClicked={() => this.handlePaymentChange('credit')}
          />
          {this.currentPayment === 'credit' && (
            <plug-checkout showCreditCard={this.showCreditCard} />
          )}
        </section>
      </Host>
    )
  }
}
