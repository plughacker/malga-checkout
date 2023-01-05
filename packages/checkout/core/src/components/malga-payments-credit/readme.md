# malga-checkout

<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [malga-checkout](../malga-checkout)
 - [malga-payments](../malga-payments)

### Depends on

- checkout-credit-card
- [malga-payments-credit-form](./partials/malga-payments-credit-form)
- checkout-modal

### Graph
```mermaid
graph TD;
  malga-payments-credit --> checkout-credit-card
  malga-payments-credit --> malga-payments-credit-form
  malga-payments-credit --> checkout-modal
  malga-payments-credit-form --> checkout-text-field
  malga-payments-credit-form --> checkout-error-message
  malga-payments-credit-form --> checkout-select-field
  malga-payments-credit-form --> checkout-switch
  malga-payments-credit-form --> checkout-typography
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
  malga-checkout --> malga-payments-credit
  malga-payments --> malga-payments-credit
  style malga-payments-credit fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
