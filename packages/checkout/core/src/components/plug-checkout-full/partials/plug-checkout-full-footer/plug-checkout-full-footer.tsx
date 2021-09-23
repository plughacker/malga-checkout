import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'plug-checkout-full-footer',
  styleUrl: 'plug-checkout-full-footer.scss',
})
export class PlugCheckoutFullFooter {
  @Prop() description: string

  render() {
    return (
      <Host class={{ 'plug-checkout-full-footer__container': true }}>
        <footer class={{ 'plug-checkout-full-footer__content': true }}>
          {this.description}
        </footer>
      </Host>
    )
  }
}
