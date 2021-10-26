# checkout-modal-pix



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type     | Default       |
| --------------------- | ----------------------- | ----------- | -------- | ------------- |
| `actionButtonLabel`   | `action-button-label`   |             | `string` | `'Continuar'` |
| `amount`              | `amount`                |             | `number` | `undefined`   |
| `expirationDate`      | `expiration-date`       |             | `string` | `undefined`   |
| `expirationTime`      | `expiration-time`       |             | `number` | `undefined`   |
| `qrCodeIdentificator` | `qr-code-identificator` |             | `string` | `undefined`   |
| `qrCodeImageUrl`      | `qr-code-image-url`     |             | `string` | `undefined`   |


## Events

| Event                      | Description | Type                |
| -------------------------- | ----------- | ------------------- |
| `countdownIsFinished`      |             | `CustomEvent<void>` |
| `pixActionButtonIsClicked` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [checkout-modal](../..)

### Depends on

- [checkout-icon](../../../checkout-icon)
- [checkout-typography](../../../checkout-typography)
- [checkout-clipboard-button](../../../checkout-clipboard-button)
- [checkout-countdown](../../../checkout-countdown)
- [checkout-button](../../../checkout-button)

### Graph
```mermaid
graph TD;
  checkout-modal-pix --> checkout-icon
  checkout-modal-pix --> checkout-typography
  checkout-modal-pix --> checkout-clipboard-button
  checkout-modal-pix --> checkout-countdown
  checkout-modal-pix --> checkout-button
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-countdown --> checkout-typography
  checkout-button --> checkout-icon
  checkout-modal --> checkout-modal-pix
  style checkout-modal-pix fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
