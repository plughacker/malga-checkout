/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@plug-checkout-full/core';

import { CheckoutAccordion as ICheckoutAccordion } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-accordion/checkout-accordion';
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

import { CheckoutButton as ICheckoutButton } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-button/checkout-button';
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


export declare interface CheckoutClipboardButton extends Components.CheckoutClipboardButton {}
@ProxyCmp({
  inputs: ['clipboardContent', 'label']
})
@Component({
  selector: 'checkout-clipboard-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clipboardContent', 'label']
})
export class CheckoutClipboardButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CheckoutCountdown as ICheckoutCountdown } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-countdown/checkout-countdown';
export declare interface CheckoutCountdown extends Components.CheckoutCountdown {}
@ProxyCmp({
  inputs: ['emptyProgressBarColor', 'expirationTime', 'filledProgressBarColor']
})
@Component({
  selector: 'checkout-countdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['emptyProgressBarColor', 'expirationTime', 'filledProgressBarColor'],
  outputs: ['countdownFinished']
})
export class CheckoutCountdown {
  /**  */
  countdownFinished!: ICheckoutCountdown['countdownFinished'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['countdownFinished']);
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

import { CheckoutManualPayment as ICheckoutManualPayment } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-manual-payment/checkout-manual-payment';
export declare interface CheckoutManualPayment extends Components.CheckoutManualPayment {}
@ProxyCmp({
  inputs: ['fullWidth', 'isLoading', 'paymentMethod']
})
@Component({
  selector: 'checkout-manual-payment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fullWidth', 'isLoading', 'paymentMethod'],
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

import { CheckoutModal as ICheckoutModal } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-modal/checkout-modal';
export declare interface CheckoutModal extends Components.CheckoutModal {}
@ProxyCmp({
  inputs: ['actionButtonLabel', 'amount', 'errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle', 'expirationDate', 'expirationTime', 'mode', 'open', 'paymentCode', 'paymentImageUrl', 'successActionButtonLabel', 'successDescription']
})
@Component({
  selector: 'checkout-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionButtonLabel', 'amount', 'errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle', 'expirationDate', 'expirationTime', 'mode', 'open', 'paymentCode', 'paymentImageUrl', 'successActionButtonLabel', 'successDescription'],
  outputs: ['successButtonClicked', 'errorButtonClicked', 'pixCountdownIsFinished']
})
export class CheckoutModal {
  /**  */
  successButtonClicked!: ICheckoutModal['successButtonClicked'];
  /**  */
  errorButtonClicked!: ICheckoutModal['errorButtonClicked'];
  /**  */
  pixCountdownIsFinished!: ICheckoutModal['pixCountdownIsFinished'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['successButtonClicked', 'errorButtonClicked', 'pixCountdownIsFinished']);
  }
}

import { CheckoutModalBoleto as ICheckoutModalBoleto } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-modal/partials/checkout-modal-boleto/checkout-modal-boleto';
export declare interface CheckoutModalBoleto extends Components.CheckoutModalBoleto {}
@ProxyCmp({
  inputs: ['actionButtonLabel', 'amount', 'boletoCode', 'boletoImageUrl', 'expirationDate']
})
@Component({
  selector: 'checkout-modal-boleto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionButtonLabel', 'amount', 'boletoCode', 'boletoImageUrl', 'expirationDate'],
  outputs: ['boletoActionButtonIsClicked']
})
export class CheckoutModalBoleto {
  /**  */
  boletoActionButtonIsClicked!: ICheckoutModalBoleto['boletoActionButtonIsClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['boletoActionButtonIsClicked']);
  }
}

import { CheckoutModalError as ICheckoutModalError } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-modal/partials/checkout-modal-error/checkout-modal-error';
export declare interface CheckoutModalError extends Components.CheckoutModalError {}
@ProxyCmp({
  inputs: ['errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle']
})
@Component({
  selector: 'checkout-modal-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle'],
  outputs: ['errorActionButtonClicked']
})
export class CheckoutModalError {
  /**  */
  errorActionButtonClicked!: ICheckoutModalError['errorActionButtonClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['errorActionButtonClicked']);
  }
}

import { CheckoutModalPix as ICheckoutModalPix } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-modal/partials/checkout-modal-pix/checkout-modal-pix';
export declare interface CheckoutModalPix extends Components.CheckoutModalPix {}
@ProxyCmp({
  inputs: ['actionButtonLabel', 'amount', 'expirationDate', 'expirationTime', 'qrCodeIdentificator', 'qrCodeImageUrl']
})
@Component({
  selector: 'checkout-modal-pix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionButtonLabel', 'amount', 'expirationDate', 'expirationTime', 'qrCodeIdentificator', 'qrCodeImageUrl'],
  outputs: ['countdownIsFinished', 'pixActionButtonIsClicked']
})
export class CheckoutModalPix {
  /**  */
  countdownIsFinished!: ICheckoutModalPix['countdownIsFinished'];
  /**  */
  pixActionButtonIsClicked!: ICheckoutModalPix['pixActionButtonIsClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['countdownIsFinished', 'pixActionButtonIsClicked']);
  }
}

