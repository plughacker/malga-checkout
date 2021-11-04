/* tslint:disable */
/* eslint-disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
} from '@angular/core'
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils'

import { Components } from '@plug-checkout-full/core'

export declare interface PlugCheckoutFull extends Components.PlugCheckoutFull {}
@ProxyCmp({
  inputs: [
    'clientId',
    'dialogConfig',
    'merchantId',
    'pageConfig',
    'paymentMethods',
    'publicKey',
    'sandbox',
    'transactionConfig',
  ],
})
@Component({
  selector: 'plug-checkout-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'clientId',
    'dialogConfig',
    'merchantId',
    'pageConfig',
    'paymentMethods',
    'publicKey',
    'sandbox',
    'transactionConfig',
  ],
  outputs: ['transactionSuccess', 'transactionFailed'],
})
export class PlugCheckoutFull {
  /**  */
  transactionSuccess!: EventEmitter<CustomEvent<{ data: unknown }>>
  /**  */
  transactionFailed!: EventEmitter<CustomEvent<{ error: unknown }>>
  protected el: HTMLElement
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach()
    this.el = r.nativeElement
    proxyOutputs(this, this.el, ['transactionSuccess', 'transactionFailed'])
  }
}
