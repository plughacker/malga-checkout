import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
  ComponentInterface,
} from '@stencil/core'

import { CheckoutIconNames } from '../checkout-icon/checkout-icon.types'

import {
  CheckoutSelectChangeEvent,
  CheckoutSelectValue,
  CheckoutSelectOptions,
} from './checkout-select.types'

@Component({
  tag: 'checkout-select',
  styleUrl: 'checkout-select.scss',
})
export class CheckoutSelect implements ComponentInterface {
  @Prop() customContainerClass?: string
  @Prop() customLabelClass?: string
  @Prop() customInputClass?: string
  @Prop() startIcon?: CheckoutIconNames
  @Prop() hasError?: boolean
  @Prop() placeholder?: string
  @Prop() label?: string
  @Prop() name: string
  @Prop({ mutable: true }) options: CheckoutSelectOptions[] = []
  @Prop() hasValidation = true
  @Prop() fullWidth = false
  @Prop() readonly = false
  @Prop() required = false
  @Prop() autofocus = false
  @Prop() disabled = false
  @Prop({ mutable: true }) value?: CheckoutSelectValue = 'none'

  @Event() inputed!: EventEmitter<KeyboardEvent>
  @Event() changed!: EventEmitter<CheckoutSelectChangeEvent>
  @Event() blurred!: EventEmitter<void>
  @Event() focused!: EventEmitter<void>

  @Watch('value')
  protected valueChanged() {
    this.changed.emit({
      value: this.value == null ? this.value : this.value.toString(),
    })
  }

  private onInput = (event: Event) => {
    const input = event.target as HTMLSelectElement | null

    if (input) {
      this.value = input.value || ''
    }

    this.inputed.emit(event as KeyboardEvent)
  }

  private onBlur = () => {
    this.blurred.emit()
  }

  private onFocus = () => {
    this.focused.emit()
  }

  private getValue = (): string => {
    return typeof this.value === 'number'
      ? this.value.toString()
      : (this.value || '').toString()
  }

  private hasValue = (): boolean =>
    this.getValue().length > 0 && this.value !== 'none'

  private renderOptions = () => {
    const currentOptions = [
      { label: 'Parcelas', value: 'none' },
      ...this.options,
    ]

    const mappedOptions = currentOptions.map((option) => (
      <option value={option.value} selected={this.value === option.value}>
        {option.label}
      </option>
    ))

    return mappedOptions
  }

  render() {
    return (
      <Host
        class={{
          'checkout-select__container': true,
          'checkout-select__container--full-width': this.fullWidth,
          [this.customContainerClass]: !!this.customContainerClass,
        }}
      >
        {!!this.startIcon && (
          <checkout-icon
            icon={this.startIcon}
            class="checkout-select__start-icon"
          />
        )}

        {!!this.hasValidation && (
          <checkout-icon
            icon={this.hasError ? 'warning' : 'arrowDown'}
            class="checkout-select__end-icon"
          />
        )}

        {this.label && (
          <label
            htmlFor={this.name}
            class={{
              'checkout-select__label': true,
              [this.customLabelClass]: !!this.customLabelClass,
            }}
          >
            {this.label}
          </label>
        )}

        <select
          class={{
            'checkout-select__native': true,
            'checkout-select__native--filled': this.hasValue(),
            'checkout-select__native--none-value': this.value === 'none',
            'checkout-select__native--start-icon': !!this.startIcon,
            'checkout-select__native--end-icon': this.hasValidation,
            [this.customInputClass]: !!this.customInputClass,
          }}
          id={this.name}
          disabled={this.disabled}
          autoFocus={this.autofocus}
          name={this.name}
          required={this.required}
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        >
          {this.renderOptions()}
        </select>
      </Host>
    )
  }
}
