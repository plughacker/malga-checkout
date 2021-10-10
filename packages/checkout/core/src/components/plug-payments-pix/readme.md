# plug-payments-pix

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description | Type            | Default     |
| --------------------- | ---------------------- | ----------- | --------------- | ----------- |
| `amount`              | `amount`               |             | `number`        | `undefined` |
| `capture`             | `capture`              |             | `boolean`       | `false`     |
| `clientId`            | `client-id`            |             | `string`        | `undefined` |
| `currency`            | `currency`             |             | `string`        | `'BRL'`     |
| `customer`            | --                     |             | `Customer`      | `undefined` |
| `customerId`          | `customer-id`          |             | `string`        | `undefined` |
| `description`         | `description`          |             | `string`        | `undefined` |
| `merchantId`          | `merchant-id`          |             | `string`        | `undefined` |
| `orderId`             | `order-id`             |             | `string`        | `undefined` |
| `pix`                 | --                     |             | `PixAttributes` | `undefined` |
| `publicKey`           | `public-key`           |             | `string`        | `undefined` |
| `sandbox`             | `sandbox`              |             | `boolean`       | `false`     |
| `showDialog`          | `show-dialog`          |             | `boolean`       | `true`      |
| `statementDescriptor` | `statement-descriptor` |             | `string`        | `undefined` |


## Events

| Event            | Description | Type                                                   |
| ---------------- | ----------- | ------------------------------------------------------ |
| `paymentFailed`  |             | `CustomEvent<{ error: PlugPaymentsPixChargeError; }>`  |
| `paymentSuccess` |             | `CustomEvent<{ data: PlugPaymentsPixChargeSuccess; }>` |


## Dependencies

### Used by

 - [plug-checkout](../plug-checkout)
 - [plug-payments](../plug-payments)

### Depends on

- checkout-manual-payment
- checkout-modal

### Graph
```mermaid
graph TD;
  plug-payments-pix --> checkout-manual-payment
  plug-payments-pix --> checkout-modal
  checkout-manual-payment --> checkout-typography
  checkout-manual-payment --> checkout-button
  checkout-manual-payment --> checkout-icon
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
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-countdown --> checkout-typography
  checkout-modal-boleto --> checkout-icon
  checkout-modal-boleto --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  plug-checkout --> plug-payments-pix
  plug-payments --> plug-payments-pix
  style plug-payments-pix fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
