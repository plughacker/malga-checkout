# malga-payments

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description | Type                   | Default                       |
| ---------------- | --------- | ----------- | ---------------------- | ----------------------------- |
| `paymentMethods` | --        |             | `PaymentMethodsType[]` | `['credit', 'pix', 'boleto']` |


## Events

| Event         | Description | Type                                          |
| ------------- | ----------- | --------------------------------------------- |
| `paymentFail` |             | `CustomEvent<{ error: MalgaPaymentsError; }>` |


## Dependencies

### Used by

 - [malga-checkout](../malga-checkout)

### Depends on

- [malga-payments-credit-saved-cards](../malga-payments-credit/partials/malga-payments-credit-saved-cards)
- checkout-radio-field
- [malga-payments-credit](../malga-payments-credit)
- [malga-payments-boleto](../malga-payments-boleto)
- [malga-payments-pix](../malga-payments-pix)

### Graph
```mermaid
graph TD;
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
  malga-checkout --> malga-payments
  style malga-payments fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
