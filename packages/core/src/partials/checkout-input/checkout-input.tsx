import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core'

import {
  CheckoutInputMode,
  CheckoutInputType,
  CheckoutInputValue,
  CheckoutInputChangeEvent,
} from './checkout-input.types'

import { CheckoutIconNames } from '../checkout-icon/checkout-icon.types'

@Component({
  tag: 'checkout-input',
  styleUrl: 'checkout-input.scss',
})
export class CheckoutInput implements ComponentInterface {
  @Prop() customContainerClass?: string
  @Prop() customLabelClass?: string
  @Prop() customInputClass?: string
  @Prop() startIcon?: CheckoutIconNames
  @Prop() hasValidation?: boolean
  @Prop() hasError?: boolean
  @Prop() max?: string
  @Prop() maxlength?: number
  @Prop() min?: string
  @Prop() minlength?: number
  @Prop() multiple?: boolean
  @Prop() placeholder?: string
  @Prop() label?: string
  @Prop() name: string
  @Prop() fullWidth = false
  @Prop() readonly = false
  @Prop() required = false
  @Prop() autofocus = false
  @Prop() disabled = false
  @Prop() inputmode: CheckoutInputMode = 'text'
  @Prop() type: CheckoutInputType = 'text'
  @Prop({ mutable: true }) value?: CheckoutInputValue = ''

  @Event() inputed!: EventEmitter<KeyboardEvent>
  @Event() changed!: EventEmitter<CheckoutInputChangeEvent>
  @Event() blurred!: EventEmitter<void>
  @Event() focused!: EventEmitter<void>

  @Watch('value')
  protected valueChanged() {
    this.changed.emit({
      value: this.value == null ? this.value : this.value.toString(),
    })
  }

  private onInput = (event: Event) => {
    const input = event.target as HTMLInputElement | null

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

  private hasValue = (): boolean => this.getValue().length > 0

  render() {
    return (
      <Host
        class={{
          'checkout-input__container': true,
          'checkout-input__container--full-width': this.fullWidth,
          [this.customContainerClass]: !!this.customContainerClass,
        }}
      >
        {!!this.startIcon && (
          <checkout-icon
            icon={this.startIcon}
            class="checkout-input__start-icon"
          />
        )}

        {!!this.hasValidation && (
          <checkout-icon
            icon={this.hasError ? 'warning' : 'check'}
            class="checkout-input__end-icon"
          />
        )}

        {this.label && (
          <label
            htmlFor={this.name}
            class={{
              'checkout-input__label': true,
              [this.customLabelClass]: !!this.customLabelClass,
            }}
          >
            {this.label}
          </label>
        )}

        <input
          class={{
            'checkout-input__native': true,
            'checkout-input__native--filled': this.hasValue(),
            'checkout-input__native--start-icon': !!this.startIcon,
            'checkout-input__native--end-icon': this.hasValidation,
            [this.customInputClass]: !!this.customInputClass,
          }}
          id={this.name}
          placeholder={this.placeholder}
          disabled={this.disabled}
          autoFocus={this.autofocus}
          inputMode={this.inputmode}
          min={this.min}
          max={this.max}
          minLength={this.minlength}
          maxLength={this.maxlength}
          multiple={this.multiple}
          name={this.name}
          readOnly={this.readonly}
          required={this.required}
          type={this.type}
          value={this.getValue()}
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </Host>
    )
  }
}
