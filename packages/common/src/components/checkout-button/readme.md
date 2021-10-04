# checkout-button



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                                                                                                                                                                                                                   | Default     |
| ------------- | -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `customClass` | `custom-class` |             | `string`                                                                                                                                                                                                                               | `undefined` |
| `disabled`    | `disabled`     |             | `boolean`                                                                                                                                                                                                                              | `false`     |
| `fullWidth`   | `full-width`   |             | `boolean`                                                                                                                                                                                                                              | `undefined` |
| `icon`        | `icon`         |             | `"arrowDown" \| "arrowLeft" \| "calendar" \| "check" \| "checkLarge" \| "clipboard" \| "creditCard" \| "cvv" \| "dollar" \| "edit" \| "error" \| "eye" \| "eyeSlash" \| "lock" \| "poweredByPlug" \| "spinner" \| "user" \| "warning"` | `undefined` |
| `isLoading`   | `is-loading`   |             | `boolean`                                                                                                                                                                                                                              | `undefined` |
| `label`       | `label`        |             | `string`                                                                                                                                                                                                                               | `undefined` |
| `type`        | `type`         |             | `"button" \| "reset" \| "submit"`                                                                                                                                                                                                      | `'button'`  |


## Events

| Event     | Description | Type                |
| --------- | ----------- | ------------------- |
| `blured`  |             | `CustomEvent<void>` |
| `clicked` |             | `CustomEvent<void>` |
| `focused` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [checkout-manual-payment](../checkout-manual-payment)
 - [checkout-modal-error](../checkout-modal/partials/checkout-modal-error)
 - [checkout-modal-success](../checkout-modal/partials/checkout-modal-success)

### Depends on

- [checkout-icon](../checkout-icon)

### Graph
```mermaid
graph TD;
  checkout-button --> checkout-icon
  checkout-manual-payment --> checkout-button
  checkout-modal-error --> checkout-button
  checkout-modal-success --> checkout-button
  style checkout-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
