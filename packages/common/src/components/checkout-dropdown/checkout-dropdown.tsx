import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core'

import { CheckoutDropdownOptions } from './checkout-dropdown.types'

@Component({
  tag: 'checkout-dropdown',
  styleUrl: 'checkout-dropdown.scss',
})
export class CheckoutDropdown {
  @Prop() fullWidth?: boolean = false
  @Prop() label?: string
  @Prop() value: string
  @Prop() options: CheckoutDropdownOptions[]

  @Event() changed!: EventEmitter<{ value: string }>

  @State() showOptions = false

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

  render() {
    return (
      <Host
        class={{
          'checkout-dropdown__container': true,
          'checkout-dropdown__container--full-width': this.fullWidth,
        }}
      >
        <button
          class={{ 'checkout-dropdown__button': true }}
          onClick={this.toggleShowOptions}
        >
          <span>
            <checkout-icon icon="calendar" />
            {this.getCurrentLabel()}
          </span>
          <checkout-icon icon="arrowDown" />
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
