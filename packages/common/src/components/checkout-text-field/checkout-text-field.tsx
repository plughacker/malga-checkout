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

import Inputmask from 'inputmask'

import {
  CheckoutTextFieldMode,
  CheckoutTextFieldType,
  CheckoutTextFieldValue,
  CheckoutTextFieldChangeEvent,
} from './checkout-text-field.types'

import { CheckoutIconNames } from '../checkout-icon/checkout-icon.types'

@Component({
  tag: 'checkout-text-field',
  styleUrl: 'checkout-text-field.scss',
})
export class CheckoutTextField implements ComponentInterface {
  @Prop() customContainerClass?: string
  @Prop() customLabelClass?: string
  @Prop() customInputClass?: string
  @Prop() mask?: string
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
  @Prop() autoUnmask = false
  @Prop() fullWidth = false
  @Prop() readonly = false
  @Prop() required = false
  @Prop() autofocus = false
  @Prop() disabled = false
  @Prop() inputmode: CheckoutTextFieldMode = 'text'
  @Prop() type: CheckoutTextFieldType = 'text'
  @Prop({ mutable: true }) value?: CheckoutTextFieldValue = ''

  @Event() inputed!: EventEmitter<KeyboardEvent>
  @Event() changed!: EventEmitter<CheckoutTextFieldChangeEvent>
  @Event() blurred!: EventEmitter<FocusEvent>
  @Event() focused!: EventEmitter<FocusEvent>

  inputRef!: HTMLInputElement

  @Watch('value')
  protected valueChanged() {
    this.changed.emit({
      value: this.value == null ? this.value : this.value.toString(),
    })
  }

  @Watch('mask')
  protected maskChanged() {
    if (this.inputRef) {
      this.handleSetMask()
    }
  }

  private onInput = (event: Event) => {
    const input = event.target as HTMLInputElement | null

    if (input) {
      this.value = input.value || ''
    }

    this.inputed.emit(event as KeyboardEvent)
  }

  private onBlur = (event: FocusEvent) => {
    this.blurred.emit(event)
  }

  private onChange = (event: Event) => {
    const input = event.target as HTMLInputElement | null
    const value = input.value || ''

    this.onInput(event as KeyboardEvent)
    this.changed.emit({ value })
  }

  private onFocus = (event: FocusEvent) => {
    this.focused.emit(event)
  }

  private getValue = (): string => {
    return typeof this.value === 'number'
      ? this.value.toString()
      : (this.value || '').toString()
  }

  private hasValue = (): boolean => this.getValue().length > 0

  private handleSetMask = () => {
    if (this.inputRef) {
      Inputmask.remove(this.inputRef)

      Inputmask({
        mask: this.mask,
        placeholder: ' ',
        showMaskOnHover: false,
        autoUnmask: this.autoUnmask,
        showMaskOnFocus: false,
      }).mask(this.inputRef)
    }
  }

  componentDidLoad() {
    if (this.mask) {
      this.handleSetMask()
    }
  }

  render() {
    return (
      <Host
        class={{
          'checkout-text-field__container': true,
          'checkout-text-field__container--full-width': this.fullWidth,
          [this.customContainerClass]: !!this.customContainerClass,
        }}
      >
        <fieldset class="checkout-text-field__fieldset">
          <div
            class={{
              'checkout-text-field__content': true,
              'checkout-text-field__content--filled': this.hasValue(),
            }}
          >
            <input
              ref={(element) => (this.inputRef = element)}
              class={{
                'checkout-text-field__native': true,
                'checkout-text-field__native--error': this.hasError,
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
              onChange={this.onChange}
              autoComplete="on"
              autocomplete="on"
            />
            <checkout-typography
              tag="label"
              color="darkness"
              variation="field"
              content={this.label}
            />
          </div>
        </fieldset>
      </Host>
    )
  }
}
