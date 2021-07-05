import { Component, Host, h, Prop, Watch, State } from '@stencil/core'
import Payment from 'payment'

@Component({
  tag: 'checkout-credit-card',
  styleUrl: 'checkout-credit-card.scss',
})
export class CheckoutCreditCard {
  @Prop() cvv: string
  @Prop({ mutable: true }) expiry: string
  @Prop() focused: string
  @Prop({ mutable: true }) issuer: string
  @Prop() name: string
  @Prop({ mutable: true }) number: string
  @Prop() locale: { valid: string } = { valid: 'valido ate' }
  @Prop() placeholders: { name: string } = { name: 'Nome Completo' }

  @State() options: { issuer: string; maxLength: number } = {
    issuer: 'unknow',
    maxLength: 16,
  }

  @Watch('number')
  protected handleWatchNumberAndPreview() {
    const { number, options } = this

    let maxLength = options.maxLength
    let nextNumber =
      typeof number === 'number'
        ? this.number.toString()
        : this.number.replace(/[A-Za-z]| /g, '')

    if (isNaN(parseInt(nextNumber, 10))) {
      nextNumber = ''
    }

    if (maxLength > 16) {
      maxLength = nextNumber.length <= 16 ? 16 : maxLength
    }

    if (nextNumber.length > maxLength) {
      nextNumber = nextNumber.slice(0, maxLength)
    }

    while (nextNumber.length < maxLength) {
      nextNumber += '•'
    }

    if (['amex', 'dinersclub'].includes(this.issuer)) {
      const format = [0, 4, 10]
      const limit = [4, 6, 5]
      nextNumber = `${nextNumber.substr(
        format[0],
        limit[0],
      )} ${nextNumber.substr(format[1], limit[1])} ${nextNumber.substr(
        format[2],
        limit[2],
      )}`
    } else if (nextNumber.length > 16) {
      const format = [0, 4, 8, 12]
      const limit = [4, 7]
      nextNumber = `${nextNumber.substr(
        format[0],
        limit[0],
      )} ${nextNumber.substr(format[1], limit[0])} ${nextNumber.substr(
        format[2],
        limit[0],
      )} ${nextNumber.substr(format[3], limit[1])}`
    } else {
      for (let i = 1; i < maxLength / 4; i++) {
        const spaceIndex = i * 4 + (i - 1)
        nextNumber = `${nextNumber.slice(0, spaceIndex)} ${nextNumber.slice(
          spaceIndex,
        )}`
      }
    }

    this.number = nextNumber
  }

  @Watch('expiry')
  protected handleWatchExpiry() {
    const { expiry = '' } = this
    const date = expiry
    let month = ''
    let year = ''

    if (date.includes('/')) {
      month = date.split('/')[0]
      year = date.split('/')[1]
    } else if (date.length) {
      month = date.substr(0, 2)
      year = date.substr(2, 6)
    }

    while (month.length < 2) {
      month += '•'
    }

    if (year.length > 2) {
      year = year.substr(2, 4)
    }

    while (year.length < 2) {
      year += '•'
    }

    this.expiry = `${month}/${year}`
  }

  @Watch('number')
  protected handleWatchNumber() {
    const { number } = this
    const issuer = Payment.fns.cardType(number) || 'unknown'

    const maxLengthPerIssuer = {
      amex: 15,
      dinersclub: 14,
      hipercard: 19,
      mastercard: 19,
      visa: 19,
    }

    const maxLength = maxLengthPerIssuer[issuer] || 16

    this.options = {
      issuer,
      maxLength,
    }

    this.issuer = issuer
  }

  render() {
    const { cvv, focused, locale, name, placeholders, number, expiry, issuer } =
      this

    return (
      <Host>
        <div class="checkout-credit-card">
          <div
            class={{
              'checkout-credit-card__card': true,
              [`checkout-credit-card__card--${this.issuer}`]: true,
              'checkout-credit-card__card--flipped':
                focused === 'cvv' && issuer !== 'amex',
            }}
          >
            <div class="checkout-credit-card__card--front">
              <div class="checkout-credit-card__card__background" />
              <div class="checkout-credit-card__issuer" />
              <div
                class={{
                  'checkout-credit-card__cvv__front': true,
                  'checkout-credit-card--focused': focused === 'cvv',
                }}
              >
                {cvv}
              </div>
              <div
                class={{
                  'checkout-credit-card__number': true,
                  'checkout-credit-card__number--large':
                    number.replace(/ /g, '').length > 16,
                  'checkout-credit-card--focused': focused === 'number',
                  'checkout-credit-card--filled': number.substr(0, 1) !== '•',
                }}
              >
                {number}
              </div>
              <div
                class={{
                  'checkout-credit-card__name': true,
                  'checkout-credit-card--focused': focused === 'name',
                  'checkout-credit-card--filled': !!name,
                }}
              >
                {name || placeholders.name}
              </div>
              <div
                class={{
                  'checkout-credit-card__expiry': true,
                  'checkout-credit-card--focused': focused === 'expiry',
                  'checkout-credit-card--filled': expiry.substr(0, 1) !== '•',
                }}
              >
                <div class="checkout-credit-card__expiry__valid">
                  {locale.valid}
                </div>
                <div class="checkout-credit-card__expiry__value">{expiry}</div>
              </div>
              <div class="checkout-credit-card__chip" />
            </div>
            <div class="checkout-credit-card__card--back">
              <div class="checkout-credit-card__card__background" />
              <div class="checkout-credit-card__stripe" />
              <div class="checkout-credit-card__signature" />
              <div
                class={{
                  'checkout-credit-card__cvv': true,
                  'checkout-credit-card--focused': focused === 'cvv',
                }}
              >
                {cvv}
              </div>
              <div class="checkout-credit-card__issuer" />
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
