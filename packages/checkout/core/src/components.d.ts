/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Locale } from "@malga-checkout/i18n/dist/utils";
import { MalgaCheckoutDialog, MalgaCheckoutPaymentMethods, MalgaCheckoutTransaction } from "./components/malga-checkout/malga-checkout.types";
import { SessionNormalized } from "./services/sessions/sessions.types";
import { MalgaPaymentsSuccess } from "./types/malga-payments-success.types";
import { MalgaPaymentsError } from "./types/malga-payments-error.types";
import { PaymentMethods } from "./components/malga-payments/malga-payments.types";
export namespace Components {
    interface MalgaCheckout {
        "clientId"?: string;
        "debug": boolean;
        "dialogConfig"?: MalgaCheckoutDialog;
        "idempotencyKey"?: string;
        "isLoading": boolean;
        "locale"?: Locale;
        "merchantId"?: string;
        "paymentMethods"?: MalgaCheckoutPaymentMethods;
        "publicKey": string;
        "sandbox": boolean;
        "sessionId"?: string;
        "transactionConfig"?: MalgaCheckoutTransaction;
    }
    interface MalgaPayments {
        "paymentMethods": PaymentMethods;
    }
    interface MalgaPaymentsBoleto {
    }
    interface MalgaPaymentsCredit {
    }
    interface MalgaPaymentsCreditForm {
    }
    interface MalgaPaymentsCreditSavedCards {
    }
    interface MalgaPaymentsDrip {
    }
    interface MalgaPaymentsDripContent {
    }
    interface MalgaPaymentsDripIframe {
    }
    interface MalgaPaymentsDripInstallments {
        "cashback": string;
        "installments": { dueDate: string; amount: string }[];
    }
    interface MalgaPaymentsPix {
    }
}
declare global {
    interface HTMLMalgaCheckoutElement extends Components.MalgaCheckout, HTMLStencilElement {
    }
    var HTMLMalgaCheckoutElement: {
        prototype: HTMLMalgaCheckoutElement;
        new (): HTMLMalgaCheckoutElement;
    };
    interface HTMLMalgaPaymentsElement extends Components.MalgaPayments, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsElement: {
        prototype: HTMLMalgaPaymentsElement;
        new (): HTMLMalgaPaymentsElement;
    };
    interface HTMLMalgaPaymentsBoletoElement extends Components.MalgaPaymentsBoleto, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsBoletoElement: {
        prototype: HTMLMalgaPaymentsBoletoElement;
        new (): HTMLMalgaPaymentsBoletoElement;
    };
    interface HTMLMalgaPaymentsCreditElement extends Components.MalgaPaymentsCredit, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsCreditElement: {
        prototype: HTMLMalgaPaymentsCreditElement;
        new (): HTMLMalgaPaymentsCreditElement;
    };
    interface HTMLMalgaPaymentsCreditFormElement extends Components.MalgaPaymentsCreditForm, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsCreditFormElement: {
        prototype: HTMLMalgaPaymentsCreditFormElement;
        new (): HTMLMalgaPaymentsCreditFormElement;
    };
    interface HTMLMalgaPaymentsCreditSavedCardsElement extends Components.MalgaPaymentsCreditSavedCards, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsCreditSavedCardsElement: {
        prototype: HTMLMalgaPaymentsCreditSavedCardsElement;
        new (): HTMLMalgaPaymentsCreditSavedCardsElement;
    };
    interface HTMLMalgaPaymentsDripElement extends Components.MalgaPaymentsDrip, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsDripElement: {
        prototype: HTMLMalgaPaymentsDripElement;
        new (): HTMLMalgaPaymentsDripElement;
    };
    interface HTMLMalgaPaymentsDripContentElement extends Components.MalgaPaymentsDripContent, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsDripContentElement: {
        prototype: HTMLMalgaPaymentsDripContentElement;
        new (): HTMLMalgaPaymentsDripContentElement;
    };
    interface HTMLMalgaPaymentsDripIframeElement extends Components.MalgaPaymentsDripIframe, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsDripIframeElement: {
        prototype: HTMLMalgaPaymentsDripIframeElement;
        new (): HTMLMalgaPaymentsDripIframeElement;
    };
    interface HTMLMalgaPaymentsDripInstallmentsElement extends Components.MalgaPaymentsDripInstallments, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsDripInstallmentsElement: {
        prototype: HTMLMalgaPaymentsDripInstallmentsElement;
        new (): HTMLMalgaPaymentsDripInstallmentsElement;
    };
    interface HTMLMalgaPaymentsPixElement extends Components.MalgaPaymentsPix, HTMLStencilElement {
    }
    var HTMLMalgaPaymentsPixElement: {
        prototype: HTMLMalgaPaymentsPixElement;
        new (): HTMLMalgaPaymentsPixElement;
    };
    interface HTMLElementTagNameMap {
        "malga-checkout": HTMLMalgaCheckoutElement;
        "malga-payments": HTMLMalgaPaymentsElement;
        "malga-payments-boleto": HTMLMalgaPaymentsBoletoElement;
        "malga-payments-credit": HTMLMalgaPaymentsCreditElement;
        "malga-payments-credit-form": HTMLMalgaPaymentsCreditFormElement;
        "malga-payments-credit-saved-cards": HTMLMalgaPaymentsCreditSavedCardsElement;
        "malga-payments-drip": HTMLMalgaPaymentsDripElement;
        "malga-payments-drip-content": HTMLMalgaPaymentsDripContentElement;
        "malga-payments-drip-iframe": HTMLMalgaPaymentsDripIframeElement;
        "malga-payments-drip-installments": HTMLMalgaPaymentsDripInstallmentsElement;
        "malga-payments-pix": HTMLMalgaPaymentsPixElement;
    }
}
declare namespace LocalJSX {
    interface MalgaCheckout {
        "clientId"?: string;
        "debug"?: boolean;
        "dialogConfig"?: MalgaCheckoutDialog;
        "idempotencyKey"?: string;
        "isLoading"?: boolean;
        "locale"?: Locale;
        "merchantId"?: string;
        "onPaymentFailed"?: (event: CustomEvent<{
    error: MalgaPaymentsError
  }>) => void;
        "onPaymentSessionFetch"?: (event: CustomEvent<{
    paymentSession: SessionNormalized
  }>) => void;
        "onPaymentSuccess"?: (event: CustomEvent<{
    data: MalgaPaymentsSuccess
  }>) => void;
        "paymentMethods"?: MalgaCheckoutPaymentMethods;
        "publicKey"?: string;
        "sandbox"?: boolean;
        "sessionId"?: string;
        "transactionConfig"?: MalgaCheckoutTransaction;
    }
    interface MalgaPayments {
        "onPaymentFail"?: (event: CustomEvent<{
    error: MalgaPaymentsError
  }>) => void;
        "paymentMethods"?: PaymentMethods;
    }
    interface MalgaPaymentsBoleto {
    }
    interface MalgaPaymentsCredit {
    }
    interface MalgaPaymentsCreditForm {
        "onCurrentFieldChange"?: (event: CustomEvent<{ field: string }>) => void;
    }
    interface MalgaPaymentsCreditSavedCards {
    }
    interface MalgaPaymentsDrip {
    }
    interface MalgaPaymentsDripContent {
    }
    interface MalgaPaymentsDripIframe {
    }
    interface MalgaPaymentsDripInstallments {
        "cashback"?: string;
        "installments"?: { dueDate: string; amount: string }[];
    }
    interface MalgaPaymentsPix {
        "onPixPaymentFailed"?: (event: CustomEvent<{
    error: MalgaPaymentsError
  }>) => void;
    }
    interface IntrinsicElements {
        "malga-checkout": MalgaCheckout;
        "malga-payments": MalgaPayments;
        "malga-payments-boleto": MalgaPaymentsBoleto;
        "malga-payments-credit": MalgaPaymentsCredit;
        "malga-payments-credit-form": MalgaPaymentsCreditForm;
        "malga-payments-credit-saved-cards": MalgaPaymentsCreditSavedCards;
        "malga-payments-drip": MalgaPaymentsDrip;
        "malga-payments-drip-content": MalgaPaymentsDripContent;
        "malga-payments-drip-iframe": MalgaPaymentsDripIframe;
        "malga-payments-drip-installments": MalgaPaymentsDripInstallments;
        "malga-payments-pix": MalgaPaymentsPix;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "malga-checkout": LocalJSX.MalgaCheckout & JSXBase.HTMLAttributes<HTMLMalgaCheckoutElement>;
            "malga-payments": LocalJSX.MalgaPayments & JSXBase.HTMLAttributes<HTMLMalgaPaymentsElement>;
            "malga-payments-boleto": LocalJSX.MalgaPaymentsBoleto & JSXBase.HTMLAttributes<HTMLMalgaPaymentsBoletoElement>;
            "malga-payments-credit": LocalJSX.MalgaPaymentsCredit & JSXBase.HTMLAttributes<HTMLMalgaPaymentsCreditElement>;
            "malga-payments-credit-form": LocalJSX.MalgaPaymentsCreditForm & JSXBase.HTMLAttributes<HTMLMalgaPaymentsCreditFormElement>;
            "malga-payments-credit-saved-cards": LocalJSX.MalgaPaymentsCreditSavedCards & JSXBase.HTMLAttributes<HTMLMalgaPaymentsCreditSavedCardsElement>;
            "malga-payments-drip": LocalJSX.MalgaPaymentsDrip & JSXBase.HTMLAttributes<HTMLMalgaPaymentsDripElement>;
            "malga-payments-drip-content": LocalJSX.MalgaPaymentsDripContent & JSXBase.HTMLAttributes<HTMLMalgaPaymentsDripContentElement>;
            "malga-payments-drip-iframe": LocalJSX.MalgaPaymentsDripIframe & JSXBase.HTMLAttributes<HTMLMalgaPaymentsDripIframeElement>;
            "malga-payments-drip-installments": LocalJSX.MalgaPaymentsDripInstallments & JSXBase.HTMLAttributes<HTMLMalgaPaymentsDripInstallmentsElement>;
            "malga-payments-pix": LocalJSX.MalgaPaymentsPix & JSXBase.HTMLAttributes<HTMLMalgaPaymentsPixElement>;
        }
    }
}
