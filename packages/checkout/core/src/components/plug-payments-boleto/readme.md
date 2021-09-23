# plug-payments-boleto



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description | Type        | Default     |
| --------------------- | ---------------------- | ----------- | ----------- | ----------- |
| `amount`              | `amount`               |             | `number`    | `undefined` |
| `boleto`              | --                     |             | `IBoleto`   | `undefined` |
| `capture`             | `capture`              |             | `boolean`   | `false`     |
| `clientId`            | `client-id`            |             | `string`    | `undefined` |
| `currency`            | `currency`             |             | `string`    | `'BRL'`     |
| `customer`            | --                     |             | `ICustomer` | `undefined` |
| `customerId`          | `customer-id`          |             | `string`    | `undefined` |
| `description`         | `description`          |             | `string`    | `undefined` |
| `merchantId`          | `merchant-id`          |             | `string`    | `undefined` |
| `orderId`             | `order-id`             |             | `string`    | `undefined` |
| `publicKey`           | `public-key`           |             | `string`    | `undefined` |
| `sandbox`             | `sandbox`              |             | `boolean`   | `false`     |
| `statementDescriptor` | `statement-descriptor` |             | `string`    | `undefined` |


## Events

| Event            | Description | Type                                                      |
| ---------------- | ----------- | --------------------------------------------------------- |
| `paymentFailed`  |             | `CustomEvent<{ error: PlugPaymentsBoletoChargeError; }>`  |
| `paymentSuccess` |             | `CustomEvent<{ data: PlugPaymentsBoletoChargeSuccess; }>` |


## Dependencies

### Used by

 - [plug-payments](../plug-payments)

### Depends on

- checkout-manual-payment

### Graph
```mermaid
graph TD;
  plug-payments-boleto --> checkout-manual-payment
  checkout-manual-payment --> checkout-typography
  checkout-manual-payment --> checkout-button
  checkout-manual-payment --> checkout-icon
  checkout-button --> checkout-icon
  plug-payments --> plug-payments-boleto
  style plug-payments-boleto fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
