# checkout-modal-boleto



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type     | Default     |
| ---------------- | ------------------ | ----------- | -------- | ----------- |
| `amount`         | `amount`           |             | `number` | `undefined` |
| `boletoCode`     | `boleto-code`      |             | `string` | `undefined` |
| `boletoImageUrl` | `boleto-image-url` |             | `string` | `undefined` |
| `expirationDate` | `expiration-date`  |             | `string` | `undefined` |


## Dependencies

### Used by

 - [checkout-modal](../..)

### Depends on

- [checkout-icon](../../../checkout-icon)
- [checkout-typography](../../../checkout-typography)
- [checkout-clipboard-button](../../../checkout-clipboard-button)

### Graph
```mermaid
graph TD;
  checkout-modal-boleto --> checkout-icon
  checkout-modal-boleto --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-modal --> checkout-modal-boleto
  style checkout-modal-boleto fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
