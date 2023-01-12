# Malga Checkout - Vue2

A simple, fast and customizable way of integrating with Malga, with no need to stop using your favorite front-end framework.

## Introduction

[Here is a demonstration](https://github.com/plughacker/demo-malga-checkout-vue2) of a Vue2 application integrated with Malga Checkout.

## Get Started

To start it, simply install the dependency on your project

```bash
yarn add @malga-checkout/core
# or
npm install --save @malga-checkout/core
```

Import settings in your `main.ts`

```js
import {
  applyPolyfills,
  defineCustomElements,
} from '@malga-checkout/core/loader'
```

Now just add the `customElements` settings and apply the `polyfills`

```js
Vue.config.ignoredElements = [/malga-\w*/, /checkout-\w*/]

applyPolyfills().then(() => {
  defineCustomElements()
})
```

Your `main.ts` should look like this now

```js
import Vue from 'vue'
import App from './App.vue'
import {
  applyPolyfills,
  defineCustomElements,
} from '@malga-checkout/core/loader'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/malga-\w*/, /checkout-\w*/]

applyPolyfills().then(() => {
  defineCustomElements()
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

Use it like this in one of your components. Its most basic way, with no customization, needs very few configurations.

```html
<malga-checkout
  :publicKey.prop="<YOUR_PUBLIC_KEY>"
  :clientId.prop="<YOUR_CLIENT_ID>"
  :merchantId.prop="<YOUR_MERCHANT_ID>"
  :statementDescriptor.prop="#1 Demonstration Malga Checkout"
  :amount.prop="100"
  @paymentSuccess="handlePaymentSuccess"
  @paymentFailed="handlePaymentFailed"
>
</malga-checkout>
```

## Props

Below there is a list of properties that the component accepts for you to customize it according to your necessities.

| Property                       | Description                                                                                                                                                                            | Type       | Default                       |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------- |
| `:amount.prop`                 | Total amount of the transaction, we indicate that the amount be used in CENTS form.                                                                                                    | `number`   | `undefined`                   |
| `:publicKey.prop`              | Public key for client-side applications, generated from Malga’s API. [Click here](https://docs.malga.io/#section/Autenticacao/Client-Token) to read more about it in the documentation. | `string`   | `undefined`                   |
| `:capture.prop`                | It determines if the transaction should be captured immediately.                                                                                                                       | `boolean`  | `false`                       |
| `:clientId.prop`               | Key to identify the client on Malga. [Click here](https://docs.malga.io/#section/Get-started/Configure-uma-conta-malga) to read more about it in the documentation.                      | `string`   | `undefined`                   |
| `:customFormStyleClasses.prop` | Properties that make the use of CSS classes available for individual customization of each component of Malga Checkout.                                                                | `object`   | `{}`                          |
| `installmentsConfig.prop`      | Configurations for the installments field, if it should be exhibited and/or the quantity of installments the transaction provides.                                                     | `object`   | `{ show: true, quantity: 1 }` |
| `:merchantId.prop`             | Subaccounts identifier on Malga. [Click here](https://docs.malga.io/#tag/Merchants) to read more about it in the documentation.                                                         | `string`   | `undefined`                   |
| `:sandbox.prop`                | Flag to define if the requests for Malga’s API must be made in a homologation or production environment.                                                                                | `boolean`  | `false`                       |
| `:statementDescriptor.prop`    | Description that will be shown on the buyer’s bill.                                                                                                                                    | `string`   | `undefined`                   |
| `@paymentSuccess`              | Callback called right after the success of the transaction.                                                                                                                            | `function` | `undefined`                   |
| `@paymentFailed`               | Callback called right after some transaction fail occurs.                                                                                                                              | `function` | `undefined`                   |

## UI Customization

For the checkout to be completely transparent and extensible, we provide some forms of customization so that it has the “face” of your company.

### Theme

For theme customization (color pallet, spacing and typography) you may overwrite the variable values on `<style>` of component. The variables we currently use are the ones below:

```css
:root {
  /* Colors */
  --malga-checkout-color-brand-accent-light: #4ebff1;
  --malga-checkout-color-brand-accent-normal: #0055a2;
  --malga-checkout-color-brand-light: #0091ea;
  --malga-checkout-color-brand-normal: #5c7ec0;
  --malga-checkout-color-brand-middle: #344383;
  --malga-checkout-color-brand-dark: #141b4d;
  --malga-checkout-color-grey-light: #aaafc5;
  --malga-checkout-color-grey-normal: #8b90a7;
  --malga-checkout-color-grey-middle: #5e6277;
  --malga-checkout-color-grey-dark: #3f4252;
  --malga-checkout-color-accent-light: #ffffff;
  --malga-checkout-color-accent-normal: #eef2f6;
  --malga-checkout-color-accent-middle: #aebfd0;
  --malga-checkout-color-warning-light: #fff8e1;
  --malga-checkout-color-warning-normal: #fac30e;
  --malga-checkout-color-warning-middle: #ffa200;
  --malga-checkout-color-success: #32c000;

  /* Typography */
  --malga-checkout-typography-family: 'Lato', sans-serif;

  /* Spacings */
  --malga-checkout-spacing-xxs: 4px;
  --malga-checkout-spacing-xs: 8px;
  --malga-checkout-spacing-sm: 16px;
  --malga-checkout-spacing-default: 24px;
  --malga-checkout-spacing-md: 32px;
  --malga-checkout-spacing-lg: 48px;
  --malga-checkout-spacing-xlg: 64px;
  --malga-checkout-spacing-xxlg: 96px;

  /* Sizes */
  --malga-checkout-size-min-width: 250px;

  /* Border Radius */
  --malga-checkout-border-radius-default: 4px;

  /* Transitions Time */
  --malga-checkout-transition-slow: 0.3s;
  --malga-checkout-transition-default: 0.5s;
}
```

You can see an example of how to do it by [clicking here](https://github.com/plughacker/demo-malga-checkout-vue2/blob/main/src/App.vue).

### Components

For customization focused directly on visual components that are part of the Malga Checkout, we provide the prop customFormStyleClasses which accepts an object with a series of properties that may be attributed CSS classes, that are created on your main file of CSS of application (usually the `<style>` of component). Below there is a list of properties the customFormStyleClasses supports:

```js
const defaultCustomStyles = {
  formContainer: '<YOUR_CUSTOM_CLASS>',
  formContent: '<YOUR_CUSTOM_CLASS>',
  creditCardFieldContainer: '<YOUR_CUSTOM_CLASS>',
  creditCardFieldLabelContainer: '<YOUR_CUSTOM_CLASS>',
  creditCardFieldInputContainer: '<YOUR_CUSTOM_CLASS>',
  expirationDateFieldContainer: '<YOUR_CUSTOM_CLASS>',
  expirationDateFieldLabelContainer: '<YOUR_CUSTOM_CLASS>',
  expirationDateFieldInputContainer: '<YOUR_CUSTOM_CLASS>',
  cvvFieldContainer: '<YOUR_CUSTOM_CLASS>',
  cvvFieldLabelContainer: '<YOUR_CUSTOM_CLASS>',
  cvvFieldInputContainer: '<YOUR_CUSTOM_CLASS>',
  nameFieldContainer: '<YOUR_CUSTOM_CLASS>',
  nameFieldLabelContainer: '<YOUR_CUSTOM_CLASS>',
  nameFieldInputContainer: '<YOUR_CUSTOM_CLASS>',
  installmentsFieldContainer: '<YOUR_CUSTOM_CLASS>',
  installmentsFieldLabelContainer: '<YOUR_CUSTOM_CLASS>',
  installmentsFieldSelectContainer: '<YOUR_CUSTOM_CLASS>',
  submitButton: '<YOUR_CUSTOM_CLASS>',
}
```

You can see an example of how to do it by [clicking here](https://github.com/plughacker/demo-malga-checkout-vue2/blob/main/src/App.vue).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
