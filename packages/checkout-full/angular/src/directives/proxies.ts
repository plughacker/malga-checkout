/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@malga-checkout-full/core';


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
  expandClick!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandClick']);
  }
}


export declare interface CheckoutButton extends Components.CheckoutButton {}
@ProxyCmp({
  inputs: ['clipboardContent', 'customClass', 'disabled', 'fullWidth', 'icon', 'isLoading', 'label', 'locale', 'type']
})
@Component({
  selector: 'checkout-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clipboardContent', 'customClass', 'disabled', 'fullWidth', 'icon', 'isLoading', 'label', 'locale', 'type'],
  outputs: ['clicked', 'focused', 'blured']
})
export class CheckoutButton {
  /**  */
  clicked!: EventEmitter<CustomEvent<void>>;
  /**  */
  focused!: EventEmitter<CustomEvent<void>>;
  /**  */
  blured!: EventEmitter<CustomEvent<void>>;
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
  countdownFinished!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['countdownFinished']);
  }
}


export declare interface CheckoutCreditCard extends Components.CheckoutCreditCard {}
@ProxyCmp({
  inputs: ['cvv', 'expiry', 'focused', 'issuer', 'locale', 'name', 'number', 'placeholderName', 'validity']
})
@Component({
  selector: 'checkout-credit-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cvv', 'expiry', 'focused', 'issuer', 'locale', 'name', 'number', 'placeholderName', 'validity']
})
export class CheckoutCreditCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CheckoutDropdown extends Components.CheckoutDropdown {}
@ProxyCmp({
  inputs: ['endIcon', 'fullWidth', 'label', 'options', 'startIcon', 'value']
})
@Component({
  selector: 'checkout-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['endIcon', 'fullWidth', 'label', 'options', 'startIcon', 'value'],
  outputs: ['changed']
})
export class CheckoutDropdown {
  /**  */
  changed!: EventEmitter<CustomEvent<{ value: string }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed']);
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


export declare interface CheckoutLoader extends Components.CheckoutLoader {}

@Component({
  selector: 'checkout-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CheckoutLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CheckoutManualPayment extends Components.CheckoutManualPayment {}
@ProxyCmp({
  inputs: ['fullWidth', 'locale', 'paymentMethod']
})
@Component({
  selector: 'checkout-manual-payment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fullWidth', 'locale', 'paymentMethod']
})
export class CheckoutManualPayment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CheckoutModal extends Components.CheckoutModal {}
@ProxyCmp({
  inputs: ['actionButtonLabel', 'amount', 'boletoWaitingPaymentMessage', 'currency', 'errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle', 'expirationDate', 'expirationTime', 'hasSuccessRedirectUrl', 'isSession', 'locale', 'mode', 'open', 'paymentCode', 'paymentImageUrl', 'pixEmptyProgressBarColor', 'pixFilledProgressBarColor', 'pixImportantMessages', 'pixWaitingPaymentMessage', 'successActionButtonLabel', 'successDescription']
})
@Component({
  selector: 'checkout-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionButtonLabel', 'amount', 'boletoWaitingPaymentMessage', 'currency', 'errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle', 'expirationDate', 'expirationTime', 'hasSuccessRedirectUrl', 'isSession', 'locale', 'mode', 'open', 'paymentCode', 'paymentImageUrl', 'pixEmptyProgressBarColor', 'pixFilledProgressBarColor', 'pixImportantMessages', 'pixWaitingPaymentMessage', 'successActionButtonLabel', 'successDescription'],
  outputs: ['successButtonClicked', 'errorButtonClicked', 'pixCountdownIsFinished']
})
export class CheckoutModal {
  /**  */
  successButtonClicked!: EventEmitter<CustomEvent<void>>;
  /**  */
  errorButtonClicked!: EventEmitter<CustomEvent<void>>;
  /**  */
  pixCountdownIsFinished!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['successButtonClicked', 'errorButtonClicked', 'pixCountdownIsFinished']);
  }
}


