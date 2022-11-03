import {
  Component,
  Host,
  h,
  Prop,
  Event,
  Watch,
  EventEmitter,
  ComponentInterface,
} from '@stencil/core'

import {
  CheckoutSelectFieldOptions,
  CheckoutSelectFieldValue,
  CheckoutSelectFieldChangeEvent,
} from './checkout-select-field.types'

@Component({
  tag: 'checkout-select-field',
  styleUrl: 'checkout-select-field.scss',
})
export class CheckoutSelectField implements ComponentInterface {
  @Prop() customContainerClass?: string
  @Prop() customLabelClass?: string
  @Prop() customSelectClass?: string
  @Prop() hasError?: boolean
  @Prop() placeholder?: string
  @Prop() label?: string
  @Prop() noneOptionLabel: string
  @Prop() name: string
  @Prop({ mutable: true }) options: CheckoutSelectFieldOptions[] = []
  @Prop() fullWidth = false
  @Prop() readonly = false
  @Prop() required = false
  @Prop() autofocus = false
  @Prop() disabled = false
  @Prop({ mutable: true }) value?: CheckoutSelectFieldValue = 'none'

  @Event() inputed!: EventEmitter<KeyboardEvent>
  @Event() changed!: EventEmitter<CheckoutSelectFieldChangeEvent>
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
      { label: this.noneOptionLabel, value: 'none' },
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
          'checkout-select-field__container': true,
          'checkout-select-field__container--full-width': this.fullWidth,
          [this.customContainerClass]: !!this.customContainerClass,
        }}
      >
        <fieldset class="checkout-select-field__fieldset">
          <div
            class={{
              'checkout-select-field__content': true,
              'checkout-select-field__content--filled': this.hasValue(),
            }}
          >
            <select
              class={{
                'checkout-select-field__native': true,
                [this.customSelectClass]: !!this.customSelectClass,
              }}
              id={this.name}
              disabled={this.disabled}
              autoFocus={this.autofocus}
              name={this.name}
              required={this.required}
              onInput={this.onInput}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              autoComplete="off"
              autocomplete="off"
            >
              {this.renderOptions()}
            </select>
            <checkout-typography
              tag="label"
              color="darkness"
              variation="field"
              content={this.label}
            />
            <checkout-icon icon={this.hasError ? 'warning' : 'arrowDown'} />
          </div>
        </fieldset>
      </Host>
    )
  }
}
