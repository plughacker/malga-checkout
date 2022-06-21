/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlugCheckoutDialog, PlugCheckoutPaymentMethods, PlugCheckoutTransaction } from "./components/plug-checkout/plug-checkout.types";
import { PaymentMethods, PlugPaymentsChargeError, PlugPaymentsChargeSuccess } from "./components/plug-payments/plug-payments.types";
export namespace Components {
    interface PlugCheckout {
        "clientId"?: string;
        "dialogConfig": PlugCheckoutDialog;
        "idempotencyKey": string;
        "merchantId"?: string;
        "paymentMethods"?: PlugCheckoutPaymentMethods;
        "paymentSessionKey"?: string;
        "publicKey"?: string;
        "sandbox": boolean;
        "transactionConfig"?: PlugCheckoutTransaction;
    }
    interface PlugPayments {
        "paymentMethods": PaymentMethods;
    }
    interface PlugPaymentsBoleto {
    }
    interface PlugPaymentsCredit {
    }
    interface PlugPaymentsCreditForm {
    }
    interface PlugPaymentsCreditSavedCards {
    }
    interface PlugPaymentsPix {
    }
}
declare global {
    interface HTMLPlugCheckoutElement extends Components.PlugCheckout, HTMLStencilElement {
    }
    var HTMLPlugCheckoutElement: {
        prototype: HTMLPlugCheckoutElement;
        new (): HTMLPlugCheckoutElement;
    };
    interface HTMLPlugPaymentsElement extends Components.PlugPayments, HTMLStencilElement {
    }
    var HTMLPlugPaymentsElement: {
        prototype: HTMLPlugPaymentsElement;
        new (): HTMLPlugPaymentsElement;
    };
    interface HTMLPlugPaymentsBoletoElement extends Components.PlugPaymentsBoleto, HTMLStencilElement {
    }
    var HTMLPlugPaymentsBoletoElement: {
        prototype: HTMLPlugPaymentsBoletoElement;
        new (): HTMLPlugPaymentsBoletoElement;
    };
    interface HTMLPlugPaymentsCreditElement extends Components.PlugPaymentsCredit, HTMLStencilElement {
    }
    var HTMLPlugPaymentsCreditElement: {
        prototype: HTMLPlugPaymentsCreditElement;
        new (): HTMLPlugPaymentsCreditElement;
    };
    interface HTMLPlugPaymentsCreditFormElement extends Components.PlugPaymentsCreditForm, HTMLStencilElement {
    }
    var HTMLPlugPaymentsCreditFormElement: {
        prototype: HTMLPlugPaymentsCreditFormElement;
        new (): HTMLPlugPaymentsCreditFormElement;
    };
    interface HTMLPlugPaymentsCreditSavedCardsElement extends Components.PlugPaymentsCreditSavedCards, HTMLStencilElement {
    }
    var HTMLPlugPaymentsCreditSavedCardsElement: {
        prototype: HTMLPlugPaymentsCreditSavedCardsElement;
        new (): HTMLPlugPaymentsCreditSavedCardsElement;
    };
    interface HTMLPlugPaymentsPixElement extends Components.PlugPaymentsPix, HTMLStencilElement {
    }
    var HTMLPlugPaymentsPixElement: {
        prototype: HTMLPlugPaymentsPixElement;
        new (): HTMLPlugPaymentsPixElement;
    };
    interface HTMLElementTagNameMap {
        "plug-checkout": HTMLPlugCheckoutElement;
        "plug-payments": HTMLPlugPaymentsElement;
        "plug-payments-boleto": HTMLPlugPaymentsBoletoElement;
        "plug-payments-credit": HTMLPlugPaymentsCreditElement;
        "plug-payments-credit-form": HTMLPlugPaymentsCreditFormElement;
        "plug-payments-credit-saved-cards": HTMLPlugPaymentsCreditSavedCardsElement;
        "plug-payments-pix": HTMLPlugPaymentsPixElement;
    }
}
declare namespace LocalJSX {
    interface PlugCheckout {
        "clientId"?: string;
        "dialogConfig"?: PlugCheckoutDialog;
        "idempotencyKey"?: string;
        "merchantId"?: string;
        "onPaymentFailed"?: (event: CustomEvent<{
    error: PlugPaymentsChargeError
  }>) => void;
        "onPaymentSuccess"?: (event: CustomEvent<{
    data: PlugPaymentsChargeSuccess
  }>) => void;
        "paymentMethods"?: PlugCheckoutPaymentMethods;
        "paymentSessionKey"?: string;
        "publicKey"?: string;
        "sandbox"?: boolean;
        "transactionConfig"?: PlugCheckoutTransaction;
    }
    interface PlugPayments {
        "onPaymentFail"?: (event: CustomEvent<{
    error: PlugPaymentsChargeError
  }>) => void;
        "paymentMethods"?: PaymentMethods;
    }
    interface PlugPaymentsBoleto {
    }
    interface PlugPaymentsCredit {
    }
    interface PlugPaymentsCreditForm {
        "onCurrentFieldChange"?: (event: CustomEvent<{ field: string }>) => void;
    }
    interface PlugPaymentsCreditSavedCards {
    }
    interface PlugPaymentsPix {
        "onPixPaymentFailed"?: (event: CustomEvent<{
    error: PlugPaymentsChargeError
  }>) => void;
    }
    interface IntrinsicElements {
        "plug-checkout": PlugCheckout;
        "plug-payments": PlugPayments;
        "plug-payments-boleto": PlugPaymentsBoleto;
        "plug-payments-credit": PlugPaymentsCredit;
        "plug-payments-credit-form": PlugPaymentsCreditForm;
        "plug-payments-credit-saved-cards": PlugPaymentsCreditSavedCards;
        "plug-payments-pix": PlugPaymentsPix;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plug-checkout": LocalJSX.PlugCheckout & JSXBase.HTMLAttributes<HTMLPlugCheckoutElement>;
            "plug-payments": LocalJSX.PlugPayments & JSXBase.HTMLAttributes<HTMLPlugPaymentsElement>;
            "plug-payments-boleto": LocalJSX.PlugPaymentsBoleto & JSXBase.HTMLAttributes<HTMLPlugPaymentsBoletoElement>;
            "plug-payments-credit": LocalJSX.PlugPaymentsCredit & JSXBase.HTMLAttributes<HTMLPlugPaymentsCreditElement>;
            "plug-payments-credit-form": LocalJSX.PlugPaymentsCreditForm & JSXBase.HTMLAttributes<HTMLPlugPaymentsCreditFormElement>;
            "plug-payments-credit-saved-cards": LocalJSX.PlugPaymentsCreditSavedCards & JSXBase.HTMLAttributes<HTMLPlugPaymentsCreditSavedCardsElement>;
            "plug-payments-pix": LocalJSX.PlugPaymentsPix & JSXBase.HTMLAttributes<HTMLPlugPaymentsPixElement>;
        }
    }
}
