import {
  Component,
  ComponentInterface,
  Host,
  h,
  Event,
  EventEmitter,
  Prop,
} from '@stencil/core'

import { PlugButtonType } from './plug-button.types'
import { PlugIconNames } from '../plug-icon/plug-icon.types'
@Component({
  tag: 'plug-button',
  styleUrl: 'plug-button.scss',
})
export class PlugButton implements ComponentInterface {
  @Prop() customClass?: string
  @Prop() icon?: PlugIconNames
  @Prop() label: string
  @Prop() fullWidth: boolean
  @Prop() disabled? = false
  @Prop() type?: PlugButtonType = 'button'

  @Event() clicked!: EventEmitter<void>
  @Event() focused!: EventEmitter<void>
  @Event() blured!: EventEmitter<void>

  private onClick = () => {
    this.clicked.emit()
  }

  private onFocus = () => {
    this.focused.emit()
  }

  private onBlur = () => {
    this.blured.emit()
  }

  render() {
    return (
      <Host aria-disabled={this.disabled ? 'true' : null}>
        <button
          disabled={this.disabled}
          type={this.type}
          class={{
            'plug-button__native': true,
            'plug-button__native--full-width': this.fullWidth,
            [this.customClass]: !!this.customClass,
          }}
          onClick={this.onClick}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          {!!this.icon && <plug-icon icon={this.icon} class="icon" />}
          {this.label}
        </button>
      </Host>
    )
  }
}
