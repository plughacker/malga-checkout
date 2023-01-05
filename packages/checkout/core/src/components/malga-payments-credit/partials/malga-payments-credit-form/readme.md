# malga-checkout-form

<!-- Auto Generated Below -->


## Events

| Event                | Description | Type                              |
| -------------------- | ----------- | --------------------------------- |
| `currentFieldChange` |             | `CustomEvent<{ field: string; }>` |


## Dependencies

### Used by

 - [malga-payments-credit](../..)

### Depends on

- checkout-text-field
- checkout-error-message
- checkout-select-field
- checkout-switch
- checkout-typography

### Graph
```mermaid
graph TD;
  malga-payments-credit-form --> checkout-text-field
  malga-payments-credit-form --> checkout-error-message
  malga-payments-credit-form --> checkout-select-field
  malga-payments-credit-form --> checkout-switch
  malga-payments-credit-form --> checkout-typography
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  malga-payments-credit --> malga-payments-credit-form
  style malga-payments-credit-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
