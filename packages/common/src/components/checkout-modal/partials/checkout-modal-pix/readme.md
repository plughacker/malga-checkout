# checkout-modal-pix



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type     | Default     |
| --------------------- | ----------------------- | ----------- | -------- | ----------- |
| `amount`              | `amount`                |             | `number` | `undefined` |
| `expirationDate`      | `expiration-date`       |             | `string` | `undefined` |
| `expirationTime`      | `expiration-time`       |             | `number` | `undefined` |
| `qrCodeIdentificator` | `qr-code-identificator` |             | `string` | `undefined` |
| `qrCodeImageUrl`      | `qr-code-image-url`     |             | `string` | `undefined` |


## Dependencies

### Used by

 - [checkout-modal](../..)

### Depends on

- [checkout-icon](../../../checkout-icon)
- [checkout-typography](../../../checkout-typography)
- [checkout-clipboard-button](../../../checkout-clipboard-button)
- [checkout-countdown](../../../checkout-countdown)

### Graph
```mermaid
graph TD;
  checkout-modal-pix --> checkout-icon
  checkout-modal-pix --> checkout-typography
  checkout-modal-pix --> checkout-clipboard-button
  checkout-modal-pix --> checkout-countdown
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-countdown --> checkout-typography
  checkout-modal --> checkout-modal-pix
  style checkout-modal-pix fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
