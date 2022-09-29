# plug-checkout



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute         | Description | Type                         | Default                                                                                                                                                                                             |
| ------------------- | ----------------- | ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`          | `client-id`       |             | `string`                     | `undefined`                                                                                                                                                                                         |
| `dialogConfig`      | --                |             | `PlugCheckoutDialog`         | `{     show: true,     actionButtonLabel: 'Continuar',     successActionButtonLabel: 'Continuar',     errorActionButtonLabel: 'Tentar Novamente',     successRedirectUrl: '',   }`                  |
| `idempotencyKey`    | `idempotency-key` |             | `string`                     | `undefined`                                                                                                                                                                                         |
| `merchantId`        | `merchant-id`     |             | `string`                     | `undefined`                                                                                                                                                                                         |
| `paymentMethods`    | --                |             | `PlugCheckoutPaymentMethods` | `{     pix: undefined,     credit: undefined,     boleto: undefined,   }`                                                                                                                           |
| `publicKey`         | `public-key`      |             | `string`                     | `undefined`                                                                                                                                                                                         |
| `sandbox`           | `sandbox`         |             | `boolean`                    | `false`                                                                                                                                                                                             |
| `transactionConfig` | --                |             | `PlugCheckoutTransaction`    | `{     statementDescriptor: '',     amount: 0,     description: '',     orderId: '',     customerId: '',     currency: 'BRL',     capture: false,     customer: null,     fraudAnalysis: null,   }` |


## Events

| Event            | Description | Type                                                |
| ---------------- | ----------- | --------------------------------------------------- |
| `paymentFailed`  |             | `CustomEvent<{ error: PlugPaymentsChargeError; }>`  |
| `paymentSuccess` |             | `CustomEvent<{ data: PlugPaymentsChargeSuccess; }>` |


## Dependencies

### Depends on

- [plug-payments](../plug-payments)
- [plug-payments-credit-saved-cards](../plug-payments-credit/partials/plug-payments-credit-saved-cards)
- [plug-payments-credit](../plug-payments-credit)
- [plug-payments-boleto](../plug-payments-boleto)
- [plug-payments-pix](../plug-payments-pix)
- checkout-button
- checkout-icon

### Graph
```mermaid
graph TD;
  plug-checkout --> plug-payments
  plug-checkout --> plug-payments-credit-saved-cards
  plug-checkout --> plug-payments-credit
  plug-checkout --> plug-payments-boleto
  plug-checkout --> plug-payments-pix
  plug-checkout --> checkout-button
  plug-checkout --> checkout-icon
  plug-payments --> plug-payments-credit-saved-cards
  plug-payments --> checkout-radio-field
  plug-payments --> plug-payments-credit
  plug-payments --> plug-payments-boleto
  plug-payments --> plug-payments-pix
  plug-payments-credit-saved-cards --> checkout-radio-field
  plug-payments-credit-saved-cards --> checkout-typography
  plug-payments-credit-saved-cards --> checkout-text-field
  plug-payments-credit-saved-cards --> checkout-error-message
  plug-payments-credit-saved-cards --> checkout-select-field
  plug-payments-credit-saved-cards --> checkout-modal
  checkout-radio-field --> checkout-icon
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
  checkout-select-field --> checkout-typography
  checkout-select-field --> checkout-icon
  checkout-modal --> checkout-modal-success
  checkout-modal --> checkout-modal-error
  checkout-modal --> checkout-modal-pix
  checkout-modal --> checkout-modal-boleto
  checkout-modal-success --> checkout-icon
  checkout-modal-success --> checkout-typography
  checkout-modal-success --> checkout-button
  checkout-button --> checkout-icon
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
  plug-payments-credit --> checkout-credit-card
  plug-payments-credit --> plug-payments-credit-form
  plug-payments-credit --> checkout-modal
  plug-payments-credit-form --> checkout-text-field
  plug-payments-credit-form --> checkout-error-message
  plug-payments-credit-form --> checkout-select-field
  plug-payments-credit-form --> checkout-switch
  plug-payments-credit-form --> checkout-typography
  plug-payments-boleto --> checkout-manual-payment
  plug-payments-boleto --> checkout-modal
  checkout-manual-payment --> checkout-typography
  plug-payments-pix --> checkout-manual-payment
  plug-payments-pix --> checkout-modal
  style plug-checkout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
