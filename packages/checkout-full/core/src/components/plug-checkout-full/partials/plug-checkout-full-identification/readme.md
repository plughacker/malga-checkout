# plug-checkout-full-identification



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                | Description | Type                                                                    | Default     |
| ----------------------- | ------------------------ | ----------- | ----------------------------------------------------------------------- | ----------- |
| `formValues`            | --                       |             | `PlugCheckoutFullIdentificationFormValues`                              | `undefined` |
| `internationalCustomer` | `international-customer` |             | `boolean`                                                               | `undefined` |
| `isLoading`             | `is-loading`             |             | `boolean`                                                               | `false`     |
| `locale`                | `locale`                 |             | `"default" \| "en" \| "en-US" \| "en_US" \| "pt" \| "pt-BR" \| "pt_BR"` | `undefined` |


## Events

| Event              | Description | Type                                                                             |
| ------------------ | ----------- | -------------------------------------------------------------------------------- |
| `fieldChange`      |             | `CustomEvent<{ field: string; value: string; }>`                                 |
| `manyFieldsChange` |             | `CustomEvent<{ customerFormValues: PlugCheckoutFullIdentificationFormValues; }>` |
| `submitForm`       |             | `CustomEvent<void>`                                                              |


## Dependencies

### Used by

 - [plug-checkout-full](../..)

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
  plug-checkout-full-identification --> checkout-loader
  plug-checkout-full-identification --> checkout-typography
  plug-checkout-full-identification --> checkout-text-field
  plug-checkout-full-identification --> checkout-error-message
  plug-checkout-full-identification --> checkout-select-field
  plug-checkout-full-identification --> checkout-button
  checkout-loader --> checkout-icon
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  checkout-button --> checkout-icon
  plug-checkout-full --> plug-checkout-full-identification
  style plug-checkout-full-identification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