import { CheckoutModalSuccess as ICheckoutModalSuccess } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-modal/partials/checkout-modal-success/checkout-modal-success';
export declare interface CheckoutModalSuccess extends Components.CheckoutModalSuccess {}
@ProxyCmp({
  inputs: ['successActionButtonLabel', 'successDescription']
})
@Component({
  selector: 'checkout-modal-success',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['successActionButtonLabel', 'successDescription'],
  outputs: ['successActionButtonClicked']
})
export class CheckoutModalSuccess {
  /**  */
  successActionButtonClicked!: ICheckoutModalSuccess['successActionButtonClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['successActionButtonClicked']);
  }
}


export declare interface CheckoutOrderSummary extends Components.CheckoutOrderSummary {}
@ProxyCmp({
  inputs: ['amount', 'delivery', 'fullWidth', 'label', 'products']
})
@Component({
  selector: 'checkout-order-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'delivery', 'fullWidth', 'label', 'products']
})
export class CheckoutOrderSummary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CheckoutRadioField as ICheckoutRadioField } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-radio-field/checkout-radio-field';
export declare interface CheckoutRadioField extends Components.CheckoutRadioField {}
@ProxyCmp({
  inputs: ['customContainerClass', 'customInputClass', 'customLabelClass', 'endIcon', 'fullWidth', 'isChecked', 'label', 'value']
})
@Component({
  selector: 'checkout-radio-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customContainerClass', 'customInputClass', 'customLabelClass', 'endIcon', 'fullWidth', 'isChecked', 'label', 'value'],
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

import { CheckoutSelectField as ICheckoutSelectField } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-select-field/checkout-select-field';
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

import { CheckoutTextField as ICheckoutTextField } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/common/dist/collection/components/checkout-text-field/checkout-text-field';
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
  inputs: ['color', 'content', 'styles', 'tag', 'variation']
})
@Component({
  selector: 'checkout-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'content', 'styles', 'tag', 'variation']
})
export class CheckoutTypography {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { PlugCheckout as IPlugCheckout } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/checkout/core/dist/collection/components/plug-checkout/plug-checkout';
export declare interface PlugCheckout extends Components.PlugCheckout {}
@ProxyCmp({
  inputs: ['clientId', 'dialogConfig', 'merchantId', 'paymentMethods', 'publicKey', 'sandbox', 'transactionConfig']
})
@Component({
  selector: 'plug-checkout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clientId', 'dialogConfig', 'merchantId', 'paymentMethods', 'publicKey', 'sandbox', 'transactionConfig'],
  outputs: ['paymentSuccess', 'paymentFailed']
})
export class PlugCheckout {
  /**  */
  paymentSuccess!: IPlugCheckout['paymentSuccess'];
  /**  */
  paymentFailed!: IPlugCheckout['paymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentSuccess', 'paymentFailed']);
  }
}

import { PlugCheckoutFull as IPlugCheckoutFull } from '@plug-checkout-full/core/dist/types/components/plug-checkout-full/plug-checkout-full';
export declare interface PlugCheckoutFull extends Components.PlugCheckoutFull {}
@ProxyCmp({
  inputs: ['clientId', 'dialogConfig', 'merchantId', 'pageConfig', 'paymentMethods', 'publicKey', 'sandbox', 'transactionConfig']
})
@Component({
  selector: 'plug-checkout-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clientId', 'dialogConfig', 'merchantId', 'pageConfig', 'paymentMethods', 'publicKey', 'sandbox', 'transactionConfig'],
  outputs: ['transactionSuccess', 'transactionFailed']
})
export class PlugCheckoutFull {
  /**  */
  transactionSuccess!: IPlugCheckoutFull['transactionSuccess'];
  /**  */
  transactionFailed!: IPlugCheckoutFull['transactionFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['transactionSuccess', 'transactionFailed']);
  }
}


export declare interface PlugCheckoutFullContent extends Components.PlugCheckoutFullContent {}

