# malga-checkout-full

<!-- Auto Generated Below -->

## Properties

| Property            | Attribute         | Description | Type                                                                    | Default                                                                                                                                       |
| ------------------- | ----------------- | ----------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`          | `client-id`       |             | `string`                                                                | `undefined`                                                                                                                                   |
| `debug`             | `debug`           |             | `boolean`                                                               | `false`                                                                                                                                       |
| `dialogConfig`      | --                |             | `MalgaCheckoutFullDialog`                                               | `{ show: true, }`                                                                                                                             |
| `idempotencyKey`    | `idempotency-key` |             | `string`                                                                | `undefined`                                                                                                                                   |
| `locale`            | `locale`          |             | `"default" \| "en" \| "en-US" \| "en_US" \| "pt" \| "pt-BR" \| "pt_BR"` | `undefined`                                                                                                                                   |
| `merchantId`        | `merchant-id`     |             | `string`                                                                | `undefined`                                                                                                                                   |
| `pageConfig`        | --                |             | `MalgaCheckoutFullPage`                                                 | `{ brandUrl: '', footerDescription: '', backRoute: '', delivery: 0, products: [], internationalCustomer: false, }`                            |
| `paymentMethods`    | --                |             | `MalgaCheckoutFullPaymentMethods`                                       | `{ pix: undefined, credit: undefined, boleto: undefined, }`                                                                                   |
| `publicKey`         | `public-key`      |             | `string`                                                                | `undefined`                                                                                                                                   |
| `sandbox`           | `sandbox`         |             | `boolean`                                                               | `false`                                                                                                                                       |
| `sessionId`         | `session-id`      |             | `string`                                                                | `undefined`                                                                                                                                   |
| `transactionConfig` | --                |             | `MalgaCheckoutFullTransaction`                                          | `{ statementDescriptor: '', amount: 0, description: '', orderId: '', customerId: '', currency: 'BRL', capture: false, fraudAnalysis: null, }` |

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
- malga-checkout
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
  malga-checkout-full --> malga-checkout
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
  malga-checkout --> checkout-loader
  malga-checkout --> malga-payments
  malga-checkout --> malga-payments-credit-saved-cards
  malga-checkout --> malga-payments-credit
  malga-checkout --> malga-payments-boleto
  malga-checkout --> malga-payments-pix
  malga-checkout --> checkout-button
  malga-checkout --> checkout-icon
  malga-payments --> malga-payments-credit-saved-cards
  malga-payments --> checkout-radio-field
  malga-payments --> malga-payments-credit
  malga-payments --> malga-payments-boleto
  malga-payments --> malga-payments-pix
  malga-payments-credit-saved-cards --> checkout-radio-field
  malga-payments-credit-saved-cards --> checkout-typography
  malga-payments-credit-saved-cards --> checkout-text-field
  malga-payments-credit-saved-cards --> checkout-error-message
  malga-payments-credit-saved-cards --> checkout-select-field
  malga-payments-credit-saved-cards --> checkout-modal
  checkout-radio-field --> checkout-icon
  checkout-modal --> checkout-modal-success
  checkout-modal --> checkout-modal-error
  checkout-modal --> checkout-modal-pix
  checkout-modal --> checkout-modal-boleto
  checkout-modal-success --> checkout-icon
  checkout-modal-success --> checkout-typography
  checkout-modal-success --> checkout-button
  checkout-modal-error --> checkout-icon
  checkout-modal-error --> checkout-typography
  checkout-modal-error --> checkout-button
  checkout-modal-pix --> checkout-icon
  checkout-modal-pix --> checkout-typography
  checkout-modal-pix --> checkout-clipboard-button
  checkout-modal-pix --> checkout-button
  checkout-modal-pix --> checkout-countdown
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-countdown --> checkout-typography
  checkout-modal-boleto --> checkout-icon
  checkout-modal-boleto --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  checkout-modal-boleto --> checkout-button
  malga-payments-credit --> checkout-credit-card
  malga-payments-credit --> malga-payments-credit-form
  malga-payments-credit --> checkout-modal
  malga-payments-credit-form --> checkout-text-field
  malga-payments-credit-form --> checkout-error-message
  malga-payments-credit-form --> checkout-select-field
  malga-payments-credit-form --> checkout-switch
  malga-payments-credit-form --> checkout-typography
  malga-payments-boleto --> checkout-manual-payment
  malga-payments-boleto --> checkout-modal
  checkout-manual-payment --> checkout-typography
  malga-payments-pix --> checkout-manual-payment
  malga-payments-pix --> checkout-modal
  malga-checkout-full-footer --> checkout-dropdown
  style malga-checkout-full fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
