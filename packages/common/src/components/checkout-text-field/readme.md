# checkout-text-field

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description | Type                                                                                                                                                                                                                                                                                                                                                                          | Default     |
| ---------------------- | ------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `autofocus`            | `autofocus`              |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `false`     |
| `customContainerClass` | `custom-container-class` |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `customInputClass`     | `custom-input-class`     |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `customLabelClass`     | `custom-label-class`     |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `disabled`             | `disabled`               |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `false`     |
| `fullWidth`            | `full-width`             |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `false`     |
| `hasError`             | `has-error`              |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `hasValidation`        | `has-validation`         |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `inputmode`            | `inputmode`              |             | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"`                                                                                                                                                                                                                                                                                         | `'text'`    |
| `label`                | `label`                  |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `mask`                 | `mask`                   |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `max`                  | `max`                    |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `maxlength`            | `maxlength`              |             | `number`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `min`                  | `min`                    |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `minlength`            | `minlength`              |             | `number`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `multiple`             | `multiple`               |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `undefined` |
| `name`                 | `name`                   |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `placeholder`          | `placeholder`            |             | `string`                                                                                                                                                                                                                                                                                                                                                                      | `undefined` |
| `readonly`             | `readonly`               |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `false`     |
| `required`             | `required`               |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                     | `false`     |
| `startIcon`            | `start-icon`             |             | `"arrowDown" \| "calendar" \| "check" \| "creditCard" \| "cvv" \| "dollar" \| "lock" \| "spinner" \| "user" \| "warning" \| "poweredByMalga" \| "edit" \| "eye" \| "eyeSlash" \| "arrowLeft" \| "error" \| "checkLarge" \| "clipboard" \| "pix" \| "newTab" \| "amex" \| "dinersclub" \| "discover" \| "elo" \| "hipercard" \| "mastercard" \| "visa" \| "globe" \| "nubank"` | `undefined` |
| `type`                 | `type`                   |             | `"date" \| "email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url"`                                                                                                                                                                                                                                                                               | `'text'`    |
| `value`                | `value`                  |             | `number \| string`                                                                                                                                                                                                                                                                                                                                                            | `''`        |


## Events

| Event     | Description | Type                                        |
| --------- | ----------- | ------------------------------------------- |
| `blurred` |             | `CustomEvent<FocusEvent>`                   |
| `changed` |             | `CustomEvent<CheckoutTextFieldChangeEvent>` |
| `focused` |             | `CustomEvent<FocusEvent>`                   |
| `inputed` |             | `CustomEvent<KeyboardEvent>`                |


## Dependencies

### Depends on

- [checkout-typography](../checkout-typography)
- [checkout-icon](../checkout-icon)

### Graph
```mermaid
graph TD;
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  style checkout-text-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
