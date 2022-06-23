import { Component, Host, h, Prop, State, Fragment } from '@stencil/core'

import { Product } from './checkout-order-summary.types'

import { formatToReal } from '@plug-checkout/utils'

@Component({
  tag: 'checkout-order-summary',
  styleUrl: 'checkout-order-summary.scss',
})
export class CheckoutOrderSummary {
  @Prop() label: string
  @Prop() fullWidth = false
  @Prop() amount: number
  @Prop() delivery: number
  @Prop() products?: Product[]
  @Prop() isLoading: boolean = false

  @State() showDescription = true

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
          content={formatToReal(product.amount)}
        />
      </li>
    ))

    return mappedProducts
  }

  private renderBody = () => {
    if (this.isLoading) {
      return (
        <div class={{ 'checkout-order-summary__loaders': true }}>
          <checkout-skeleton width="36px" />
          <checkout-skeleton width="78px" />
        </div>
      )
    }

    if (this.showDescription && this.products) {
      return (
        <Fragment>
          <ul
            class={{ 'checkout-order-summary__products': true }}
            aria-hidden={this.showDescription}
          >
            {this.renderProductList()}
          </ul>
          {this.delivery && (
            <div class={{ 'checkout-order-summary__delivery': true }}>
              <checkout-typography
                color="darkness"
                variation="subtitle1"
                content="Frete"
              />
              <checkout-typography
                tag="span"
                variation="body1"
                content={formatToReal(this.delivery)}
              />
            </div>
          )}
        </Fragment>
      )
    }

    return
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

        {this.renderBody()}

        {!this.isLoading && (
          <section class={{ 'checkout-order-summary__total': true }}>
            <p>Total</p>
            <p>{formatToReal(this.amount)}</p>
          </section>
        )}
      </Host>
    )
  }
}
