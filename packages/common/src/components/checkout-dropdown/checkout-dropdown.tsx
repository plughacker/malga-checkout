import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core'
import clickOutside from 'click-outside'
import { CheckoutIconNames } from '../checkout-icon/checkout-icon.types'

import { CheckoutDropdownOptions } from './checkout-dropdown.types'

@Component({
  tag: 'checkout-dropdown',
  styleUrl: 'checkout-dropdown.scss',
})
export class CheckoutDropdown {
  @Prop() fullWidth?: boolean = false
  @Prop() label?: string
  @Prop() endIcon?: CheckoutIconNames = 'arrowDown'
  @Prop() startIcon: CheckoutIconNames
  @Prop() value: string
  @Prop() options: CheckoutDropdownOptions[]

  @Event() changed!: EventEmitter<{ value: string }>

  @State() showOptions = false

  dropdownRef = null

  private toggleShowOptions = () => {
    this.showOptions = !this.showOptions
  }

  private handleCloseShowOptions = () => {
    this.showOptions = false
  }

  private handleSelectOption = (value: string) => {
    this.changed.emit({ value })
    this.handleCloseShowOptions()
  }

  private renderOptions = () => {
    const currentOptions = this.options
      .filter((option) => option.value !== this.value)
      .map((option) => (
        <li
          class={{
            'checkout-dropdown__list-item': true,
          }}
          onClick={() => this.handleSelectOption(option.value)}
        >
          {option.label}
        </li>
      ))

    return currentOptions
  }

  private getCurrentLabel = () => {
    if (!this.label) {
      const currentOption = this.options.find(
        (option) => option.value === this.value,
      )

      return currentOption.label
    }

    return this.label
  }

  componentDidRender() {
    if (this.dropdownRef) {
      clickOutside(this.dropdownRef, () => {
        if (this.showOptions) {
          this.showOptions = false
        }
      })
    }
  }

  render() {
    return (
      <Host
        class={{
          'checkout-dropdown__container': true,
          'checkout-dropdown__container--full-width': this.fullWidth,
        }}
      >
        <button
          ref={(el) => (this.dropdownRef = el)}
          class={{ 'checkout-dropdown__button': true }}
          onClick={this.toggleShowOptions}
        >
          <span>
            <checkout-icon icon={this.startIcon} />
            {this.getCurrentLabel()}
          </span>
          <checkout-icon icon={this.endIcon} />
        </button>
        {this.showOptions && (
          <ul class={{ 'checkout-dropdown__list': true }}>
            {this.renderOptions()}
          </ul>
        )}
      </Host>
    )
  }
}
