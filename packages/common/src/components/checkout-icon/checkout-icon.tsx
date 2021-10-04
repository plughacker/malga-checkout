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
import DollarIcon from '../../assets/icons/dollar.svg'
import EditIcon from '../../assets/icons/edit.svg'
import ErrorIcon from '../../assets/icons/error.svg'
import LockIcon from '../../assets/icons/lock.svg'
import SpinnerIcon from '../../assets/icons/spinner.svg'
import UserIcon from '../../assets/icons/user.svg'
import WarningIcon from '../../assets/icons/warning.svg'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeSlashIcon from '../../assets/icons/eye-slash.svg'
import PoweredByPlug from '../../assets/icons/powered-by-plug.svg'

@Component({ tag: 'checkout-icon' })
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
      dollar: DollarIcon,
      lock: LockIcon,
      spinner: SpinnerIcon,
      user: UserIcon,
      warning: WarningIcon,
      poweredByPlug: PoweredByPlug,
      edit: EditIcon,
      eye: EyeIcon,
      eyeSlash: EyeSlashIcon,
      arrowLeft: ArrowLeftIcon,
      error: ErrorIcon,
      checkLarge: CheckLargeIcon,
      clipboard: ClipboardIcon,
    }

    return icons[this.icon]
  }

  render() {
    return (
      <Host class={{ [this.class]: !!this.class }}>
        <i innerHTML={this.renderCurrentIcon()} />
      </Host>
    )
  }
}
