# malga-checkout-full-footer

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type     | Default     |
| ------------- | ------------- | ----------- | -------- | ----------- |
| `description` | `description` |             | `string` | `undefined` |
| `language`    | `language`    |             | `string` | `undefined` |


## Events

| Event            | Description | Type                              |
| ---------------- | ----------- | --------------------------------- |
| `changeLanguage` |             | `CustomEvent<{ value: Locale; }>` |


## Dependencies

### Used by

 - [malga-checkout-full](../..)

### Depends on

- checkout-dropdown

### Graph
```mermaid
graph TD;
  malga-checkout-full-footer --> checkout-dropdown
  checkout-dropdown --> checkout-icon
  malga-checkout-full --> malga-checkout-full-footer
  style malga-checkout-full-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