export declare interface CheckoutModalBoleto extends Components.CheckoutModalBoleto {}
@ProxyCmp({
  inputs: ['actionButtonLabel', 'amount', 'boletoCode', 'boletoImageUrl', 'currency', 'expirationDate', 'hasSuccessRedirectUrl', 'isSession', 'locale', 'waitingPaymentMessage']
})
@Component({
  selector: 'checkout-modal-boleto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionButtonLabel', 'amount', 'boletoCode', 'boletoImageUrl', 'currency', 'expirationDate', 'hasSuccessRedirectUrl', 'isSession', 'locale', 'waitingPaymentMessage'],
  outputs: ['boletoActionButtonIsClicked']
})
export class CheckoutModalBoleto {
  /**  */
  boletoActionButtonIsClicked!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['boletoActionButtonIsClicked']);
  }
}


export declare interface CheckoutModalError extends Components.CheckoutModalError {}
@ProxyCmp({
  inputs: ['errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle', 'locale']
})
@Component({
  selector: 'checkout-modal-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['errorActionButtonLabel', 'errorDescription', 'errorSubtitle', 'errorTitle', 'locale'],
  outputs: ['errorActionButtonClicked']
})
export class CheckoutModalError {
  /**  */
  errorActionButtonClicked!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['errorActionButtonClicked']);
  }
}


export declare interface CheckoutModalPix extends Components.CheckoutModalPix {}
@ProxyCmp({
  inputs: ['actionButtonLabel', 'amount', 'countdownEmptyProgressBarColor', 'countdownFilledProgressBarColor', 'currency', 'expirationTime', 'hasSuccessRedirectUrl', 'importantMessages', 'isSession', 'locale', 'qrCodeIdentificator', 'qrCodeImageUrl', 'waitingPaymentMessage']
})
@Component({
  selector: 'checkout-modal-pix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionButtonLabel', 'amount', 'countdownEmptyProgressBarColor', 'countdownFilledProgressBarColor', 'currency', 'expirationTime', 'hasSuccessRedirectUrl', 'importantMessages', 'isSession', 'locale', 'qrCodeIdentificator', 'qrCodeImageUrl', 'waitingPaymentMessage'],
  outputs: ['countdownIsFinished', 'pixActionButtonIsClicked']
})
export class CheckoutModalPix {
  /**  */
  countdownIsFinished!: EventEmitter<CustomEvent<void>>;
  /**  */
  pixActionButtonIsClicked!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['countdownIsFinished', 'pixActionButtonIsClicked']);
  }
}


export declare interface CheckoutModalSuccess extends Components.CheckoutModalSuccess {}
@ProxyCmp({
  inputs: ['hasSuccessRedirectUrl', 'locale', 'successActionButtonLabel', 'successDescription']
})
@Component({
  selector: 'checkout-modal-success',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hasSuccessRedirectUrl', 'locale', 'successActionButtonLabel', 'successDescription'],
  outputs: ['successActionButtonClicked']
})
export class CheckoutModalSuccess {
  /**  */
  successActionButtonClicked!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['successActionButtonClicked']);
  }
}


export declare interface CheckoutOrderSummary extends Components.CheckoutOrderSummary {}
@ProxyCmp({
  inputs: ['amount', 'currency', 'delivery', 'fullWidth', 'isLoading', 'label', 'locale', 'products']
})
@Component({
  selector: 'checkout-order-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['amount', 'currency', 'delivery', 'fullWidth', 'isLoading', 'label', 'locale', 'products']
})
export class CheckoutOrderSummary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CheckoutRadioFieldChangeEvent as ICheckoutRadioFieldCheckoutRadioFieldChangeEvent } from '@malga-checkout-full/core';
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
  inputed!: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**  */
  clicked!: EventEmitter<CustomEvent<MouseEvent>>;
  /**  */
  changed!: EventEmitter<CustomEvent<ICheckoutRadioFieldCheckoutRadioFieldChangeEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputed', 'clicked', 'changed']);
  }
}

import { CheckoutSelectFieldChangeEvent as ICheckoutSelectFieldCheckoutSelectFieldChangeEvent } from '@malga-checkout-full/core';
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
  inputed!: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**  */
  changed!: EventEmitter<CustomEvent<ICheckoutSelectFieldCheckoutSelectFieldChangeEvent>>;
  /**  */
  blurred!: EventEmitter<CustomEvent<void>>;
  /**  */
  focused!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputed', 'changed', 'blurred', 'focused']);
  }
}


