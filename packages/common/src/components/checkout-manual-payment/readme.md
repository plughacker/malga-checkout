# checkout-manual-payment



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                                  | Default |
| --------------- | ---------------- | ----------- | ------------------------------------- | ------- |
| `paymentMethod` | `payment-method` |             | `"boleto" \| "pix" \| "pixWithTimer"` | `'pix'` |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `paymentClick` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [checkout-typography](../checkout-typography)
- [checkout-button](../checkout-button)
- [checkout-icon](../checkout-icon)

### Graph
```mermaid
graph TD;
  checkout-manual-payment --> checkout-typography
  checkout-manual-payment --> checkout-button
  checkout-manual-payment --> checkout-icon
  checkout-button --> checkout-icon
  style checkout-manual-payment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
