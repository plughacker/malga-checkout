# checkout-modal-success



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                     | Description | Type                                                                    | Default     |
| -------------------------- | ----------------------------- | ----------- | ----------------------------------------------------------------------- | ----------- |
| `hasSuccessRedirectUrl`    | `has-success-redirect-url`    |             | `boolean`                                                               | `undefined` |
| `locale`                   | `locale`                      |             | `"default" \| "en" \| "en-US" \| "en_US" \| "pt" \| "pt-BR" \| "pt_BR"` | `undefined` |
| `successActionButtonLabel` | `success-action-button-label` |             | `string`                                                                | `undefined` |
| `successDescription`       | `success-description`         |             | `string`                                                                | `undefined` |


## Events

| Event                        | Description | Type                |
| ---------------------------- | ----------- | ------------------- |
| `successActionButtonClicked` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [checkout-modal](../..)

### Depends on

- [checkout-icon](../../../checkout-icon)
- [checkout-typography](../../../checkout-typography)
- [checkout-button](../../../checkout-button)

### Graph
```mermaid
graph TD;
  checkout-modal-success --> checkout-icon
  checkout-modal-success --> checkout-typography
  checkout-modal-success --> checkout-button
  checkout-button --> checkout-icon
  checkout-modal --> checkout-modal-success
  style checkout-modal-success fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
