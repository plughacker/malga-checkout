# malga-payments-credit-saved-cards

<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [malga-checkout](../../../malga-checkout)
 - [malga-payments](../../../malga-payments)

### Depends on

- checkout-radio-field
- checkout-typography
- checkout-text-field
- checkout-error-message
- checkout-select-field
- checkout-modal

### Graph
```mermaid
graph TD;
  malga-payments-credit-saved-cards --> checkout-radio-field
  malga-payments-credit-saved-cards --> checkout-typography
  malga-payments-credit-saved-cards --> checkout-text-field
  malga-payments-credit-saved-cards --> checkout-error-message
  malga-payments-credit-saved-cards --> checkout-select-field
  malga-payments-credit-saved-cards --> checkout-modal
  checkout-radio-field --> checkout-icon
  checkout-text-field --> checkout-typography
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
  malga-checkout --> malga-payments-credit-saved-cards
  malga-payments --> malga-payments-credit-saved-cards
  style malga-payments-credit-saved-cards fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
