import {
  Component,
  Host,
  h,
  Prop,
  Watch,
  State,
  ComponentInterface,
} from '@stencil/core'

import { getCurrentIssuer, getMaxLengthPerIssuer } from '@plug-checkout/utils'

@Component({
  tag: 'checkout-credit-card',
  styleUrl: 'checkout-credit-card.scss',
})
export class CheckoutCreditCard implements ComponentInterface {
  @Prop({ mutable: true }) cvv: string
  @Prop({ mutable: true }) expiry: string
  @Prop() focused: string
  @Prop({ mutable: true }) issuer: string
  @Prop() name: string
  @Prop({ mutable: true }) number: string
  @Prop() locale: { valid: string } = { valid: 'valido ate' }
  @Prop() placeholders: { name: string } = { name: 'Nome Completo' }

  @State() options: { issuer: string; maxLength: number } = {
    issuer: 'unknow',
    maxLength: 19,
  }

  @Watch('cvv')
  protected handleWatchCvv() {
    this.cvv = this.cvv.trim() || 'CVV'
  }

  @Watch('number')
  protected handleWatchFillNumber() {
    const numberWhiteSpaces = this.issuer === 'amex' ? [4, 11] : [4, 9, 14]

    const parsedNumberStringToArray = this.number
      ? this.number.trim().split('')
      : []

    const maxLengthPerIssuer = getMaxLengthPerIssuer(this.issuer)
    const totalUnfilledCharacters =
      maxLengthPerIssuer - parsedNumberStringToArray.length
    const autoFill = Array.from({ length: totalUnfilledCharacters }).fill('•')

    const cardNumber = [...parsedNumberStringToArray, ...autoFill]
    const newCardNumber = cardNumber.reduce((accumulator, current, index) => {
      const number = numberWhiteSpaces.includes(index) ? ' ' : current

      return `${accumulator}${number}`
    }, '')

    this.number = newCardNumber as string
  }

  @Watch('number')
  protected handleWatchFillIssuerAndOptions() {
    const issuer = getCurrentIssuer(this.number)
    const maxLength = getMaxLengthPerIssuer(issuer)

    this.issuer = issuer

    this.options = {
      issuer,
      maxLength,
    }
  }

  @Watch('expiry')
  protected handleWatchExpiry() {
    const [currentMonth, currentYear] = this.expiry.split('/')

    const month = currentMonth ? currentMonth.trim() : ''
    const year = currentYear ? currentYear.trim() : ''

    const monthPossible = ['MM', `${month}M`, month]
    const yearPossible = ['AA', `${year}A`, year]

    const parsedMonth = monthPossible[month.length]
    const parsedYear = yearPossible[year.length]

    this.expiry = `${parsedMonth}/${parsedYear}`
  }

  componentWillLoad() {
    this.handleWatchFillNumber()
    this.handleWatchFillIssuerAndOptions()
    this.handleWatchExpiry()
    this.handleWatchCvv()
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
              <div class="checkout-credit-card__safe-environment">
                ambiente seguro
              </div>
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
              <div class="checkout-credit-card__safe-environment">
                ambiente seguro
              </div>
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
