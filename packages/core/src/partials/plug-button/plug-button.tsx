import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'plug-button',
  styleUrl: 'plug-button.scss',
})
export class PlugButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
