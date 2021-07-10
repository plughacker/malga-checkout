/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@plug-checkout/core';




export const CheckoutButton = /*@__PURE__*/ defineContainer<JSX.CheckoutButton>('checkout-button', undefined, [
  'customClass',
  'icon',
  'label',
  'fullWidth',
  'disabled',
  'type',
  'isLoading',
  'clicked',
  'focused',
  'blured'
]);


export const CheckoutCreditCard = /*@__PURE__*/ defineContainer<JSX.CheckoutCreditCard>('checkout-credit-card', undefined, [
  'cvv',
  'expiry',
  'focused',
  'issuer',
  'name',
  'number',
  'locale',
  'placeholders'
]);


export const CheckoutErrorMessage = /*@__PURE__*/ defineContainer<JSX.CheckoutErrorMessage>('checkout-error-message', undefined, [
  'message',
  'customClass',
  'fullWidth'
]);


export const CheckoutIcon = /*@__PURE__*/ defineContainer<JSX.CheckoutIcon>('checkout-icon', undefined, [
  'icon',
  'class'
]);


export const CheckoutInput = /*@__PURE__*/ defineContainer<JSX.CheckoutInput>('checkout-input', undefined, [
  'customContainerClass',
  'customLabelClass',
  'customInputClass',
  'mask',
  'startIcon',
  'hasValidation',
  'hasError',
  'max',
  'maxlength',
  'min',
  'minlength',
  'multiple',
  'placeholder',
  'label',
  'name',
  'fullWidth',
  'readonly',
  'required',
  'autofocus',
  'disabled',
  'inputmode',
  'type',
  'value',
  'inputed',
  'changed',
  'blurred',
  'focused'
],
'value', 'changed');


export const CheckoutSelect = /*@__PURE__*/ defineContainer<JSX.CheckoutSelect>('checkout-select', undefined, [
  'customContainerClass',
  'customLabelClass',
  'customSelectClass',
  'startIcon',
  'hasError',
  'placeholder',
  'label',
  'name',
  'options',
  'hasValidation',
  'fullWidth',
  'readonly',
  'required',
  'autofocus',
  'disabled',
  'value',
  'inputed',
  'changed',
  'blurred',
  'focused'
],
'value', 'changed');


export const CheckoutTypography = /*@__PURE__*/ defineContainer<JSX.CheckoutTypography>('checkout-typography', undefined, [
  'tag',
  'variation',
  'color',
  'content'
]);


export const PlugCheckout = /*@__PURE__*/ defineContainer<JSX.PlugCheckout>('plug-checkout', undefined, [
  'clientId',
  'apiKey',
  'merchantId',
  'statementDescriptor',
  'amount',
  'capture',
  'installmentsConfig',
  'customFormStyleClasses'
]);


export const PlugCheckoutForm = /*@__PURE__*/ defineContainer<JSX.PlugCheckoutForm>('plug-checkout-form', undefined, [
  'formValues',
  'amount',
  'installmentsConfig',
  'customFormStyleClasses',
  'isLoading',
  'formSubmit',
  'fieldChange'
],
'value', 'fieldChange');

