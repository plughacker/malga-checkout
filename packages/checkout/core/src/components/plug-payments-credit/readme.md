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
| `customer`               | --                     |             | `Customer`                                     | `undefined`                              |
| `customerId`             | `customer-id`          |             | `string`                                       | `undefined`                              |
| `description`            | `description`          |             | `string`                                       | `undefined`                              |
| `installmentsConfig`     | --                     |             | `PlugPaymentsCreditInstallmentsConfig`         | `{     show: true,     quantity: 1,   }` |
| `merchantId`             | `merchant-id`          |             | `string`                                       | `undefined`                              |
| `orderId`                | `order-id`             |             | `string`                                       | `undefined`                              |
| `publicKey`              | `public-key`           |             | `string`                                       | `undefined`                              |
| `sandbox`                | `sandbox`              |             | `boolean`                                      | `false`                                  |
| `showCreditCard`         | `show-credit-card`     |             | `boolean`                                      | `true`                                   |
| `showDialog`             | `show-dialog`          |             | `boolean`                                      | `true`                                   |
| `statementDescriptor`    | `statement-descriptor` |             | `string`                                       | `undefined`                              |


## Events

| Event                  | Description | Type                                                      |
| ---------------------- | ----------- | --------------------------------------------------------- |
| `creditPaymentFailed`  |             | `CustomEvent<{ error: PlugPaymentsCreditChargeError; }>`  |
| `creditPaymentSuccess` |             | `CustomEvent<{ data: PlugPaymentsCreditChargeSuccess; }>` |


## Dependencies

### Used by

 - [plug-checkout](../plug-checkout)
 - [plug-payments](../plug-payments)

### Depends on

- checkout-credit-card
- [plug-payments-credit-form](./partials/plug-payments-credit-form)
- checkout-modal

### Graph
```mermaid
graph TD;
  plug-payments-credit --> checkout-credit-card
  plug-payments-credit --> plug-payments-credit-form
  plug-payments-credit --> checkout-modal
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
  checkout-modal --> checkout-modal-success
  checkout-modal --> checkout-modal-error
  checkout-modal --> checkout-modal-pix
  checkout-modal --> checkout-modal-boleto
  checkout-modal-success --> checkout-icon
  checkout-modal-success --> checkout-typography
  checkout-modal-success --> checkout-button
  checkout-modal-error --> checkout-icon
  checkout-modal-error --> checkout-typography
  checkout-modal-error --> checkout-button
  checkout-modal-pix --> checkout-icon
  checkout-modal-pix --> checkout-typography
  checkout-modal-pix --> checkout-clipboard-button
  checkout-modal-pix --> checkout-countdown
  checkout-modal-pix --> checkout-button
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-countdown --> checkout-typography
  checkout-modal-boleto --> checkout-icon
  checkout-modal-boleto --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  checkout-modal-boleto --> checkout-button
  plug-checkout --> plug-payments-credit
  plug-payments --> plug-payments-credit
  style plug-payments-credit fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
