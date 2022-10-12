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

import { Components } from '@plug-checkout/core'

export declare interface PlugCheckout extends Components.PlugCheckout {}
@ProxyCmp({
  inputs: [
    'clientId',
    'sessionId',
    'dialogConfig',
    'merchantId',
    'paymentMethods',
    'publicKey',
    'sandbox',
    'transactionConfig',
    'idempotencyKey',
    'isLoading',
  ],
})
@Component({
  selector: 'plug-checkout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'clientId',
    'dialogConfig',
    'merchantId',
    'paymentMethods',
    'sessionId',
    'publicKey',
    'sandbox',
    'transactionConfig',
    'idempotencyKey',
    'isLoading',
  ],
  outputs: ['paymentSessionFetch', 'paymentSuccess', 'paymentFailed'],
})
export class PlugCheckout {
  /**  */
  paymentSuccess!: EventEmitter<CustomEvent<{ data: unknown }>>
  /**  */
  paymentFailed!: EventEmitter<CustomEvent<{ error: unknown }>>
  protected el: HTMLElement
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach()
    this.el = r.nativeElement
    proxyOutputs(this, this.el, [
      'paymentSessionFetch',
      'paymentSuccess',
      'paymentFailed',
    ])
  }
}
