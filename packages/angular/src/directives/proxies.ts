/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@plug-checkout/core';

import { CheckoutButton as ICheckoutButton } from '@plug-checkout/core/dist/types/partials/checkout-button/checkout-button';
export declare interface CheckoutButton extends Components.CheckoutButton {}
@ProxyCmp({
  inputs: ['customClass', 'disabled', 'fullWidth', 'icon', 'isLoading', 'label', 'type']
})
@Component({
  selector: 'checkout-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'disabled', 'fullWidth', 'icon', 'isLoading', 'label', 'type'],
  outputs: ['clicked', 'focused', 'blured']
})
export class CheckoutButton {
  /**  */
  clicked!: ICheckoutButton['clicked'];
  /**  */
  focused!: ICheckoutButton['focused'];
  /**  */
  blured!: ICheckoutButton['blured'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clicked', 'focused', 'blured']);
  }
}


export declare interface CheckoutCreditCard extends Components.CheckoutCreditCard {}
@ProxyCmp({
  inputs: ['cvv', 'expiry', 'focused', 'issuer', 'locale', 'name', 'number', 'placeholders']
})
@Component({
  selector: 'checkout-credit-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cvv', 'expiry', 'focused', 'issuer', 'locale', 'name', 'number', 'placeholders']
})
export class CheckoutCreditCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CheckoutErrorMessage extends Components.CheckoutErrorMessage {}
@ProxyCmp({
  inputs: ['customClass', 'fullWidth', 'message']
})
@Component({
  selector: 'checkout-error-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'fullWidth', 'message']
})
export class CheckoutErrorMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CheckoutIcon extends Components.CheckoutIcon {}
@ProxyCmp({
  inputs: ['class', 'icon']
})
@Component({
  selector: 'checkout-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['class', 'icon']
})
export class CheckoutIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CheckoutInput as ICheckoutInput } from '@plug-checkout/core/dist/types/partials/checkout-input/checkout-input';
export declare interface CheckoutInput extends Components.CheckoutInput {}
@ProxyCmp({
  inputs: ['autofocus', 'customContainerClass', 'customInputClass', 'customLabelClass', 'disabled', 'fullWidth', 'hasError', 'hasValidation', 'inputmode', 'label', 'mask', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'placeholder', 'readonly', 'required', 'startIcon', 'type', 'value']
})
@Component({
  selector: 'checkout-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autofocus', 'customContainerClass', 'customInputClass', 'customLabelClass', 'disabled', 'fullWidth', 'hasError', 'hasValidation', 'inputmode', 'label', 'mask', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'placeholder', 'readonly', 'required', 'startIcon', 'type', 'value'],
  outputs: ['inputed', 'changed', 'blurred', 'focused']
})
export class CheckoutInput {
  /**  */
  inputed!: ICheckoutInput['inputed'];
  /**  */
  changed!: ICheckoutInput['changed'];
  /**  */
  blurred!: ICheckoutInput['blurred'];
  /**  */
  focused!: ICheckoutInput['focused'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputed', 'changed', 'blurred', 'focused']);
  }
}

import { CheckoutSelect as ICheckoutSelect } from '@plug-checkout/core/dist/types/partials/checkout-select/checkout-select';
export declare interface CheckoutSelect extends Components.CheckoutSelect {}
@ProxyCmp({
  inputs: ['autofocus', 'customContainerClass', 'customLabelClass', 'customSelectClass', 'disabled', 'fullWidth', 'hasError', 'hasValidation', 'label', 'name', 'options', 'placeholder', 'readonly', 'required', 'startIcon', 'value']
})
@Component({
  selector: 'checkout-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autofocus', 'customContainerClass', 'customLabelClass', 'customSelectClass', 'disabled', 'fullWidth', 'hasError', 'hasValidation', 'label', 'name', 'options', 'placeholder', 'readonly', 'required', 'startIcon', 'value'],
  outputs: ['inputed', 'changed', 'blurred', 'focused']
})
export class CheckoutSelect {
  /**  */
  inputed!: ICheckoutSelect['inputed'];
  /**  */
  changed!: ICheckoutSelect['changed'];
  /**  */
  blurred!: ICheckoutSelect['blurred'];
  /**  */
  focused!: ICheckoutSelect['focused'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputed', 'changed', 'blurred', 'focused']);
  }
}


export declare interface CheckoutTypography extends Components.CheckoutTypography {}
@ProxyCmp({
  inputs: ['color', 'content', 'tag', 'variation']
})
@Component({
  selector: 'checkout-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'content', 'tag', 'variation']
})
export class CheckoutTypography {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PlugCheckout extends Components.PlugCheckout {}
@ProxyCmp({
  inputs: ['amount', 'apiKey', 'capture', 'clientId', 'customFormStyleClasses', 'installmentsConfig', 'merchantId', 'statementDescriptor']
})
@Component({
  selector: 'plug-checkout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'apiKey', 'capture', 'clientId', 'customFormStyleClasses', 'installmentsConfig', 'merchantId', 'statementDescriptor']
})
export class PlugCheckout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { PlugCheckoutForm as IPlugCheckoutForm } from '@plug-checkout/core/dist/types/components/plug-checkout/partials/plug-checkout-form/plug-checkout-form';
export declare interface PlugCheckoutForm extends Components.PlugCheckoutForm {}
@ProxyCmp({
  inputs: ['amount', 'customFormStyleClasses', 'formValues', 'installmentsConfig', 'isLoading']
})
@Component({
  selector: 'plug-checkout-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'customFormStyleClasses', 'formValues', 'installmentsConfig', 'isLoading'],
  outputs: ['formSubmit', 'fieldChange']
})
export class PlugCheckoutForm {
  /**  */
  formSubmit!: IPlugCheckoutForm['formSubmit'];
  /**  */
  fieldChange!: IPlugCheckoutForm['fieldChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit', 'fieldChange']);
  }
}
