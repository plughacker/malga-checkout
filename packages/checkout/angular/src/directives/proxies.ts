/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@plug-checkout/core';

import { CheckoutAccordion as ICheckoutAccordion } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-accordion/checkout-accordion';
export declare interface CheckoutAccordion extends Components.CheckoutAccordion {}
@ProxyCmp({
  inputs: ['fullWidth', 'isEditable', 'label', 'opened']
})
@Component({
  selector: 'checkout-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fullWidth', 'isEditable', 'label', 'opened'],
  outputs: ['expandClick']
})
export class CheckoutAccordion {
  /**  */
  expandClick!: ICheckoutAccordion['expandClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandClick']);
  }
}

import { CheckoutButton as ICheckoutButton } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-button/checkout-button';
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

import { CheckoutInput as ICheckoutInput } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-input/checkout-input';
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

import { CheckoutManualPayment as ICheckoutManualPayment } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-manual-payment/checkout-manual-payment';
export declare interface CheckoutManualPayment extends Components.CheckoutManualPayment {}
@ProxyCmp({
  inputs: ['fullWidth', 'paymentMethod']
})
@Component({
  selector: 'checkout-manual-payment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fullWidth', 'paymentMethod'],
  outputs: ['paymentClick']
})
export class CheckoutManualPayment {
  /**  */
  paymentClick!: ICheckoutManualPayment['paymentClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentClick']);
  }
}


export declare interface CheckoutOrderSummary extends Components.CheckoutOrderSummary {}
@ProxyCmp({
  inputs: ['amount', 'fullWidth', 'label', 'products']
})
@Component({
  selector: 'checkout-order-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'fullWidth', 'label', 'products']
})
export class CheckoutOrderSummary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CheckoutRadioField as ICheckoutRadioField } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-radio-field/checkout-radio-field';
export declare interface CheckoutRadioField extends Components.CheckoutRadioField {}
@ProxyCmp({
  inputs: ['customContainerClass', 'customInputClass', 'customLabelClass', 'fullWidth', 'isChecked', 'label', 'value']
})
@Component({
  selector: 'checkout-radio-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customContainerClass', 'customInputClass', 'customLabelClass', 'fullWidth', 'isChecked', 'label', 'value'],
  outputs: ['inputed', 'clicked', 'changed']
})
export class CheckoutRadioField {
  /**  */
  inputed!: ICheckoutRadioField['inputed'];
  /**  */
  clicked!: ICheckoutRadioField['clicked'];
  /**  */
  changed!: ICheckoutRadioField['changed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputed', 'clicked', 'changed']);
  }
}

import { CheckoutSelect as ICheckoutSelect } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-select/checkout-select';
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

import { CheckoutSelectField as ICheckoutSelectField } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-select-field/checkout-select-field';
export declare interface CheckoutSelectField extends Components.CheckoutSelectField {}
@ProxyCmp({
  inputs: ['autofocus', 'customContainerClass', 'customLabelClass', 'customSelectClass', 'disabled', 'fullWidth', 'hasError', 'label', 'name', 'noneOptionLabel', 'options', 'placeholder', 'readonly', 'required', 'value']
})
@Component({
  selector: 'checkout-select-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autofocus', 'customContainerClass', 'customLabelClass', 'customSelectClass', 'disabled', 'fullWidth', 'hasError', 'label', 'name', 'noneOptionLabel', 'options', 'placeholder', 'readonly', 'required', 'value'],
  outputs: ['inputed', 'changed', 'blurred', 'focused']
})
export class CheckoutSelectField {
  /**  */
  inputed!: ICheckoutSelectField['inputed'];
  /**  */
  changed!: ICheckoutSelectField['changed'];
  /**  */
  blurred!: ICheckoutSelectField['blurred'];
  /**  */
  focused!: ICheckoutSelectField['focused'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputed', 'changed', 'blurred', 'focused']);
  }
}

