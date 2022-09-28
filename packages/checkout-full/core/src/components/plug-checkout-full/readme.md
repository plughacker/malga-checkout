# plug-checkout-full



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute         | Description | Type                             | Default                                                                                                                                                                            |
| ------------------- | ----------------- | ----------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`          | `client-id`       |             | `string`                         | `undefined`                                                                                                                                                                        |
| `dialogConfig`      | --                |             | `PlugCheckoutFullDialog`         | `{     show: true,     actionButtonLabel: 'Continuar',     successActionButtonLabel: 'Continuar',     errorActionButtonLabel: 'Tentar Novamente',     successRedirectUrl: '',   }` |
| `idempotencyKey`    | `idempotency-key` |             | `string`                         | `undefined`                                                                                                                                                                        |
| `merchantId`        | `merchant-id`     |             | `string`                         | `undefined`                                                                                                                                                                        |
| `pageConfig`        | --                |             | `PlugCheckoutFullPage`           | `{     brandUrl: '',     footerDescription: '',     backRoute: '',     delivery: 0,     products: [],   }`                                                                         |
| `paymentMethods`    | --                |             | `PlugCheckoutFullPaymentMethods` | `{     pix: undefined,     credit: undefined,     boleto: undefined,   }`                                                                                                          |
| `publicKey`         | `public-key`      |             | `string`                         | `undefined`                                                                                                                                                                        |
| `sandbox`           | `sandbox`         |             | `boolean`                        | `false`                                                                                                                                                                            |
| `sessionId`         | `session-id`      |             | `string`                         | `undefined`                                                                                                                                                                        |
| `transactionConfig` | --                |             | `PlugCheckoutFullTransaction`    | `{     statementDescriptor: '',     amount: 0,     description: '',     orderId: '',     customerId: '',     currency: 'BRL',     capture: false,     fraudAnalysis: null,   }`    |


## Events

| Event                | Description | Type                                                    |
| -------------------- | ----------- | ------------------------------------------------------- |
| `transactionFailed`  |             | `CustomEvent<{ error: PlugCheckoutFullChargeError; }>`  |
| `transactionSuccess` |             | `CustomEvent<{ data: PlugCheckoutFullChargeSuccess; }>` |


## Dependencies

### Depends on

- [plug-checkout-full-header](./partials/plug-checkout-full-header)
- [plug-checkout-full-content](./partials/plug-checkout-full-content)
- checkout-order-summary
- checkout-accordion
- [plug-checkout-full-identification](./partials/plug-checkout-full-identification)
- checkout-icon
- [plug-checkout-full-footer](./partials/plug-checkout-full-footer)

### Graph
```mermaid
graph TD;
  plug-checkout-full --> plug-checkout-full-header
  plug-checkout-full --> plug-checkout-full-content
  plug-checkout-full --> checkout-order-summary
  plug-checkout-full --> checkout-accordion
  plug-checkout-full --> plug-checkout-full-identification
  plug-checkout-full --> checkout-icon
  plug-checkout-full --> plug-checkout-full-footer
  plug-checkout-full-header --> checkout-icon
  checkout-order-summary --> checkout-skeleton
  checkout-order-summary --> checkout-typography
  checkout-order-summary --> checkout-icon
  checkout-accordion --> checkout-icon
  plug-checkout-full-identification --> checkout-typography
  plug-checkout-full-identification --> checkout-text-field
  plug-checkout-full-identification --> checkout-error-message
  plug-checkout-full-identification --> checkout-select-field
  plug-checkout-full-identification --> checkout-button
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  checkout-button --> checkout-icon
  style plug-checkout-full fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
