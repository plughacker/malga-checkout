/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CheckoutIconNames } from "./components/checkout-icon/checkout-icon.types";
import { CheckoutButtonType } from "./components/checkout-button/checkout-button.types";
import { CheckoutManualPaymentDescriptions } from "./components/checkout-manual-payment/checkout-manual-payment.types";
import { CheckoutModalMode } from "./components/checkout-modal/checkout-modal.types";
import { Product } from "./components/checkout-order-summary/checkout-order-summary.types";
import { CheckoutRadioFieldChangeEvent, CheckoutRadioFieldValue } from "./components/checkout-radio-field/checkout-radio-field.types";
import { CheckoutSelectFieldChangeEvent, CheckoutSelectFieldOptions, CheckoutSelectFieldValue } from "./components/checkout-select-field/checkout-select-field.types";
import { CheckoutTextFieldChangeEvent, CheckoutTextFieldMode, CheckoutTextFieldType, CheckoutTextFieldValue } from "./components/checkout-text-field/checkout-text-field.types";
import { CheckoutTypographyColor, CheckoutTypographyVariation } from "./components/checkout-typography/checkout-typography.types";
export namespace Components {
    interface CheckoutAccordion {
        "contentHeight"?: string;
        "fullWidth": boolean;
        "isEditable": boolean;
        "label": string;
        "opened": boolean;
    }
    interface CheckoutButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "icon"?: CheckoutIconNames;
        "isLoading"?: boolean;
        "label": string;
        "type"?: CheckoutButtonType;
    }
    interface CheckoutClipboardButton {
        "clipboardContent": string;
        "label": string;
    }
    interface CheckoutCountdown {
        "emptyProgressBarColor": string;
        "expirationTime"?: number;
        "filledProgressBarColor": string;
    }
    interface CheckoutCreditCard {
        "cvv": string;
        "expiry": string;
        "focused": string;
        "issuer": string;
        "locale": { valid: string };
        "name": string;
        "number": string;
        "placeholders": { name: string };
    }
    interface CheckoutErrorMessage {
        "customClass"?: string;
        "fullWidth": boolean;
        "message": string;
    }
    interface CheckoutIcon {
        "class"?: string;
        "icon": CheckoutIconNames;
    }
    interface CheckoutManualPayment {
        "fullWidth": boolean;
        "isLoading": boolean;
        "paymentMethod": CheckoutManualPaymentDescriptions;
    }
    interface CheckoutModal {
        "amount": number;
        "errorDescription"?: string;
        "errorTitle"?: string;
        "expirationDate"?: string;
        "expirationTime"?: number;
        "mode": CheckoutModalMode;
        "open": boolean;
        "paymentCode": string;
        "paymentImageUrl": string;
    }
    interface CheckoutModalBoleto {
        "amount": number;
        "boletoCode": string;
        "boletoImageUrl": string;
        "expirationDate": string;
    }
    interface CheckoutModalError {
        "errorDescription"?: string;
        "errorTitle"?: string;
    }
    interface CheckoutModalPix {
        "amount": number;
        "expirationDate": string;
        "expirationTime": number;
        "qrCodeIdentificator": string;
        "qrCodeImageUrl": string;
    }
    interface CheckoutModalSuccess {
    }
    interface CheckoutOrderSummary {
        "amount": number;
        "delivery": number;
        "fullWidth": boolean;
        "label": string;
        "products"?: Product[];
    }
    interface CheckoutRadioField {
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "endIcon"?: CheckoutIconNames;
        "fullWidth": boolean;
        "isChecked": boolean;
        "label": string;
        "value"?: CheckoutRadioFieldValue;
    }
    interface CheckoutSelectField {
        "autofocus": boolean;
        "customContainerClass"?: string;
        "customLabelClass"?: string;
        "customSelectClass"?: string;
        "disabled": boolean;
        "fullWidth": boolean;
        "hasError"?: boolean;
        "label"?: string;
        "name": string;
        "noneOptionLabel": string;
        "options": CheckoutSelectFieldOptions[];
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "value"?: CheckoutSelectFieldValue;
    }
    interface CheckoutTextField {
        "autofocus": boolean;
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "disabled": boolean;
        "fullWidth": boolean;
        "hasError"?: boolean;
        "hasValidation"?: boolean;
        "inputmode": CheckoutTextFieldMode;
        "label"?: string;
        "mask"?: string;
        "max"?: string;
        "maxlength"?: number;
        "min"?: string;
        "minlength"?: number;
        "multiple"?: boolean;
        "name": string;
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "startIcon"?: CheckoutIconNames;
        "type": CheckoutTextFieldType;
        "value"?: CheckoutTextFieldValue;
    }
    interface CheckoutTypography {
        "color": CheckoutTypographyColor;
        "content": string;
        "styles": {};
        "tag": string;
        "variation": CheckoutTypographyVariation;
    }
}
declare global {
    interface HTMLCheckoutAccordionElement extends Components.CheckoutAccordion, HTMLStencilElement {
    }
    var HTMLCheckoutAccordionElement: {
        prototype: HTMLCheckoutAccordionElement;
        new (): HTMLCheckoutAccordionElement;
    };
    interface HTMLCheckoutButtonElement extends Components.CheckoutButton, HTMLStencilElement {
    }
    var HTMLCheckoutButtonElement: {
        prototype: HTMLCheckoutButtonElement;
        new (): HTMLCheckoutButtonElement;
    };
    interface HTMLCheckoutClipboardButtonElement extends Components.CheckoutClipboardButton, HTMLStencilElement {
    }
    var HTMLCheckoutClipboardButtonElement: {
        prototype: HTMLCheckoutClipboardButtonElement;
        new (): HTMLCheckoutClipboardButtonElement;
    };
    interface HTMLCheckoutCountdownElement extends Components.CheckoutCountdown, HTMLStencilElement {
    }
    var HTMLCheckoutCountdownElement: {
        prototype: HTMLCheckoutCountdownElement;
        new (): HTMLCheckoutCountdownElement;
    };
    interface HTMLCheckoutCreditCardElement extends Components.CheckoutCreditCard, HTMLStencilElement {
    }
    var HTMLCheckoutCreditCardElement: {
        prototype: HTMLCheckoutCreditCardElement;
        new (): HTMLCheckoutCreditCardElement;
    };
    interface HTMLCheckoutErrorMessageElement extends Components.CheckoutErrorMessage, HTMLStencilElement {
    }
    var HTMLCheckoutErrorMessageElement: {
        prototype: HTMLCheckoutErrorMessageElement;
        new (): HTMLCheckoutErrorMessageElement;
    };
    interface HTMLCheckoutIconElement extends Components.CheckoutIcon, HTMLStencilElement {
    }
    var HTMLCheckoutIconElement: {
        prototype: HTMLCheckoutIconElement;
        new (): HTMLCheckoutIconElement;
    };
    interface HTMLCheckoutManualPaymentElement extends Components.CheckoutManualPayment, HTMLStencilElement {
    }
    var HTMLCheckoutManualPaymentElement: {
        prototype: HTMLCheckoutManualPaymentElement;
        new (): HTMLCheckoutManualPaymentElement;
    };
    interface HTMLCheckoutModalElement extends Components.CheckoutModal, HTMLStencilElement {
    }
    var HTMLCheckoutModalElement: {
        prototype: HTMLCheckoutModalElement;
        new (): HTMLCheckoutModalElement;
    };
    interface HTMLCheckoutModalBoletoElement extends Components.CheckoutModalBoleto, HTMLStencilElement {
    }
    var HTMLCheckoutModalBoletoElement: {
        prototype: HTMLCheckoutModalBoletoElement;
        new (): HTMLCheckoutModalBoletoElement;
    };
    interface HTMLCheckoutModalErrorElement extends Components.CheckoutModalError, HTMLStencilElement {
    }
    var HTMLCheckoutModalErrorElement: {
        prototype: HTMLCheckoutModalErrorElement;
        new (): HTMLCheckoutModalErrorElement;
    };
    interface HTMLCheckoutModalPixElement extends Components.CheckoutModalPix, HTMLStencilElement {
    }
    var HTMLCheckoutModalPixElement: {
        prototype: HTMLCheckoutModalPixElement;
        new (): HTMLCheckoutModalPixElement;
    };
    interface HTMLCheckoutModalSuccessElement extends Components.CheckoutModalSuccess, HTMLStencilElement {
    }
    var HTMLCheckoutModalSuccessElement: {
        prototype: HTMLCheckoutModalSuccessElement;
        new (): HTMLCheckoutModalSuccessElement;
    };
    interface HTMLCheckoutOrderSummaryElement extends Components.CheckoutOrderSummary, HTMLStencilElement {
    }
    var HTMLCheckoutOrderSummaryElement: {
        prototype: HTMLCheckoutOrderSummaryElement;
        new (): HTMLCheckoutOrderSummaryElement;
    };
    interface HTMLCheckoutRadioFieldElement extends Components.CheckoutRadioField, HTMLStencilElement {
    }
    var HTMLCheckoutRadioFieldElement: {
        prototype: HTMLCheckoutRadioFieldElement;
        new (): HTMLCheckoutRadioFieldElement;
    };
    interface HTMLCheckoutSelectFieldElement extends Components.CheckoutSelectField, HTMLStencilElement {
    }
    var HTMLCheckoutSelectFieldElement: {
        prototype: HTMLCheckoutSelectFieldElement;
        new (): HTMLCheckoutSelectFieldElement;
    };
    interface HTMLCheckoutTextFieldElement extends Components.CheckoutTextField, HTMLStencilElement {
    }
    var HTMLCheckoutTextFieldElement: {
        prototype: HTMLCheckoutTextFieldElement;
        new (): HTMLCheckoutTextFieldElement;
    };
    interface HTMLCheckoutTypographyElement extends Components.CheckoutTypography, HTMLStencilElement {
    }
    var HTMLCheckoutTypographyElement: {
        prototype: HTMLCheckoutTypographyElement;
        new (): HTMLCheckoutTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "checkout-accordion": HTMLCheckoutAccordionElement;
        "checkout-button": HTMLCheckoutButtonElement;
        "checkout-clipboard-button": HTMLCheckoutClipboardButtonElement;
        "checkout-countdown": HTMLCheckoutCountdownElement;
        "checkout-credit-card": HTMLCheckoutCreditCardElement;
        "checkout-error-message": HTMLCheckoutErrorMessageElement;
        "checkout-icon": HTMLCheckoutIconElement;
        "checkout-manual-payment": HTMLCheckoutManualPaymentElement;
        "checkout-modal": HTMLCheckoutModalElement;
        "checkout-modal-boleto": HTMLCheckoutModalBoletoElement;
        "checkout-modal-error": HTMLCheckoutModalErrorElement;
        "checkout-modal-pix": HTMLCheckoutModalPixElement;
        "checkout-modal-success": HTMLCheckoutModalSuccessElement;
        "checkout-order-summary": HTMLCheckoutOrderSummaryElement;
        "checkout-radio-field": HTMLCheckoutRadioFieldElement;
        "checkout-select-field": HTMLCheckoutSelectFieldElement;
        "checkout-text-field": HTMLCheckoutTextFieldElement;
        "checkout-typography": HTMLCheckoutTypographyElement;
    }
}
declare namespace LocalJSX {
    interface CheckoutAccordion {
        "contentHeight"?: string;
        "fullWidth"?: boolean;
        "isEditable"?: boolean;
        "label"?: string;
        "onExpandClick"?: (event: CustomEvent<void>) => void;
        "opened"?: boolean;
    }
    interface CheckoutButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "icon"?: CheckoutIconNames;
        "isLoading"?: boolean;
        "label"?: string;
        "onBlured"?: (event: CustomEvent<void>) => void;
        "onClicked"?: (event: CustomEvent<void>) => void;
        "onFocused"?: (event: CustomEvent<void>) => void;
        "type"?: CheckoutButtonType;
    }
    interface CheckoutClipboardButton {
        "clipboardContent"?: string;
        "label"?: string;
    }
    interface CheckoutCountdown {
        "emptyProgressBarColor"?: string;
        "expirationTime"?: number;
        "filledProgressBarColor"?: string;
    }
    interface CheckoutCreditCard {
        "cvv"?: string;
        "expiry"?: string;
        "focused"?: string;
        "issuer"?: string;
        "locale"?: { valid: string };
        "name"?: string;
        "number"?: string;
        "placeholders"?: { name: string };
    }
    interface CheckoutErrorMessage {
        "customClass"?: string;
        "fullWidth"?: boolean;
        "message"?: string;
    }
    interface CheckoutIcon {
        "class"?: string;
        "icon"?: CheckoutIconNames;
    }
    interface CheckoutManualPayment {
        "fullWidth"?: boolean;
        "isLoading"?: boolean;
        "onPaymentClick"?: (event: CustomEvent<void>) => void;
        "paymentMethod"?: CheckoutManualPaymentDescriptions;
    }
    interface CheckoutModal {
        "amount"?: number;
        "errorDescription"?: string;
        "errorTitle"?: string;
        "expirationDate"?: string;
        "expirationTime"?: number;
        "mode"?: CheckoutModalMode;
        "onErrorButtonClicked"?: (event: CustomEvent<any>) => void;
        "onSuccessButtonClicked"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "paymentCode"?: string;
        "paymentImageUrl"?: string;
    }
    interface CheckoutModalBoleto {
        "amount"?: number;
        "boletoCode"?: string;
        "boletoImageUrl"?: string;
        "expirationDate"?: string;
    }
    interface CheckoutModalError {
        "errorDescription"?: string;
        "errorTitle"?: string;
        "onErrorButtonClicked"?: (event: CustomEvent<void>) => void;
    }
    interface CheckoutModalPix {
        "amount"?: number;
        "expirationDate"?: string;
        "expirationTime"?: number;
        "qrCodeIdentificator"?: string;
        "qrCodeImageUrl"?: string;
    }
    interface CheckoutModalSuccess {
        "onSuccessButtonClicked"?: (event: CustomEvent<void>) => void;
    }
    interface CheckoutOrderSummary {
        "amount"?: number;
        "delivery"?: number;
        "fullWidth"?: boolean;
        "label"?: string;
        "products"?: Product[];
    }
    interface CheckoutRadioField {
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "endIcon"?: CheckoutIconNames;
        "fullWidth"?: boolean;
        "isChecked"?: boolean;
        "label"?: string;
        "onChanged"?: (event: CustomEvent<CheckoutRadioFieldChangeEvent>) => void;
        "onClicked"?: (event: CustomEvent<MouseEvent>) => void;
        "onInputed"?: (event: CustomEvent<KeyboardEvent>) => void;
        "value"?: CheckoutRadioFieldValue;
    }
    interface CheckoutSelectField {
        "autofocus"?: boolean;
        "customContainerClass"?: string;
        "customLabelClass"?: string;
        "customSelectClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "hasError"?: boolean;
        "label"?: string;
        "name"?: string;
        "noneOptionLabel"?: string;
        "onBlurred"?: (event: CustomEvent<void>) => void;
        "onChanged"?: (event: CustomEvent<CheckoutSelectFieldChangeEvent>) => void;
        "onFocused"?: (event: CustomEvent<void>) => void;
        "onInputed"?: (event: CustomEvent<KeyboardEvent>) => void;
        "options"?: CheckoutSelectFieldOptions[];
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "value"?: CheckoutSelectFieldValue;
    }
    interface CheckoutTextField {
        "autofocus"?: boolean;
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "hasError"?: boolean;
        "hasValidation"?: boolean;
        "inputmode"?: CheckoutTextFieldMode;
        "label"?: string;
        "mask"?: string;
        "max"?: string;
        "maxlength"?: number;
        "min"?: string;
        "minlength"?: number;
        "multiple"?: boolean;
        "name"?: string;
        "onBlurred"?: (event: CustomEvent<FocusEvent>) => void;
        "onChanged"?: (event: CustomEvent<CheckoutTextFieldChangeEvent>) => void;
        "onFocused"?: (event: CustomEvent<FocusEvent>) => void;
        "onInputed"?: (event: CustomEvent<KeyboardEvent>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "startIcon"?: CheckoutIconNames;
        "type"?: CheckoutTextFieldType;
        "value"?: CheckoutTextFieldValue;
    }
    interface CheckoutTypography {
        "color"?: CheckoutTypographyColor;
        "content"?: string;
        "styles"?: {};
        "tag"?: string;
        "variation"?: CheckoutTypographyVariation;
    }
    interface IntrinsicElements {
        "checkout-accordion": CheckoutAccordion;
        "checkout-button": CheckoutButton;
        "checkout-clipboard-button": CheckoutClipboardButton;
        "checkout-countdown": CheckoutCountdown;
        "checkout-credit-card": CheckoutCreditCard;
        "checkout-error-message": CheckoutErrorMessage;
        "checkout-icon": CheckoutIcon;
        "checkout-manual-payment": CheckoutManualPayment;
        "checkout-modal": CheckoutModal;
        "checkout-modal-boleto": CheckoutModalBoleto;
        "checkout-modal-error": CheckoutModalError;
        "checkout-modal-pix": CheckoutModalPix;
        "checkout-modal-success": CheckoutModalSuccess;
        "checkout-order-summary": CheckoutOrderSummary;
        "checkout-radio-field": CheckoutRadioField;
        "checkout-select-field": CheckoutSelectField;
        "checkout-text-field": CheckoutTextField;
        "checkout-typography": CheckoutTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "checkout-accordion": LocalJSX.CheckoutAccordion & JSXBase.HTMLAttributes<HTMLCheckoutAccordionElement>;
            "checkout-button": LocalJSX.CheckoutButton & JSXBase.HTMLAttributes<HTMLCheckoutButtonElement>;
            "checkout-clipboard-button": LocalJSX.CheckoutClipboardButton & JSXBase.HTMLAttributes<HTMLCheckoutClipboardButtonElement>;
            "checkout-countdown": LocalJSX.CheckoutCountdown & JSXBase.HTMLAttributes<HTMLCheckoutCountdownElement>;
            "checkout-credit-card": LocalJSX.CheckoutCreditCard & JSXBase.HTMLAttributes<HTMLCheckoutCreditCardElement>;
            "checkout-error-message": LocalJSX.CheckoutErrorMessage & JSXBase.HTMLAttributes<HTMLCheckoutErrorMessageElement>;
            "checkout-icon": LocalJSX.CheckoutIcon & JSXBase.HTMLAttributes<HTMLCheckoutIconElement>;
            "checkout-manual-payment": LocalJSX.CheckoutManualPayment & JSXBase.HTMLAttributes<HTMLCheckoutManualPaymentElement>;
            "checkout-modal": LocalJSX.CheckoutModal & JSXBase.HTMLAttributes<HTMLCheckoutModalElement>;
            "checkout-modal-boleto": LocalJSX.CheckoutModalBoleto & JSXBase.HTMLAttributes<HTMLCheckoutModalBoletoElement>;
            "checkout-modal-error": LocalJSX.CheckoutModalError & JSXBase.HTMLAttributes<HTMLCheckoutModalErrorElement>;
            "checkout-modal-pix": LocalJSX.CheckoutModalPix & JSXBase.HTMLAttributes<HTMLCheckoutModalPixElement>;
            "checkout-modal-success": LocalJSX.CheckoutModalSuccess & JSXBase.HTMLAttributes<HTMLCheckoutModalSuccessElement>;
            "checkout-order-summary": LocalJSX.CheckoutOrderSummary & JSXBase.HTMLAttributes<HTMLCheckoutOrderSummaryElement>;
            "checkout-radio-field": LocalJSX.CheckoutRadioField & JSXBase.HTMLAttributes<HTMLCheckoutRadioFieldElement>;
            "checkout-select-field": LocalJSX.CheckoutSelectField & JSXBase.HTMLAttributes<HTMLCheckoutSelectFieldElement>;
            "checkout-text-field": LocalJSX.CheckoutTextField & JSXBase.HTMLAttributes<HTMLCheckoutTextFieldElement>;
            "checkout-typography": LocalJSX.CheckoutTypography & JSXBase.HTMLAttributes<HTMLCheckoutTypographyElement>;
        }
    }
}
