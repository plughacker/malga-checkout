import { Component, Host, h, Prop, State, Fragment } from '@stencil/core'

import { Product } from './checkout-order-summary.types'

import { formatCurrency } from '@plug-checkout/utils'
import { Locale } from '@plug-checkout/i18n/dist/utils'
import { t } from '@plug-checkout/i18n'

@Component({
  tag: 'checkout-order-summary',
  styleUrl: 'checkout-order-summary.scss',
})
export class CheckoutOrderSummary {
  @Prop() label: string
  @Prop() fullWidth = false
  @Prop() amount: number
  @Prop() currency: string
  @Prop() delivery: number
  @Prop() products?: Product[]
  @Prop() locale?: Locale
  @Prop() isLoading = false

  @State() showDescription = true

  private handleToggleShowDescription = () => {
    this.showDescription = !this.showDescription
  }

  private renderBody = () => {
    if (this.isLoading) {
      return (
        <div class={{ 'checkout-order-summary__loaders': true }}>
          <checkout-loader />
        </div>
      )
    }

    return (
      this.showDescription &&
      this.products && (
        <Fragment>
          <ul
            class={{ 'checkout-order-summary__products': true }}
            aria-hidden={this.showDescription}
          >
            {this.renderProductList()}
          </ul>
          {!!this.delivery && (
            <div class={{ 'checkout-order-summary__delivery': true }}>
              <checkout-typography
                color="darkness"
                variation="subtitle1"
                content={t('common.order.delivery', this.locale)}
              />
              <checkout-typography
                tag="span"
                variation="body1"
                content={formatCurrency(this.delivery, this.currency)}
              />
            </div>
          )}
        </Fragment>
      )
    )
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
          {!!product.description && (
            <checkout-typography
              tag="span"
              variation="body1"
              content={`- ${product.description}`}
            />
          )}
        </p>
        <checkout-typography
          tag="span"
          variation="body1"
          content={`x${product.quantity}`}
        />
        <checkout-typography
          tag="span"
          variation="body1"
          content={formatCurrency(product.amount, this.currency)}
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

        {this.renderBody()}

        {!this.isLoading && (
          <section class={{ 'checkout-order-summary__total': true }}>
            <p>{t('common.order.amount', this.locale)}</p>
            <p>{formatCurrency(this.amount, this.currency)}</p>
          </section>
        )}
      </Host>
    )
  }
}
