import { Component, Host, h, Prop } from '@stencil/core'

import { PlugIconNames, PlugIconsObject } from './plug-icon.types'

import CalendarIcon from '../../assets/icons/calendar.svg'
import CheckIcon from '../../assets/icons/check.svg'
import CreditCardIcon from '../../assets/icons/credit-card.svg'
import CvvIcon from '../../assets/icons/cvv.svg'
import DollarIcon from '../../assets/icons/dollar.svg'
import LockIcon from '../../assets/icons/lock.svg'
import SpinnerIcon from '../../assets/icons/spinner.svg'
import UserIcon from '../../assets/icons/user.svg'
import WarningIcon from '../../assets/icons/warning.svg'

@Component({ tag: 'plug-icon' })
export class PlugIcon {
  @Prop() icon: PlugIconNames
  @Prop() class?: string

  private renderCurrentIcon = (): string => {
    const icons: PlugIconsObject = {
      calendar: CalendarIcon,
      check: CheckIcon,
      creditCard: CreditCardIcon,
      cvv: CvvIcon,
      dollar: DollarIcon,
      lock: LockIcon,
      spinner: SpinnerIcon,
      user: UserIcon,
      warning: WarningIcon,
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
