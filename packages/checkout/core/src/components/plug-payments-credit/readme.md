# plug-checkout

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute              | Description | Type                                           | Default                                  |
| ------------------------ | ---------------------- | ----------- | ---------------------------------------------- | ---------------------------------------- |
| `amount`                 | `amount`               |             | `number`                                       | `undefined`                              |
| `capture`                | `capture`              |             | `boolean`                                      | `false`                                  |
| `clientId`               | `client-id`            |             | `string`                                       | `undefined`                              |
| `currency`               | `currency`             |             | `string`                                       | `'BRL'`                                  |
| `customFormStyleClasses` | --                     |             | `PlugPaymentsCreditFormCustomStyleFormClasses` | `defaultCustomStyles`                    |
| `customerId`             | `customer-id`          |             | `string`                                       | `undefined`                              |
| `description`            | `description`          |             | `string`                                       | `undefined`                              |
| `installmentsConfig`     | --                     |             | `PlugPaymentsCreditInstallmentsConfig`         | `{     show: true,     quantity: 1,   }` |
| `merchantId`             | `merchant-id`          |             | `string`                                       | `undefined`                              |
| `orderId`                | `order-id`             |             | `string`                                       | `undefined`                              |
| `publicKey`              | `public-key`           |             | `string`                                       | `undefined`                              |
| `sandbox`                | `sandbox`              |             | `boolean`                                      | `false`                                  |
| `showCreditCard`         | `show-credit-card`     |             | `boolean`                                      | `true`                                   |
| `statementDescriptor`    | `statement-descriptor` |             | `string`                                       | `undefined`                              |


## Events

| Event            | Description | Type                                                      |
| ---------------- | ----------- | --------------------------------------------------------- |
| `paymentFailed`  |             | `CustomEvent<{ error: PlugPaymentsCreditChargeError; }>`  |
| `paymentSuccess` |             | `CustomEvent<{ data: PlugPaymentsCreditChargeSuccess; }>` |


## Dependencies

### Used by

 - [plug-payments](../plug-payments)

### Depends on

- checkout-credit-card
- [plug-payments-credit-form](./partials/plug-payments-credit-form)

### Graph
```mermaid
graph TD;
  plug-payments-credit --> checkout-credit-card
  plug-payments-credit --> plug-payments-credit-form
  plug-payments-credit-form --> checkout-text-field
  plug-payments-credit-form --> checkout-error-message
  plug-payments-credit-form --> checkout-select-field
  plug-payments-credit-form --> checkout-button
  plug-payments-credit-form --> checkout-icon
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  checkout-button --> checkout-icon
  plug-payments --> plug-payments-credit
  style plug-payments-credit fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