export declare interface CheckoutSkeleton extends Components.CheckoutSkeleton {}
@ProxyCmp({
  inputs: ['class', 'width']
})
@Component({
  selector: 'checkout-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['class', 'width']
})
export class CheckoutSkeleton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CheckoutSwitch extends Components.CheckoutSwitch {}
@ProxyCmp({
  inputs: ['checked', 'class']
})
@Component({
  selector: 'checkout-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'class'],
  outputs: ['changed']
})
export class CheckoutSwitch {
  /**  */
  changed!: EventEmitter<CustomEvent<boolean>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed']);
  }
}

import { CheckoutTextFieldChangeEvent as ICheckoutTextFieldCheckoutTextFieldChangeEvent } from '@malga-checkout-full/core';
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
  inputed!: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**  */
  changed!: EventEmitter<CustomEvent<ICheckoutTextFieldCheckoutTextFieldChangeEvent>>;
  /**  */
  blurred!: EventEmitter<CustomEvent<FocusEvent>>;
  /**  */
  focused!: EventEmitter<CustomEvent<FocusEvent>>;
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

import { SessionNormalized as IMalgaCheckoutSessionNormalized } from '@malga-checkout-full/core';
import { MalgaPaymentsSuccess as IMalgaCheckoutMalgaPaymentsSuccess } from '@malga-checkout-full/core';
import { MalgaPaymentsError as IMalgaCheckoutMalgaPaymentsError } from '@malga-checkout-full/core';
export declare interface MalgaCheckout extends Components.MalgaCheckout {}
@ProxyCmp({
  inputs: ['clientId', 'debug', 'dialogConfig', 'idempotencyKey', 'isLoading', 'locale', 'merchantId', 'paymentMethods', 'publicKey', 'sandbox', 'sessionId', 'transactionConfig']
})
@Component({
  selector: 'malga-checkout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clientId', 'debug', 'dialogConfig', 'idempotencyKey', 'isLoading', 'locale', 'merchantId', 'paymentMethods', 'publicKey', 'sandbox', 'sessionId', 'transactionConfig'],
  outputs: ['paymentSessionFetch', 'paymentSuccess', 'paymentFailed']
})
export class MalgaCheckout {
  /**  */
  paymentSessionFetch!: EventEmitter<CustomEvent<{ paymentSession: IMalgaCheckoutSessionNormalized }>>;
  /**  */
  paymentSuccess!: EventEmitter<CustomEvent<{ data: IMalgaCheckoutMalgaPaymentsSuccess }>>;
  /**  */
  paymentFailed!: EventEmitter<CustomEvent<{ error: IMalgaCheckoutMalgaPaymentsError }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentSessionFetch', 'paymentSuccess', 'paymentFailed']);
  }
}

import { MalgaCheckoutFullChargeSuccess as IMalgaCheckoutFullMalgaCheckoutFullChargeSuccess } from '@malga-checkout-full/core';
import { MalgaCheckoutFullChargeError as IMalgaCheckoutFullMalgaCheckoutFullChargeError } from '@malga-checkout-full/core';
export declare interface MalgaCheckoutFull extends Components.MalgaCheckoutFull {}
@ProxyCmp({
  inputs: ['clientId', 'debug', 'dialogConfig', 'idempotencyKey', 'locale', 'merchantId', 'pageConfig', 'paymentMethods', 'publicKey', 'sandbox', 'sessionId', 'transactionConfig']
})
@Component({
  selector: 'malga-checkout-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clientId', 'debug', 'dialogConfig', 'idempotencyKey', 'locale', 'merchantId', 'pageConfig', 'paymentMethods', 'publicKey', 'sandbox', 'sessionId', 'transactionConfig'],
  outputs: ['transactionSuccess', 'transactionFailed']
})
export class MalgaCheckoutFull {
  /**  */
  transactionSuccess!: EventEmitter<CustomEvent<{ data: IMalgaCheckoutFullMalgaCheckoutFullChargeSuccess }>>;
  /**  */
  transactionFailed!: EventEmitter<CustomEvent<{ error: IMalgaCheckoutFullMalgaCheckoutFullChargeError }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['transactionSuccess', 'transactionFailed']);
  }
}


export declare interface MalgaCheckoutFullContent extends Components.MalgaCheckoutFullContent {}

