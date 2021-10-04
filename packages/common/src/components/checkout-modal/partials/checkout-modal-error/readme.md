# checkout-modal-error



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type     | Default     |
| ------------------ | ------------------- | ----------- | -------- | ----------- |
| `errorDescription` | `error-description` |             | `string` | `undefined` |
| `errorTitle`       | `error-title`       |             | `string` | `undefined` |


## Events

| Event                | Description | Type                |
| -------------------- | ----------- | ------------------- |
| `errorButtonClicked` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [checkout-modal](../..)

### Depends on

- [checkout-icon](../../../checkout-icon)
- [checkout-typography](../../../checkout-typography)
- [checkout-button](../../../checkout-button)

### Graph
```mermaid
graph TD;
  checkout-modal-error --> checkout-icon
  checkout-modal-error --> checkout-typography
  checkout-modal-error --> checkout-button
  checkout-button --> checkout-icon
  checkout-modal --> checkout-modal-error
  style checkout-modal-error fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
