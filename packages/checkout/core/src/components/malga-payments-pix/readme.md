# malga-payments-pix

<!-- Auto Generated Below -->


## Events

| Event              | Description | Type                                          |
| ------------------ | ----------- | --------------------------------------------- |
| `pixPaymentFailed` |             | `CustomEvent<{ error: MalgaPaymentsError; }>` |


## Dependencies

### Used by

 - [malga-checkout](../malga-checkout)
 - [malga-payments](../malga-payments)

### Depends on

- checkout-manual-payment
- checkout-modal

### Graph
```mermaid
graph TD;
  malga-payments-pix --> checkout-manual-payment
  malga-payments-pix --> checkout-modal
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
  checkout-modal-pix --> checkout-button
  checkout-modal-pix --> checkout-countdown
  checkout-clipboard-button --> checkout-icon
  checkout-clipboard-button --> checkout-typography
  checkout-countdown --> checkout-typography
  checkout-modal-boleto --> checkout-icon
  checkout-modal-boleto --> checkout-typography
  checkout-modal-boleto --> checkout-clipboard-button
  checkout-modal-boleto --> checkout-button
  malga-checkout --> malga-payments-pix
  malga-payments --> malga-payments-pix
  style malga-payments-pix fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
