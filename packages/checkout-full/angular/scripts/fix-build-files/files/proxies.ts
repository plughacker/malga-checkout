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

import { Components } from '@malga-checkout-full/core'

export declare interface MalgaCheckoutFull
  extends Components.MalgaCheckoutFull {}
@ProxyCmp({
  inputs: [
    'locale',
    'clientId',
    'sessionId',
    'idempotencyKey',
    'dialogConfig',
    'merchantId',
    'pageConfig',
    'paymentMethods',
    'publicKey',
    'sandbox',
    'debug',
    'transactionConfig',
  ],
})
@Component({
  selector: 'malga-checkout-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'locale',
    'clientId',
    'sessionId',
    'dialogConfig',
    'idempotencyKey',
    'merchantId',
    'pageConfig',
    'paymentMethods',
    'publicKey',
    'sandbox',
    'debug',
    'transactionConfig',
  ],
  outputs: ['transactionSuccess', 'transactionFailed'],
})
export class MalgaCheckoutFull {
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
