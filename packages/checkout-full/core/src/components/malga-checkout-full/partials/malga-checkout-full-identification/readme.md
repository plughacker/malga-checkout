# malga-checkout-full-identification

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                | Description | Type                                                                    | Default     |
| ----------------------- | ------------------------ | ----------- | ----------------------------------------------------------------------- | ----------- |
| `formValues`            | --                       |             | `MalgaCheckoutFullIdentificationFormValues`                             | `undefined` |
| `internationalCustomer` | `international-customer` |             | `boolean`                                                               | `undefined` |
| `isLoading`             | `is-loading`             |             | `boolean`                                                               | `false`     |
| `locale`                | `locale`                 |             | `"default" \| "en" \| "en-US" \| "en_US" \| "pt" \| "pt-BR" \| "pt_BR"` | `undefined` |


## Events

| Event              | Description | Type                                                                              |
| ------------------ | ----------- | --------------------------------------------------------------------------------- |
| `fieldChange`      |             | `CustomEvent<{ field: string; value: string; }>`                                  |
| `manyFieldsChange` |             | `CustomEvent<{ customerFormValues: MalgaCheckoutFullIdentificationFormValues; }>` |
| `submitForm`       |             | `CustomEvent<void>`                                                               |


## Dependencies

### Used by

 - [malga-checkout-full](../..)

### Depends on

- checkout-loader
- checkout-typography
- checkout-text-field
- checkout-error-message
- checkout-select-field
- checkout-button

### Graph
```mermaid
graph TD;
  malga-checkout-full-identification --> checkout-loader
  malga-checkout-full-identification --> checkout-typography
  malga-checkout-full-identification --> checkout-text-field
  malga-checkout-full-identification --> checkout-error-message
  malga-checkout-full-identification --> checkout-select-field
  malga-checkout-full-identification --> checkout-button
  checkout-loader --> checkout-icon
  checkout-text-field --> checkout-typography
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  checkout-button --> checkout-icon
  malga-checkout-full --> malga-checkout-full-identification
  style malga-checkout-full-identification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
