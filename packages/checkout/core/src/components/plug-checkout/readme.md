# plug-checkout

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute              | Description | Type                                     | Default                                  |
| ------------------------ | ---------------------- | ----------- | ---------------------------------------- | ---------------------------------------- |
| `amount`                 | `amount`               |             | `number`                                 | `undefined`                              |
| `capture`                | `capture`              |             | `boolean`                                | `false`                                  |
| `clientId`               | `client-id`            |             | `string`                                 | `undefined`                              |
| `customFormStyleClasses` | --                     |             | `PlugCheckoutFormCustomStyleFormClasses` | `defaultCustomStyles`                    |
| `installmentsConfig`     | --                     |             | `PlugCheckoutInstallmentsConfig`         | `{     show: true,     quantity: 1,   }` |
| `merchantId`             | `merchant-id`          |             | `string`                                 | `undefined`                              |
| `publicKey`              | `public-key`           |             | `string`                                 | `undefined`                              |
| `sandbox`                | `sandbox`              |             | `boolean`                                | `false`                                  |
| `statementDescriptor`    | `statement-descriptor` |             | `string`                                 | `undefined`                              |


## Events

| Event            | Description | Type                                                 |
| ---------------- | ----------- | ---------------------------------------------------- |
| `paymentFailed`  |             | `CustomEvent<{ error: PlugCheckoutOneShotError; }>`  |
| `paymentSuccess` |             | `CustomEvent<{ data: PlugCheckoutOneShotSuccess; }>` |


## Dependencies

### Depends on

- [checkout-credit-card](../../partials/checkout-credit-card)
- [plug-checkout-form](./partials/plug-checkout-form)

### Graph
```mermaid
graph TD;
  plug-checkout --> checkout-credit-card
  plug-checkout --> plug-checkout-form
  plug-checkout-form --> checkout-input
  plug-checkout-form --> checkout-error-message
  plug-checkout-form --> checkout-select
  plug-checkout-form --> checkout-button
  checkout-input --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select --> checkout-icon
  checkout-button --> checkout-icon
  style plug-checkout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
