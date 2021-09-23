# plug-checkout-form

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute    | Description | Type                                           | Default     |
| ------------------------ | ------------ | ----------- | ---------------------------------------------- | ----------- |
| `amount`                 | `amount`     |             | `number`                                       | `undefined` |
| `customFormStyleClasses` | --           |             | `PlugPaymentsCreditFormCustomStyleFormClasses` | `undefined` |
| `formValues`             | --           |             | `PlugPaymentsCreditFormValues`                 | `undefined` |
| `installmentsConfig`     | --           |             | `PlugPaymentsCreditInstallmentsConfig`         | `undefined` |
| `isLoading`              | `is-loading` |             | `boolean`                                      | `undefined` |


## Events

| Event         | Description | Type                                             |
| ------------- | ----------- | ------------------------------------------------ |
| `fieldChange` |             | `CustomEvent<{ field: string; value: string; }>` |
| `formSubmit`  |             | `CustomEvent<void>`                              |


## Dependencies

### Used by

 - [plug-payments-credit](../..)

### Depends on

- checkout-text-field
- checkout-error-message
- checkout-select-field
- checkout-button
- checkout-icon

### Graph
```mermaid
graph TD;
  plug-payments-credit-form --> checkout-text-field
  plug-payments-credit-form --> checkout-error-message
  plug-payments-credit-form --> checkout-select-field
  plug-payments-credit-form --> checkout-button
  plug-payments-credit-form --> checkout-icon
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  checkout-button --> checkout-icon
  plug-payments-credit --> plug-payments-credit-form
  style plug-payments-credit-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
