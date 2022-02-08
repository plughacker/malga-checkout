import {
  Component,
  Host,
  h,
  Event,
  Prop,
  State,
  EventEmitter,
  ComponentInterface,
} from '@stencil/core'

@Component({ tag: 'checkout-switch', styleUrl: 'checkout-switch.scss' })
export class CheckoutSwitch implements ComponentInterface {
  @Prop() class?: string
  @Prop() checked?: boolean = false

  @Event() changed!: EventEmitter<boolean>

  @State() isChecked = false

  private onChange = () => {
    this.isChecked = !this.isChecked
    this.changed.emit(!this.isChecked)
  }

  render() {
    return (
      <Host
        class={{
          [this.class]: !!this.class,
        }}
      >
        <div class={{ 'checkout-switch__container': true }}>
          <input
            id="checkout-switch-button"
            class={{
              'checkout-switch__switch': true,
              'checkout-switch__button': true,
            }}
            type="checkbox"
            checked={this.checked}
            onChange={this.onChange}
          />
          <label htmlFor="checkout-switch-button" />
        </div>
      </Host>
    )
  }
}
