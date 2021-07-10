# plug-checkout

<!-- Auto Generated Below -->

## Properties

| Property                 | Attribute              | Description | Type                                     | Default                        |
| ------------------------ | ---------------------- | ----------- | ---------------------------------------- | ------------------------------ |
| `amount`                 | `amount`               |             | `number`                                 | `undefined`                    |
| `apiKey`                 | `api-key`              |             | `string`                                 | `undefined`                    |
| `capture`                | `capture`              |             | `boolean`                                | `false`                        |
| `clientId`               | `client-id`            |             | `string`                                 | `undefined`                    |
| `customFormStyleClasses` | --                     |             | `PlugCheckoutFormCustomStyleFormClasses` | `defaultCustomStyles`          |
| `installmentsConfig`     | --                     |             | `PlugCheckoutInstallmentsConfig`         | `{ show: true, quantity: 1, }` |
| `merchantId`             | `merchant-id`          |             | `string`                                 | `undefined`                    |
| `statementDescriptor`    | `statement-descriptor` |             | `string`                                 | `undefined`                    |

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

---

_Built with [StencilJS](https://stenciljs.com/)_