@Component({
  selector: 'malga-checkout-full-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MalgaCheckoutFullContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Locale as IMalgaCheckoutFullFooterLocale } from '@malga-checkout-full/core';
export declare interface MalgaCheckoutFullFooter extends Components.MalgaCheckoutFullFooter {}
@ProxyCmp({
  inputs: ['description', 'language']
})
@Component({
  selector: 'malga-checkout-full-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'language'],
  outputs: ['changeLanguage']
})
export class MalgaCheckoutFullFooter {
  /**  */
  changeLanguage!: EventEmitter<CustomEvent<{ value: IMalgaCheckoutFullFooterLocale }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeLanguage']);
  }
}

import { Locale as IMalgaCheckoutFullHeaderLocale } from '@malga-checkout-full/core';
export declare interface MalgaCheckoutFullHeader extends Components.MalgaCheckoutFullHeader {}
@ProxyCmp({
  inputs: ['backRoute', 'brand', 'isLoading', 'language', 'locale']
})
@Component({
  selector: 'malga-checkout-full-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backRoute', 'brand', 'isLoading', 'language', 'locale'],
  outputs: ['changeLanguage']
})
export class MalgaCheckoutFullHeader {
  /**  */
  changeLanguage!: EventEmitter<CustomEvent<{ value: IMalgaCheckoutFullHeaderLocale }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeLanguage']);
  }
}

import { MalgaCheckoutFullIdentificationFormValues as IMalgaCheckoutFullIdentificationMalgaCheckoutFullIdentificationFormValues } from '@malga-checkout-full/core';
export declare interface MalgaCheckoutFullIdentification extends Components.MalgaCheckoutFullIdentification {}
@ProxyCmp({
  inputs: ['formValues', 'internationalCustomer', 'isLoading', 'locale']
})
@Component({
  selector: 'malga-checkout-full-identification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['formValues', 'internationalCustomer', 'isLoading', 'locale'],
  outputs: ['submitForm', 'fieldChange', 'manyFieldsChange']
})
export class MalgaCheckoutFullIdentification {
  /**  */
  submitForm!: EventEmitter<CustomEvent<void>>;
  /**  */
  fieldChange!: EventEmitter<CustomEvent<{ field: string; value: string }>>;
  /**  */
  manyFieldsChange!: EventEmitter<CustomEvent<{ customerFormValues: IMalgaCheckoutFullIdentificationMalgaCheckoutFullIdentificationFormValues }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['submitForm', 'fieldChange', 'manyFieldsChange']);
  }
}

import { MalgaPaymentsError as IMalgaPaymentsMalgaPaymentsError } from '@malga-checkout-full/core';
export declare interface MalgaPayments extends Components.MalgaPayments {}
@ProxyCmp({
  inputs: ['paymentMethods']
})
@Component({
  selector: 'malga-payments',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['paymentMethods'],
  outputs: ['paymentFail']
})
export class MalgaPayments {
  /**  */
  paymentFail!: EventEmitter<CustomEvent<{ error: IMalgaPaymentsMalgaPaymentsError }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['paymentFail']);
  }
}


export declare interface MalgaPaymentsBoleto extends Components.MalgaPaymentsBoleto {}

@Component({
  selector: 'malga-payments-boleto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MalgaPaymentsBoleto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MalgaPaymentsCredit extends Components.MalgaPaymentsCredit {}

@Component({
  selector: 'malga-payments-credit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MalgaPaymentsCredit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MalgaPaymentsCreditForm extends Components.MalgaPaymentsCreditForm {}

@Component({
  selector: 'malga-payments-credit-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  outputs: ['currentFieldChange']
})
export class MalgaPaymentsCreditForm {
  /**  */
  currentFieldChange!: EventEmitter<CustomEvent<{ field: string }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['currentFieldChange']);
  }
}


export declare interface MalgaPaymentsCreditSavedCards extends Components.MalgaPaymentsCreditSavedCards {}

@Component({
  selector: 'malga-payments-credit-saved-cards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MalgaPaymentsCreditSavedCards {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { MalgaPaymentsError as IMalgaPaymentsPixMalgaPaymentsError } from '@malga-checkout-full/core';
export declare interface MalgaPaymentsPix extends Components.MalgaPaymentsPix {}

@Component({
  selector: 'malga-payments-pix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  outputs: ['pixPaymentFailed']
})
export class MalgaPaymentsPix {
  /**  */
  pixPaymentFailed!: EventEmitter<CustomEvent<{ error: IMalgaPaymentsPixMalgaPaymentsError }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pixPaymentFailed']);
  }
}
