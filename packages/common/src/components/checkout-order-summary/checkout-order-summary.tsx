import { Component, Host, h, Prop, State } from '@stencil/core'

import { Product } from './checkout-order-summary.types'

@Component({
  tag: 'checkout-order-summary',
  styleUrl: 'checkout-order-summary.scss',
})
export class CheckoutOrderSummary {
  @Prop() label: string
  @Prop() fullWidth = false
  @Prop() amount: number
  @Prop() products?: Product[]

  @State() showDescription: boolean

  private handleToggleShowDescription = () => {
    this.showDescription = !this.showDescription
  }

  private renderProductList = () => {
    const mappedProducts = this.products.map((product) => (
      <li class={{ 'checkout-order-summary__product-item': true }}>
        <p>
          <checkout-typography
            tag="strong"
            variation="subtitle1"
            content={product.name}
          />{' '}
          <checkout-typography
            tag="span"
            variation="body1"
            content={`- ${product.description}`}
          />
        </p>
        <checkout-typography
          tag="span"
          variation="body1"
          content={`x${product.quantity}`}
        />
        <checkout-typography
          tag="span"
          variation="body1"
          content={product.amount.toString()}
        />
      </li>
    ))

    return mappedProducts
  }

  render() {
    return (
      <Host
        class={{
          'checkout-order-summary__container': true,
          'checkout-order-summary__container--full-width': this.fullWidth,
        }}
      >
        <header class={{ 'checkout-order-summary__header': true }}>
          <h3>{this.label}</h3>
          {this.products && (
            <button type="button" onClick={this.handleToggleShowDescription}>
              <checkout-icon icon={this.showDescription ? 'eyeSlash' : 'eye'} />
            </button>
          )}
        </header>

        {this.showDescription && this.products && (
          <ul
            class={{ 'checkout-order-summary__products': true }}
            aria-hidden={this.showDescription}
          >
            {this.renderProductList()}
          </ul>
        )}

        <section class={{ 'checkout-order-summary__total': true }}>
          <p>Total</p>
          <p>{this.amount}</p>
        </section>
      </Host>
    )
  }
}