import { CheckoutTextField as ICheckoutTextField } from '@plug-checkout/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-text-field/checkout-text-field';
export declare interface CheckoutTextField extends Components.CheckoutTextField {}
@ProxyCmp({
  inputs: ['autofocus', 'customContainerClass', 'customInputClass', 'customLabelClass', 'disabled', 'fullWidth', 'hasError', 'hasValidation', 'inputmode', 'label', 'mask', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'placeholder', 'readonly', 'required', 'startIcon', 'type', 'value']
})
@Component({
  selector: 'checkout-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autofocus', 'customContainerClass', 'customInputClass', 'customLabelClass', 'disabled', 'fullWidth', 'hasError', 'hasValidation', 'inputmode', 'label', 'mask', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'placeholder', 'readonly', 'required', 'startIcon', 'type', 'value'],
  outputs: ['inputed', 'changed', 'blurred', 'focused']
})
export class CheckoutTextField {
  /**  */
  inputed!: ICheckoutTextField['inputed'];
  /**  */
  changed!: ICheckoutTextField['changed'];
  /**  */
  blurred!: ICheckoutTextField['blurred'];
  /**  */
  focused!: ICheckoutTextField['focused'];
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

import { PlugPayments as IPlugPayments } from '@plug-checkout/core/dist/types/components/plug-payments/plug-payments';
export declare interface PlugPayments extends Components.PlugPayments {}
@ProxyCmp({
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'installments', 'merchantId', 'orderId', 'paymentMethods', 'pix', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'installments', 'merchantId', 'orderId', 'paymentMethods', 'pix', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor'],
  outputs: ['paymentSuccess', 'paymentFailed']
})
export class PlugPayments {
  /**  */
  paymentSuccess!: IPlugPayments['paymentSuccess'];
  /**  */
  paymentFailed!: IPlugPayments['paymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentSuccess', 'paymentFailed']);
  }
}

import { PlugPaymentsBoleto as IPlugPaymentsBoleto } from '@plug-checkout/core/dist/types/components/plug-payments-boleto/plug-payments-boleto';
export declare interface PlugPaymentsBoleto extends Components.PlugPaymentsBoleto {}
@ProxyCmp({
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments-boleto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'statementDescriptor'],
  outputs: ['paymentSuccess', 'paymentFailed']
})
export class PlugPaymentsBoleto {
  /**  */
  paymentSuccess!: IPlugPaymentsBoleto['paymentSuccess'];
  /**  */
  paymentFailed!: IPlugPaymentsBoleto['paymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentSuccess', 'paymentFailed']);
  }
}

import { PlugPaymentsCredit as IPlugPaymentsCredit } from '@plug-checkout/core/dist/types/components/plug-payments-credit/plug-payments-credit';
export declare interface PlugPaymentsCredit extends Components.PlugPaymentsCredit {}
@ProxyCmp({
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customFormStyleClasses', 'customerId', 'description', 'installmentsConfig', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments-credit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customFormStyleClasses', 'customerId', 'description', 'installmentsConfig', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor'],
  outputs: ['paymentSuccess', 'paymentFailed']
})
export class PlugPaymentsCredit {
  /**  */
  paymentSuccess!: IPlugPaymentsCredit['paymentSuccess'];
  /**  */
  paymentFailed!: IPlugPaymentsCredit['paymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentSuccess', 'paymentFailed']);
  }
}

import { PlugPaymentsCreditForm as IPlugPaymentsCreditForm } from '@plug-checkout/core/dist/types/components/plug-payments-credit/partials/plug-payments-credit-form/plug-payments-credit-form';
export declare interface PlugPaymentsCreditForm extends Components.PlugPaymentsCreditForm {}
@ProxyCmp({
  inputs: ['amount', 'customFormStyleClasses', 'formValues', 'installmentsConfig', 'isLoading']
})
@Component({
  selector: 'plug-payments-credit-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'customFormStyleClasses', 'formValues', 'installmentsConfig', 'isLoading'],
  outputs: ['formSubmit', 'fieldChange']
})
export class PlugPaymentsCreditForm {
  /**  */
  formSubmit!: IPlugPaymentsCreditForm['formSubmit'];
  /**  */
  fieldChange!: IPlugPaymentsCreditForm['fieldChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit', 'fieldChange']);
  }
}

import { PlugPaymentsPix as IPlugPaymentsPix } from '@plug-checkout/core/dist/types/components/plug-payments-pix/plug-payments-pix';
export declare interface PlugPaymentsPix extends Components.PlugPaymentsPix {}
@ProxyCmp({
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'merchantId', 'orderId', 'pix', 'publicKey', 'sandbox', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments-pix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'merchantId', 'orderId', 'pix', 'publicKey', 'sandbox', 'statementDescriptor'],
  outputs: ['paymentSuccess', 'paymentFailed']
})
export class PlugPaymentsPix {
  /**  */
  paymentSuccess!: IPlugPaymentsPix['paymentSuccess'];
  /**  */
  paymentFailed!: IPlugPaymentsPix['paymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentSuccess', 'paymentFailed']);
  }
}
