# checkout-modal



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                                        | Default     |
| ------------------ | ------------------- | ----------- | ------------------------------------------- | ----------- |
| `amount`           | `amount`            |             | `number`                                    | `undefined` |
| `errorDescription` | `error-description` |             | `string`                                    | `undefined` |
| `errorTitle`       | `error-title`       |             | `string`                                    | `undefined` |
| `expirationDate`   | `expiration-date`   |             | `string`                                    | `undefined` |
| `expirationTime`   | `expiration-time`   |             | `number`                                    | `undefined` |
| `mode`             | `mode`              |             | `"boleto" \| "error" \| "pix" \| "success"` | `undefined` |
| `open`             | `open`              |             | `boolean`                                   | `undefined` |
| `paymentCode`      | `payment-code`      |             | `string`                                    | `undefined` |
| `paymentImageUrl`  | `payment-image-url` |             | `string`                                    | `undefined` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `errorButtonClicked`   |             | `CustomEvent<any>` |
| `successButtonClicked` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [checkout-modal-success](./partials/checkout-modal-success)
- [checkout-modal-error](./partials/checkout-modal-error)
- [checkout-modal-pix](./partials/checkout-modal-pix)
- [checkout-modal-boleto](./partials/checkout-modal-boleto)

### Graph
```mermaid
graph TD;
  checkout-modal --> checkout-modal-success
  checkout-modal --> checkout-modal-error
  checkout-modal --> checkout-modal-pix
  checkout-modal --> checkout-modal-boleto
  checkout-modal-success --> checkout-icon
  checkout-modal-success --> checkout-typography
  checkout-modal-success --> checkout-button
  checkout-button --> checkout-icon
  checkout-modal-error --> checkout-icon
  checkout-modal-error --> checkout-typography
  checkout-modal-error --> checkout-button
  checkout-modal-pix --> checkout-icon
  checkout-modal-pix --> checkout-typography
  checkout-modal-pix --> checkout-clipboard-button
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-modal-boleto --> checkout-icon
  checkout-modal-boleto --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  style checkout-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
