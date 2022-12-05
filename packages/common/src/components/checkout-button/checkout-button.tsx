import {
  Component,
  ComponentInterface,
  Host,
  h,
  Event,
  EventEmitter,
  Prop,
} from '@stencil/core'

import Clipboard from 'clipboard'

import { t } from '@plug-checkout/i18n'
import { Locale } from '@plug-checkout/i18n/dist/utils'

import { CheckoutButtonType } from './checkout-button.types'
import { CheckoutIconNames } from '../checkout-icon/checkout-icon.types'

@Component({
  tag: 'checkout-button',
  styleUrl: 'checkout-button.scss',
})
export class CheckoutButton implements ComponentInterface {
  @Prop() customClass?: string
  @Prop() icon?: CheckoutIconNames
  @Prop() label: string
  @Prop() fullWidth?: boolean
  @Prop() clipboardContent?: string
  @Prop() disabled? = false
  @Prop() type?: CheckoutButtonType = 'button'
  @Prop() isLoading?: boolean
  @Prop() locale?: Locale

  @Event() clicked!: EventEmitter<void>
  @Event() focused!: EventEmitter<void>
  @Event() blured!: EventEmitter<void>

  private onClick = () => {
    if (this.isLoading || this.disabled) {
      return
    }

    this.clicked.emit()
  }

  private onFocus = () => {
    this.focused.emit()
  }

  private onBlur = () => {
    this.blured.emit()
  }

  private handleDynamicClipboardAttribute = () => {
    if (this.clipboardContent) {
      return { 'data-clipboard-text': this.clipboardContent }
    }

    return {}
  }

  componentDidLoad() {
    if (this.clipboardContent) {
      new Clipboard('#clipboard')
    }
  }

  render() {
    return (
      <Host
        class={{ 'checkout-button__container--full-width': this.fullWidth }}
        aria-disabled={this.disabled ? 'true' : null}
      >
        <button
          disabled={this.disabled}
          type={this.type}
          id={this.clipboardContent ? 'clipboard' : ''}
          class={{
            'checkout-button__native': true,
            'checkout-button__native--full-width': this.fullWidth,
            [this.customClass]: !!this.customClass,
          }}
          onClick={this.onClick}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...this.handleDynamicClipboardAttribute()}
        >
          {(!!this.icon || this.isLoading) && (
            <checkout-icon
              icon={this.isLoading ? 'spinner' : this.icon}
              class={this.isLoading ? 'icon icon-loading' : 'icon'}
            />
          )}
          {this.isLoading ? t('common.processing', this.locale) : this.label}
        </button>
      </Host>
    )
  }
}
