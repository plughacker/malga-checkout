# plug-checkout-full-footer



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

 - [plug-checkout-full](../..)

### Depends on

- checkout-dropdown

### Graph
```mermaid
graph TD;
  plug-checkout-full-footer --> checkout-dropdown
  checkout-dropdown --> checkout-icon
  plug-checkout-full --> plug-checkout-full-footer
  style plug-checkout-full-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
