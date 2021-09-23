# plug-payments



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description | Type                                   | Default                     |
| --------------------- | ---------------------- | ----------- | -------------------------------------- | --------------------------- |
| `amount`              | `amount`               |             | `number`                               | `undefined`                 |
| `boleto`              | --                     |             | `IBoleto`                              | `undefined`                 |
| `capture`             | `capture`              |             | `boolean`                              | `false`                     |
| `clientId`            | `client-id`            |             | `string`                               | `undefined`                 |
| `currency`            | `currency`             |             | `string`                               | `'BRL'`                     |
| `customer`            | --                     |             | `ICustomer`                            | `undefined`                 |
| `customerId`          | `customer-id`          |             | `string`                               | `undefined`                 |
| `description`         | `description`          |             | `string`                               | `undefined`                 |
| `installments`        | --                     |             | `PlugPaymentsCreditInstallmentsConfig` | `undefined`                 |
| `merchantId`          | `merchant-id`          |             | `string`                               | `undefined`                 |
| `orderId`             | `order-id`             |             | `string`                               | `undefined`                 |
| `paymentMethods`      | --                     |             | `PaymentMethodsType[]`                 | `['card', 'pix', 'boleto']` |
| `pix`                 | --                     |             | `IPix`                                 | `undefined`                 |
| `publicKey`           | `public-key`           |             | `string`                               | `undefined`                 |
| `sandbox`             | `sandbox`              |             | `boolean`                              | `false`                     |
| `showCreditCard`      | `show-credit-card`     |             | `boolean`                              | `false`                     |
| `statementDescriptor` | `statement-descriptor` |             | `string`                               | `undefined`                 |


## Events

| Event            | Description | Type                                                |
| ---------------- | ----------- | --------------------------------------------------- |
| `paymentFailed`  |             | `CustomEvent<{ error: PlugPaymentsChargeError; }>`  |
| `paymentSuccess` |             | `CustomEvent<{ data: PlugPaymentsChargeSuccess; }>` |


## Dependencies

### Depends on

- checkout-radio-field
- [plug-payments-boleto](../plug-payments-boleto)
- [plug-payments-pix](../plug-payments-pix)
- [plug-payments-credit](../plug-payments-credit)

### Graph
```mermaid
graph TD;
  plug-payments --> checkout-radio-field
  plug-payments --> plug-payments-boleto
  plug-payments --> plug-payments-pix
  plug-payments --> plug-payments-credit
  plug-payments-boleto --> checkout-manual-payment
  checkout-manual-payment --> checkout-typography
  checkout-manual-payment --> checkout-button
  checkout-manual-payment --> checkout-icon
  checkout-button --> checkout-icon
  plug-payments-pix --> checkout-manual-payment
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
  style plug-payments fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
