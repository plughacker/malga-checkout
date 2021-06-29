/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlugIconNames } from "./partials/plug-icon/plug-icon.types";
import { PlugButtonType } from "./partials/plug-button/plug-button.types";
import { PlugInputChangeEvent, PlugInputMode, PlugInputType, PlugInputValue } from "./partials/plug-input/plug-input.types";
export namespace Components {
    interface PlugButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "fullWidth": boolean;
        "icon"?: PlugIconNames;
        "label": string;
        "type"?: PlugButtonType;
    }
    interface PlugIcon {
        "class"?: string;
        "icon": PlugIconNames;
    }
    interface PlugInput {
        "autofocus": boolean;
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "disabled": boolean;
        "hasError"?: boolean;
        "hasValidation"?: boolean;
        "inputmode": PlugInputMode;
        "label"?: string;
        "max"?: string;
        "maxlength"?: number;
        "min"?: string;
        "minlength"?: number;
        "multiple"?: boolean;
        "name": string;
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "startIcon"?: PlugIconNames;
        "type": PlugInputType;
        "value"?: PlugInputValue;
    }
}
declare global {
    interface HTMLPlugButtonElement extends Components.PlugButton, HTMLStencilElement {
    }
    var HTMLPlugButtonElement: {
        prototype: HTMLPlugButtonElement;
        new (): HTMLPlugButtonElement;
    };
    interface HTMLPlugIconElement extends Components.PlugIcon, HTMLStencilElement {
    }
    var HTMLPlugIconElement: {
        prototype: HTMLPlugIconElement;
        new (): HTMLPlugIconElement;
    };
    interface HTMLPlugInputElement extends Components.PlugInput, HTMLStencilElement {
    }
    var HTMLPlugInputElement: {
        prototype: HTMLPlugInputElement;
        new (): HTMLPlugInputElement;
    };
    interface HTMLElementTagNameMap {
        "plug-button": HTMLPlugButtonElement;
        "plug-icon": HTMLPlugIconElement;
        "plug-input": HTMLPlugInputElement;
    }
}
declare namespace LocalJSX {
    interface PlugButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "icon"?: PlugIconNames;
        "label"?: string;
        "onBlured"?: (event: CustomEvent<void>) => void;
        "onClicked"?: (event: CustomEvent<void>) => void;
        "onFocused"?: (event: CustomEvent<void>) => void;
        "type"?: PlugButtonType;
    }
    interface PlugIcon {
        "class"?: string;
        "icon"?: PlugIconNames;
    }
    interface PlugInput {
        "autofocus"?: boolean;
        "customContainerClass"?: string;
        "customInputClass"?: string;
        "customLabelClass"?: string;
        "disabled"?: boolean;
        "hasError"?: boolean;
        "hasValidation"?: boolean;
        "inputmode"?: PlugInputMode;
        "label"?: string;
        "max"?: string;
        "maxlength"?: number;
        "min"?: string;
        "minlength"?: number;
        "multiple"?: boolean;
        "name"?: string;
        "onBlurred"?: (event: CustomEvent<void>) => void;
        "onChanged"?: (event: CustomEvent<PlugInputChangeEvent>) => void;
        "onFocused"?: (event: CustomEvent<void>) => void;
        "onInputed"?: (event: CustomEvent<KeyboardEvent>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "startIcon"?: PlugIconNames;
        "type"?: PlugInputType;
        "value"?: PlugInputValue;
    }
    interface IntrinsicElements {
        "plug-button": PlugButton;
        "plug-icon": PlugIcon;
        "plug-input": PlugInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plug-button": LocalJSX.PlugButton & JSXBase.HTMLAttributes<HTMLPlugButtonElement>;
            "plug-icon": LocalJSX.PlugIcon & JSXBase.HTMLAttributes<HTMLPlugIconElement>;
            "plug-input": LocalJSX.PlugInput & JSXBase.HTMLAttributes<HTMLPlugInputElement>;
        }
    }
}
