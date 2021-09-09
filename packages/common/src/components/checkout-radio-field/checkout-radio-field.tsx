import {
  Component,
  Host,
  h,
  Prop,
  Watch,
  Event,
  ComponentInterface,
  EventEmitter,
} from '@stencil/core'

import {
  CheckoutRadioFieldValue,
  CheckoutRadioFieldChangeEvent,
} from './checkout-radio-field.types'

@Component({
  tag: 'checkout-radio-field',
  styleUrl: 'checkout-radio-field.scss',
})
export class CheckoutRadioField implements ComponentInterface {
  @Prop() customContainerClass?: string
  @Prop() customLabelClass?: string
  @Prop() customInputClass?: string
  @Prop() fullWidth = false
  @Prop() isChecked = false
  @Prop() label: string
  @Prop({ mutable: true }) value?: CheckoutRadioFieldValue = ''

  @Event() inputed!: EventEmitter<KeyboardEvent>
  @Event() changed!: EventEmitter<CheckoutRadioFieldChangeEvent>

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

  render() {
    return (
      <Host
        class={{
          'checkout-radio-field__container': true,
          'checkout-radio-field__container--full-width': this.fullWidth,
          [this.customContainerClass]: !!this.customContainerClass,
        }}
      >
        <label
          class={{
            'checkout-radio-field__label': true,
            'checkout-radio-field__label--filled': this.isChecked,
            [this.customLabelClass]: !!this.customLabelClass,
          }}
        >
          <input
            type="radio"
            checked={this.isChecked}
            onInput={this.onInput}
            value={this.value}
            class={{
              'checkout-radio-field__native': true,
              [this.customInputClass]: !!this.customInputClass,
            }}
          />
          {this.label}
        </label>
      </Host>
    )
  }
}
