import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core'

import {
  CheckoutTypographyColor,
  CheckoutTypographyVariation,
} from './checkout-typography.types'

@Component({
  tag: 'checkout-typography',
  styleUrl: 'checkout-typography.scss',
})
export class CheckoutTypography implements ComponentInterface {
  @Prop() tag = 'p'
  @Prop() variation: CheckoutTypographyVariation = 'body1'
  @Prop() color: CheckoutTypographyColor = 'dark'
  @Prop() content: string

  static PREFIX_CLASS = 'checkout-typography'
  static VARIATIONS = [
    'header5',
    'header6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'label',
  ]
  static COLORS = ['white', 'dark', 'warning']

  private createDynamicClassObject = (list: string[], comparator: string) => {
    const reducedList = list.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [`${CheckoutTypography.PREFIX_CLASS}--${currentValue}`]:
          comparator === currentValue,
      }),
      {},
    )

    return reducedList
  }

  private generateClass = () => {
    const variationsClass = this.createDynamicClassObject(
      CheckoutTypography.VARIATIONS,
      this.variation,
    )
    const colorsClass = this.createDynamicClassObject(
      CheckoutTypography.COLORS,
      this.color,
    )
    const classObject = { ...variationsClass, ...colorsClass }

    return classObject
  }

  render() {
    const Tag = this.tag

    return (
      <Host>
        <Tag class={this.generateClass()}>{this.content}</Tag>
      </Host>
    )
  }
}
