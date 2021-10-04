# checkout-clipboard-button



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type     | Default     |
| ------------------ | ------------------- | ----------- | -------- | ----------- |
| `clipboardContent` | `clipboard-content` |             | `string` | `undefined` |
| `label`            | `label`             |             | `string` | `undefined` |


## Dependencies

### Used by

 - [checkout-modal-boleto](../checkout-modal/partials/checkout-modal-boleto)
 - [checkout-modal-pix](../checkout-modal/partials/checkout-modal-pix)

### Depends on

- [checkout-icon](../checkout-icon)
- [checkout-typography](../checkout-typography)

### Graph
```mermaid
graph TD;
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  checkout-modal-pix --> checkout-clipboard-button
  style checkout-clipboard-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
