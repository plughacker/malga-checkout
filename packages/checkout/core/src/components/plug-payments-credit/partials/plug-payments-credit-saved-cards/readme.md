# plug-payments-credit-saved-cards



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [plug-checkout](../../../plug-checkout)
 - [plug-payments](../../../plug-payments)

### Depends on

- checkout-radio-field
- checkout-typography
- checkout-text-field
- checkout-error-message
- checkout-modal

### Graph
```mermaid
graph TD;
  plug-payments-credit-saved-cards --> checkout-radio-field
  plug-payments-credit-saved-cards --> checkout-typography
  plug-payments-credit-saved-cards --> checkout-text-field
  plug-payments-credit-saved-cards --> checkout-error-message
  plug-payments-credit-saved-cards --> checkout-modal
  checkout-radio-field --> checkout-icon
  checkout-text-field --> checkout-typography
  checkout-text-field --> checkout-icon
  checkout-error-message --> checkout-typography
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
  checkout-modal-pix --> checkout-countdown
  checkout-modal-pix --> checkout-button
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-countdown --> checkout-typography
  checkout-modal-boleto --> checkout-icon
  checkout-modal-boleto --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  checkout-modal-boleto --> checkout-button
  plug-checkout --> plug-payments-credit-saved-cards
  plug-payments --> plug-payments-credit-saved-cards
  style plug-payments-credit-saved-cards fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
