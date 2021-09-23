import { Component, Host, h, Event, EventEmitter } from '@stencil/core'

import { countries } from './plug-checkout-full-identification.utils'

@Component({
  tag: 'plug-checkout-full-identification',
  styleUrl: 'plug-checkout-full-identification.scss',
})
export class PlugCheckoutFullIdentification {
  @Event() submitForm: EventEmitter<void>

  private handleSubmitForm = () => {
    this.submitForm.emit()
  }

  render() {
    return (
      <Host class={{ 'plug-checkout-full-identification__container': true }}>
        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content="Dados pessoais"
        />
        <checkout-text-field
          fullWidth
          inputmode="text"
          name="fullName"
          label="Nome completo *"
        />
        <checkout-text-field
          fullWidth
          inputmode="email"
          name="email"
          label="E-mail *"
        />

        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content="Documento"
        />
        <checkout-text-field
          fullWidth
          inputmode="text"
          name="identification"
          label="CPF/CNPJ *"
        />

        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content="Endereço"
        />
        <fieldset
          class={{ 'plug-checkout-full-identification__row-fields': true }}
        >
          <checkout-text-field
            fullWidth
            inputmode="text"
            name="zipCode"
            label="CEP *"
          />
          <a>Não sei meu CEP</a>
        </fieldset>

        <checkout-text-field
          fullWidth
          inputmode="text"
          name="address"
          label="Endereço *"
        />

        <fieldset
          class={{ 'plug-checkout-full-identification__row-fields': true }}
        >
          <checkout-text-field
            fullWidth
            inputmode="text"
            name="number"
            label="Número *"
          />
          <checkout-text-field
            fullWidth
            inputmode="text"
            name="complement"
            label="Complemento"
          />
        </fieldset>

        <checkout-text-field
          fullWidth
          inputmode="text"
          name="neighborhood"
          label="Bairro"
        />

        <fieldset
          class={{ 'plug-checkout-full-identification__row-fields': true }}
        >
          <checkout-text-field
            fullWidth
            inputmode="text"
            name="city"
            label="Cidade *"
          />
          <checkout-text-field
            fullWidth
            inputmode="text"
            name="state"
            label="Estado *"
          />
        </fieldset>

        <checkout-select-field
          options={countries}
          fullWidth
          name="country"
          label="País *"
        />

        <checkout-button
          type="submit"
          label="Próximo"
          onClick={this.handleSubmitForm}
        />
      </Host>
    )
  }
}
