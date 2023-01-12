# Malga Checkout - Core

A simple, fast and customizable way of integrating with Malga, with no need to stop using your favorite front-end framework.

## Introduction

[Here is a demonstration](https://github.com/plughacker/demo-malga-checkout-vanilla) of a VanillaJS application integrated with Malga Checkout.

## Get Started

To start it, simply install the dependency on your project

```html
<script
  type="module"
  src="https://unpkg.com/@malga-checkout/core@latest/dist/malga-checkout/malga-checkout.esm.js"
></script>
```

Now just add the `<malga-checkout></malga-checkout>` in your HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
    />
    <script
      type="module"
      src="https://unpkg.com/@malga-checkout/core@latest/dist/malga-checkout/malga-checkout.esm.js"
    ></script>
    <title>Malga Checkout Components</title>
  </head>
  <body>
    <main>
      <malga-checkout></malga-checkout>
    </main>
  </body>
</html>
```

Use it like this in one of your HTML file. Its most basic way, with no customization, needs very few configurations. Adding events and attributes without primitive types in one of your Javascript files or in `<script>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
    />
    <script
      type="module"
      src="https://unpkg.com/@malga-checkout/core@latest/dist/malga-checkout/malga-checkout.esm.js"
    ></script>
    <title>Malga Checkout Components</title>
  </head>
  <body>
    <main>
      <malga-checkout
        public-key="<YOUR_PUBLIC_KEY>"
        client-id="<YOUR_CLIENT_ID>"
        merchant-id="<YOUR_MERCHANT_ID>"
        statement-descriptor="#1 Demonstration Malga Checkout"
        amount="100"
      >
      </malga-checkout>
    </main>

    <script>
      const malgaCheckout = document.querySelector('malga-checkout')

      MalgaCheckout.addEventListener('paymentSuccess', () => {
        // Your specifications here
      })

      MalgaCheckout.addEventListener('paymentFailed', () => {
        // Your specifications here
      })
    </script>
  </body>
</html>
```

## Props

Below there is a list of properties that the component accepts for you to customize it according to your necessities.

| Property                 | Description                                                                                                                                                                            | Type       | Default                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------- |
| `amount`                 | Total amount of the transaction, we indicate that the amount be used in CENTS form.                                                                                                    | `number`   | `undefined`                   |
| `public-key`             | Public key for client-side applications, generated from Malga’s API. [Click here](https://docs.malga.io/#section/Autenticacao/Client-Token) to read more about it in the documentation. | `string`   | `undefined`                   |
| `capture`                | It determines if the transaction should be captured immediately.                                                                                                                       | `boolean`  | `false`                       |
| `client-id`              | Key to identify the client on Malga. [Click here](https://docs.malga.io/#section/Get-started/Configure-uma-conta-malga) to read more about it in the documentation.                      | `string`   | `undefined`                   |
| `customFormStyleClasses` | Properties that make the use of CSS classes available for individual customization of each component of Malga Checkout.                                                                | `object`   | `{}`                          |
| `installmentsConfig`     | Configurations for the installments field, if it should be exhibited and/or the quantity of installments the transaction provides.                                                     | `object`   | `{ show: true, quantity: 1 }` |
| `merchant-id`            | Subaccounts identifier on Malga. [Click here](https://docs.malga.io/#tag/Merchants) to read more about it in the documentation.                                                         | `string`   | `undefined`                   |
| `sandbox`                | Flag to define if the requests for Malga’s API must be made in a homologation or production environment.                                                                                | `boolean`  | `false`                       |
| `statement-descriptor`   | Description that will be shown on the buyer’s bill.                                                                                                                                    | `string`   | `undefined`                   |
| `paymentSuccess`         | Event called right after the success of the transaction.                                                                                                                               | `function` | `undefined`                   |
| `paymentFailed`          | Event called right after some transaction fail occurs.                                                                                                                                 | `function` | `undefined`                   |

## UI Customization

For the checkout to be completely transparent and extensible, we provide some forms of customization so that it has the “face” of your company.

### Theme

For theme customization (color pallet, spacing and typography) you may overwrite the variable values on your main file of CSS of application (usually the index.css). The variables we currently use are the ones below:

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

You can see an example of how to do it by [clicking here](https://github.com/plughacker/demo-malga-checkout-vanilla/blob/main/index.css).

### Components

For customization focused directly on visual components that are part of the Malga Checkout, we provide the prop customFormStyleClasses which accepts an object with a series of properties that may be attributed CSS classes, that are created on your main file of CSS of application (usually the index.css). Below there is a list of properties the customFormStyleClasses supports:

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

You can see an example of how to do it by [clicking here](https://github.com/plughacker/demo-malga-checkout-vanilla/blob/main/index.css).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
