# malga-payments-nupay



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [malga-checkout](../malga-checkout)
 - [malga-payments](../malga-payments)

### Depends on

- [malga-payments-nupay-content](./partials/malga-payments-nupay-content)
- [malga-payments-nupay-iframe](./partials/malga-payments-nupay-iframe)
- checkout-modal

### Graph
```mermaid
graph TD;
  malga-payments-nupay --> malga-payments-nupay-content
  malga-payments-nupay --> malga-payments-nupay-iframe
  malga-payments-nupay --> checkout-modal
  malga-payments-nupay-iframe --> checkout-icon
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
  malga-checkout --> malga-payments-nupay
  malga-payments --> malga-payments-nupay
  style malga-payments-nupay fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
