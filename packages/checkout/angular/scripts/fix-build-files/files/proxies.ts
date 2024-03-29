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

import { Components } from '@malga-checkout/core'

export declare interface MalgaCheckout extends Components.MalgaCheckout {}
@ProxyCmp({
  inputs: [
    'locale',
    'clientId',
    'sessionId',
    'debug',
    'dialogConfig',
    'merchantId',
    'paymentMethods',
    'publicKey',
    'sandbox',
    'transactionConfig',
    'idempotencyKey',
    'isLoading',
    'appInfo',
  ],
})
@Component({
  selector: 'malga-checkout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'locale',
    'clientId',
    'dialogConfig',
    'merchantId',
    'paymentMethods',
    'sessionId',
    'publicKey',
    'sandbox',
    'debug',
    'transactionConfig',
    'idempotencyKey',
    'isLoading',
    'appInfo',
  ],
  outputs: ['paymentSessionFetch', 'paymentSuccess', 'paymentFailed'],
})
export class MalgaCheckout {
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
