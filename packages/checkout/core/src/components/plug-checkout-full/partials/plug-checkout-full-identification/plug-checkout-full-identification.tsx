import { Component, Host, h, Event, EventEmitter, State } from '@stencil/core'

import { countries } from './plug-checkout-full-identification.utils'

@Component({
  tag: 'plug-checkout-full-identification',
  styleUrl: 'plug-checkout-full-identification.scss',
})
export class PlugCheckoutFullIdentification {
  @State() customer = {
    zipCode: '',
    state: '',
    street: '',
    city: '',
    neighborhood: '',
    complement: '',
  }

  @Event() submitForm: EventEmitter<void>

  private handleSubmitForm = () => {
    this.submitForm.emit()
  }

  private handleZipCodeChange = async (event) => {
    if (event.target.value.length === 8) {
      const viacepResponse = await fetch(
        `https://viacep.com.br/ws/${event.target.value}/json/`,
      )
      const addressData = await viacepResponse.json()

      this.customer = {
        ...this.customer,
        zipCode: event.target.value,
        state: addressData.uf,
        street: addressData.logradouro,
        city: addressData.localidade,
        neighborhood: addressData.bairro,
        complement: addressData.complemento,
      }

      return
    }

    this.customer = {
      ...this.customer,
      zipCode: event.target.value,
    }
  }

  private handleFieldChange = (field: string) => (event) => {
    this.customer = { ...this.customer, [field]: event.target.value }
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
            value={this.customer.zipCode}
            onChanged={this.handleZipCodeChange}
          />
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
          >
            Não sei meu CEP
          </a>
        </fieldset>

        <checkout-text-field
          fullWidth
          inputmode="text"
          name="address"
          label="Endereço *"
          value={this.customer.street}
          onChanged={this.handleFieldChange('street')}
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
            value={this.customer.complement}
            onChanged={this.handleFieldChange('complement')}
          />
        </fieldset>

        <checkout-text-field
          fullWidth
          inputmode="text"
          name="neighborhood"
          label="Bairro"
          value={this.customer.neighborhood}
          onChanged={this.handleFieldChange('neighborhood')}
        />

        <fieldset
          class={{ 'plug-checkout-full-identification__row-fields': true }}
        >
          <checkout-text-field
            fullWidth
            inputmode="text"
            name="city"
            label="Cidade *"
            value={this.customer.city}
            onChanged={this.handleFieldChange('city')}
          />
          <checkout-text-field
            fullWidth
            inputmode="text"
            name="state"
            label="Estado *"
            value={this.customer.state}
            onChanged={this.handleFieldChange('state')}
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