@Component({
  selector: 'plug-checkout-full-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PlugCheckoutFullContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PlugCheckoutFullFooter extends Components.PlugCheckoutFullFooter {}
@ProxyCmp({
  inputs: ['description']
})
@Component({
  selector: 'plug-checkout-full-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description']
})
export class PlugCheckoutFullFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PlugCheckoutFullHeader extends Components.PlugCheckoutFullHeader {}
@ProxyCmp({
  inputs: ['backRoute', 'brand']
})
@Component({
  selector: 'plug-checkout-full-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backRoute', 'brand']
})
export class PlugCheckoutFullHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { PlugCheckoutFullIdentification as IPlugCheckoutFullIdentification } from '@plug-checkout-full/core/dist/types/components/plug-checkout-full/partials/plug-checkout-full-identification/plug-checkout-full-identification';
export declare interface PlugCheckoutFullIdentification extends Components.PlugCheckoutFullIdentification {}
@ProxyCmp({
  inputs: ['formValues']
})
@Component({
  selector: 'plug-checkout-full-identification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['formValues'],
  outputs: ['submitForm', 'fieldChange', 'manyFieldsChange']
})
export class PlugCheckoutFullIdentification {
  /**  */
  submitForm!: IPlugCheckoutFullIdentification['submitForm'];
  /**  */
  fieldChange!: IPlugCheckoutFullIdentification['fieldChange'];
  /**  */
  manyFieldsChange!: IPlugCheckoutFullIdentification['manyFieldsChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['submitForm', 'fieldChange', 'manyFieldsChange']);
  }
}

import { PlugPayments as IPlugPayments } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/checkout/core/dist/collection/components/plug-payments/plug-payments';
export declare interface PlugPayments extends Components.PlugPayments {}
@ProxyCmp({
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'installments', 'merchantId', 'orderId', 'paymentMethods', 'pix', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'installments', 'merchantId', 'orderId', 'paymentMethods', 'pix', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor'],
  outputs: ['checkoutPaymentSuccess', 'checkoutPaymentFailed']
})
export class PlugPayments {
  /**  */
  checkoutPaymentSuccess!: IPlugPayments['checkoutPaymentSuccess'];
  /**  */
  checkoutPaymentFailed!: IPlugPayments['checkoutPaymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkoutPaymentSuccess', 'checkoutPaymentFailed']);
  }
}

import { PlugPaymentsBoleto as IPlugPaymentsBoleto } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/checkout/core/dist/collection/components/plug-payments-boleto/plug-payments-boleto';
export declare interface PlugPaymentsBoleto extends Components.PlugPaymentsBoleto {}
@ProxyCmp({
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments-boleto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'boleto', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'statementDescriptor'],
  outputs: ['boletoPaymentSuccess', 'boletoPaymentFailed']
})
export class PlugPaymentsBoleto {
  /**  */
  boletoPaymentSuccess!: IPlugPaymentsBoleto['boletoPaymentSuccess'];
  /**  */
  boletoPaymentFailed!: IPlugPaymentsBoleto['boletoPaymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['boletoPaymentSuccess', 'boletoPaymentFailed']);
  }
}

import { PlugPaymentsCredit as IPlugPaymentsCredit } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/checkout/core/dist/collection/components/plug-payments-credit/plug-payments-credit';
export declare interface PlugPaymentsCredit extends Components.PlugPaymentsCredit {}
@ProxyCmp({
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'installmentsConfig', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments-credit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'installmentsConfig', 'merchantId', 'orderId', 'publicKey', 'sandbox', 'showCreditCard', 'statementDescriptor'],
  outputs: ['creditPaymentSuccess', 'creditPaymentFailed']
})
export class PlugPaymentsCredit {
  /**  */
  creditPaymentSuccess!: IPlugPaymentsCredit['creditPaymentSuccess'];
  /**  */
  creditPaymentFailed!: IPlugPaymentsCredit['creditPaymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['creditPaymentSuccess', 'creditPaymentFailed']);
  }
}

import { PlugPaymentsCreditForm as IPlugPaymentsCreditForm } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/checkout/core/dist/collection/components/plug-payments-credit/partials/plug-payments-credit-form/plug-payments-credit-form';
export declare interface PlugPaymentsCreditForm extends Components.PlugPaymentsCreditForm {}
@ProxyCmp({
  inputs: ['amount', 'formValues', 'installmentsConfig', 'isLoading']
})
@Component({
  selector: 'plug-payments-credit-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'formValues', 'installmentsConfig', 'isLoading'],
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

import { PlugPaymentsPix as IPlugPaymentsPix } from '@plug-checkout-full/core/Users/leonardorpr/dev/plug/plug-checkout/packages/checkout/core/dist/collection/components/plug-payments-pix/plug-payments-pix';
export declare interface PlugPaymentsPix extends Components.PlugPaymentsPix {}
@ProxyCmp({
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'merchantId', 'orderId', 'pix', 'publicKey', 'sandbox', 'statementDescriptor']
})
@Component({
  selector: 'plug-payments-pix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'capture', 'clientId', 'currency', 'customer', 'customerId', 'description', 'dialogConfig', 'merchantId', 'orderId', 'pix', 'publicKey', 'sandbox', 'statementDescriptor'],
  outputs: ['pixPaymentSuccess', 'pixPaymentFailed']
})
export class PlugPaymentsPix {
  /**  */
  pixPaymentSuccess!: IPlugPaymentsPix['pixPaymentSuccess'];
  /**  */
  pixPaymentFailed!: IPlugPaymentsPix['pixPaymentFailed'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pixPaymentSuccess', 'pixPaymentFailed']);
  }
}
