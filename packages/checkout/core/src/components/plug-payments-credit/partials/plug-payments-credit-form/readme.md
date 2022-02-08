# plug-checkout-form

<!-- Auto Generated Below -->


## Events

| Event                | Description | Type                              |
| -------------------- | ----------- | --------------------------------- |
| `currentFieldChange` |             | `CustomEvent<{ field: string; }>` |


## Dependencies

### Used by

 - [plug-payments-credit](../..)

### Depends on

- checkout-text-field
- checkout-error-message
- checkout-select-field
- checkout-switch
- checkout-typography

### Graph
```mermaid
graph TD;
  plug-payments-credit-form --> checkout-text-field
  plug-payments-credit-form --> checkout-error-message
  plug-payments-credit-form --> checkout-select-field
  plug-payments-credit-form --> checkout-switch
  plug-payments-credit-form --> checkout-typography
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  plug-payments-credit --> plug-payments-credit-form
  style plug-payments-credit-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
