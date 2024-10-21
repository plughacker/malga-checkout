# malga-checkout-full

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute         | Description | Type                                                                    | Default                                                                                                                                                                                                                                                              |
| ------------------- | ----------------- | ----------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appInfo`           | --                |             | `MalgaAppInfo`                                                          | `undefined`                                                                                                                                                                                                                                                          |
| `clientId`          | `client-id`       |             | `string`                                                                | `undefined`                                                                                                                                                                                                                                                          |
| `debug`             | `debug`           |             | `boolean`                                                               | `false`                                                                                                                                                                                                                                                              |
| `dialogConfig`      | --                |             | `MalgaCheckoutFullDialog`                                               | `{     show: true,   }`                                                                                                                                                                                                                                              |
| `idempotencyKey`    | `idempotency-key` |             | `string`                                                                | `undefined`                                                                                                                                                                                                                                                          |
| `locale`            | `locale`          |             | `"default" \| "en" \| "en-US" \| "en_US" \| "pt" \| "pt-BR" \| "pt_BR"` | `undefined`                                                                                                                                                                                                                                                          |
| `merchantId`        | `merchant-id`     |             | `string`                                                                | `undefined`                                                                                                                                                                                                                                                          |
| `pageConfig`        | --                |             | `MalgaCheckoutFullPage`                                                 | `{     brandUrl: '',     footerDescription: '',     backRoute: '',     delivery: 0,     products: [],     internationalCustomer: false,   }`                                                                                                                         |
| `paymentMethods`    | --                |             | `MalgaCheckoutFullPaymentMethods`                                       | `{     pix: undefined,     credit: undefined,     boleto: undefined,     nupay: undefined,     drip: undefined,   }`                                                                                                                                                 |
| `publicKey`         | `public-key`      |             | `string`                                                                | `undefined`                                                                                                                                                                                                                                                          |
| `sandbox`           | `sandbox`         |             | `boolean`                                                               | `false`                                                                                                                                                                                                                                                              |
| `sessionId`         | `session-id`      |             | `string`                                                                | `undefined`                                                                                                                                                                                                                                                          |
| `transactionConfig` | --                |             | `MalgaCheckoutFullTransaction`                                          | `{     statementDescriptor: '',     amount: 0,     description: '',     orderId: '',     customerId: '',     currency: 'BRL',     capture: false,     fraudAnalysis: null,     paymentFlowMetadata: null,     splitRules: null,     providerReferenceKey: null,   }` |


## Events

| Event                | Description | Type                                                     |
| -------------------- | ----------- | -------------------------------------------------------- |
| `transactionFailed`  |             | `CustomEvent<{ error: MalgaCheckoutFullChargeError; }>`  |
| `transactionSuccess` |             | `CustomEvent<{ data: MalgaCheckoutFullChargeSuccess; }>` |


## Dependencies

### Depends on

- [malga-checkout-full-header](./partials/malga-checkout-full-header)
- [malga-checkout-full-content](./partials/malga-checkout-full-content)
- checkout-order-summary
- checkout-accordion
- [malga-checkout-full-identification](./partials/malga-checkout-full-identification)
- checkout-icon
- [malga-checkout-full-footer](./partials/malga-checkout-full-footer)

### Graph
```mermaid
graph TD;
  malga-checkout-full --> malga-checkout-full-header
  malga-checkout-full --> malga-checkout-full-content
  malga-checkout-full --> checkout-order-summary
  malga-checkout-full --> checkout-accordion
  malga-checkout-full --> malga-checkout-full-identification
  malga-checkout-full --> checkout-icon
  malga-checkout-full --> malga-checkout-full-footer
  malga-checkout-full-header --> checkout-icon
  malga-checkout-full-header --> checkout-dropdown
  checkout-dropdown --> checkout-icon
  checkout-order-summary --> checkout-loader
  checkout-order-summary --> checkout-typography
  checkout-order-summary --> checkout-icon
  checkout-loader --> checkout-icon
  checkout-accordion --> checkout-icon
  malga-checkout-full-identification --> checkout-loader
  malga-checkout-full-identification --> checkout-typography
  malga-checkout-full-identification --> checkout-text-field
  malga-checkout-full-identification --> checkout-error-message
  malga-checkout-full-identification --> checkout-select-field
  malga-checkout-full-identification --> checkout-button
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  checkout-button --> checkout-icon
  malga-checkout-full-footer --> checkout-dropdown
  style malga-checkout-full fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
