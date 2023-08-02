import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core'

import { CheckoutIconNames, CheckoutIconsObject } from './checkout-icon.types'

import ArrowDownIcon from '../../assets/icons/arrow-down.svg'
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import CalendarIcon from '../../assets/icons/calendar.svg'
import CheckIcon from '../../assets/icons/check.svg'
import CheckLargeIcon from '../../assets/icons/check-large.svg'
import CreditCardIcon from '../../assets/icons/credit-card.svg'
import CvvIcon from '../../assets/icons/cvv.svg'
import ClipboardIcon from '../../assets/icons/clipboard.svg'
import CloseIcon from '../../assets/icons/close.svg'
import DollarIcon from '../../assets/icons/dollar.svg'
import EditIcon from '../../assets/icons/edit.svg'
import ErrorIcon from '../../assets/icons/error.svg'
import LockIcon from '../../assets/icons/lock.svg'
import SpinnerIcon from '../../assets/icons/spinner.svg'
import UserIcon from '../../assets/icons/user.svg'
import WarningIcon from '../../assets/icons/warning.svg'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeSlashIcon from '../../assets/icons/eye-slash.svg'
import PoweredByMalga from '../../assets/icons/powered-by-malga.svg'
import PixIcon from '../../assets/icons/pix.svg'
import NewTabIcon from '../../assets/icons/new-tab.svg'
import NubankIcon from '../../assets/icons/nubank.svg'
import VisaIcon from '../../assets/icons/visa.svg'
import MatercardIcon from '../../assets/icons/mastercard.svg'
import HipercardIcon from '../../assets/icons/hipercard.svg'
import EloIcon from '../../assets/icons/elo.svg'
import DiscoverIcon from '../../assets/icons/discover.svg'
import AmexIcon from '../../assets/icons/amex.svg'
import DinersclubIcon from '../../assets/icons/dinersclub.svg'
import GlobeIcon from '../../assets/icons/globe.svg'

@Component({ tag: 'checkout-icon', styleUrl: 'checkout-icon.scss' })
export class CheckoutIcon implements ComponentInterface {
  @Prop() icon: CheckoutIconNames
  @Prop() class?: string

  private renderCurrentIcon = (): string => {
    const icons: CheckoutIconsObject = {
      arrowDown: ArrowDownIcon,
      calendar: CalendarIcon,
      check: CheckIcon,
      creditCard: CreditCardIcon,
      cvv: CvvIcon,
      close: CloseIcon,
      dollar: DollarIcon,
      lock: LockIcon,
      spinner: SpinnerIcon,
      user: UserIcon,
      warning: WarningIcon,
      poweredByMalga: PoweredByMalga,
      edit: EditIcon,
      eye: EyeIcon,
      eyeSlash: EyeSlashIcon,
      arrowLeft: ArrowLeftIcon,
      error: ErrorIcon,
      checkLarge: CheckLargeIcon,
      clipboard: ClipboardIcon,
      pix: PixIcon,
      newTab: NewTabIcon,
      amex: AmexIcon,
      dinersclub: DinersclubIcon,
      discover: DiscoverIcon,
      elo: EloIcon,
      hipercard: HipercardIcon,
      mastercard: MatercardIcon,
      visa: VisaIcon,
      globe: GlobeIcon,
      nubank: NubankIcon,
    }

    return icons[this.icon]
  }

  render() {
    return (
      <Host
        class={{ 'checkout-icon__container': true, [this.class]: !!this.class }}
      >
        <i innerHTML={this.renderCurrentIcon()} />
      </Host>
    )
  }
}
