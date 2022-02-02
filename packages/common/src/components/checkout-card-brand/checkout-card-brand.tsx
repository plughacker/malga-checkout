import { Component, Host, Prop, h } from '@stencil/core'

import Payment from 'payment'

import VisaIcon from '../../assets/icons/visa.svg'
import MatercardIcon from '../../assets/icons/mastercard.svg'
import HipercardIcon from '../../assets/icons/hipercard.svg'
import EloIcon from '../../assets/icons/elo.svg'
import DiscoverIcon from '../../assets/icons/discover.svg'
import AmexIcon from '../../assets/icons/amex.svg'
import DinersclubIcon from '../../assets/icons/dinersclub.svg'

import { CheckoutCardBrandsObject } from './checkout-card-brand.types'

@Component({
  tag: 'checkout-card-brand',
  styleUrl: 'checkout-card-brand.scss',
})
export class CheckoutCardBrand {
  @Prop() firstCardNumbers: string | number
  @Prop() class?: string

  private getCardBrand = (): string => {
    const permittedBrands = [
      'amex',
      'dinersclub',
      'discover',
      'elo',
      'hipercard',
      'mastercard',
      'visa',
    ]

    const cardBrand = Payment.fns.cardType(this.firstCardNumbers)
    const isPermittedBrand = permittedBrands.includes(cardBrand)

    return isPermittedBrand ? cardBrand : undefined
  }

  private renderCardBrandIcon = (): string => {
    const brand = this.getCardBrand()

    if (!brand) return null

    const icons: CheckoutCardBrandsObject = {
      amex: AmexIcon,
      dinersclub: DinersclubIcon,
      discover: DiscoverIcon,
      elo: EloIcon,
      hipercard: HipercardIcon,
      mastercard: MatercardIcon,
      visa: VisaIcon,
    }

    return icons[brand]
  }

  render() {
    return (
      <Host
        class={{
          'checkout-card-brand__container': true,
          [this.class]: !!this.class,
        }}
      >
        <i innerHTML={this.renderCardBrandIcon()} />
      </Host>
    )
  }
}
