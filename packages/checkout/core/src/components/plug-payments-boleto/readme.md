# plug-payments-boleto

<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [plug-checkout](../plug-checkout)
 - [plug-payments](../plug-payments)

### Depends on

- checkout-manual-payment
- checkout-modal

### Graph
```mermaid
graph TD;
  plug-payments-boleto --> checkout-manual-payment
  plug-payments-boleto --> checkout-modal
  checkout-manual-payment --> checkout-typography
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
  plug-checkout --> plug-payments-boleto
  plug-payments --> plug-payments-boleto
  style plug-payments-boleto fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
