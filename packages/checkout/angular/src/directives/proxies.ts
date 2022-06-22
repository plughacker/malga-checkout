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
    'dialogConfig',
    'merchantId',
    'paymentMethods',
    'publicKey',
    'sandbox',
    'transactionConfig',
    'idempotencyKey',
    'paymentSessionKey',
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
    'publicKey',
    'sandbox',
    'transactionConfig',
    'idempotencyKey',
    'paymentSessionKey',
  ],
  outputs: ['paymentSuccess', 'paymentFailed', 'paymentSessionFetch'],
})
export class PlugCheckout {
  /**  */
  paymentSuccess!: EventEmitter<CustomEvent<{ data: unknown }>>
  /**  */
  paymentFailed!: EventEmitter<CustomEvent<{ error: unknown }>>
  /**  */
  paymentSessionFetch!: EventEmitter<CustomEvent<{ error: unknown }>>
  protected el: HTMLElement
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach()
    this.el = r.nativeElement
    proxyOutputs(this, this.el, ['paymentSuccess', 'paymentFailed', 'paymentSessionFetch'])
  }
}
