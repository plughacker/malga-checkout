import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'checkout-accordion',
  styleUrl: 'checkout-accordion.scss',
})
export class CheckoutAccordion {
  @Prop() opened: boolean
  @Prop() label: string
  @Prop() isEditable: boolean
  @Prop() fullWidth = false

  @Event() expandClick!: EventEmitter<void>

  private handleExpandClick = () => {
    this.expandClick.emit()
  }

  render() {
    return (
      <Host
        aria-expanded={this.opened}
        class={{
          'checkout-accordion__container': true,
          'checkout-accordion__container--full-width': this.fullWidth,
        }}
      >
        <header
          class={{
            'checkout-accordion__header': true,
            'checkout-accordion__header--editable': this.isEditable,
          }}
        >
          {this.label}

          {!this.opened && this.isEditable && (
            <button type="button" onClick={this.handleExpandClick}>
              <checkout-icon icon="edit" />
            </button>
          )}

          {this.opened && (
            <slot name="accordion-header-additional-information" />
          )}
        </header>
        <div
          class={{
            'checkout-accordion__content': true,
            'checkout-accordion__content--opened': this.opened,
          }}
          aria-hidden={this.opened}
        >
          <slot />
        </div>
      </Host>
    )
  }
}
