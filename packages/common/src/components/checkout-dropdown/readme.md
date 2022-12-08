# checkout-dropdown



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                        | Default     |
| ----------- | ------------ | ----------- | --------------------------- | ----------- |
| `fullWidth` | `full-width` |             | `boolean`                   | `false`     |
| `label`     | `label`      |             | `string`                    | `undefined` |
| `options`   | --           |             | `CheckoutDropdownOptions[]` | `undefined` |
| `value`     | `value`      |             | `string`                    | `undefined` |


## Events

| Event     | Description | Type                              |
| --------- | ----------- | --------------------------------- |
| `changed` |             | `CustomEvent<{ value: string; }>` |


## Dependencies

### Depends on

- [checkout-icon](../checkout-icon)

### Graph
```mermaid
graph TD;
  checkout-dropdown --> checkout-icon
  style checkout-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
