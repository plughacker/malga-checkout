# plug-checkout-form

<!-- Auto Generated Below -->

## Properties

| Property                 | Attribute    | Description | Type                                     | Default     |
| ------------------------ | ------------ | ----------- | ---------------------------------------- | ----------- |
| `amount`                 | `amount`     |             | `number`                                 | `undefined` |
| `customFormStyleClasses` | --           |             | `PlugCheckoutFormCustomStyleFormClasses` | `undefined` |
| `formValues`             | --           |             | `PlugCheckoutFormValues`                 | `undefined` |
| `installmentsConfig`     | --           |             | `PlugCheckoutInstallmentsConfig`         | `undefined` |
| `isLoading`              | `is-loading` |             | `boolean`                                | `undefined` |

## Events

| Event         | Description | Type                                             |
| ------------- | ----------- | ------------------------------------------------ |
| `fieldChange` |             | `CustomEvent<{ field: string; value: string; }>` |
| `formSubmit`  |             | `CustomEvent<void>`                              |

## Dependencies

### Used by

- [plug-checkout](../..)

### Depends on

- [checkout-input](../../../../partials/checkout-input)
- [checkout-error-message](../../../../partials/checkout-error-message)
- [checkout-select](../../../../partials/checkout-select)
- [checkout-button](../../../../partials/checkout-button)

### Graph

```mermaid
graph TD;
  plug-checkout-form --> checkout-input
  plug-checkout-form --> checkout-error-message
  plug-checkout-form --> checkout-select
  plug-checkout-form --> checkout-button
  checkout-input --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select --> checkout-icon
  checkout-button --> checkout-icon
  plug-checkout --> plug-checkout-form
  style plug-checkout-form fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
