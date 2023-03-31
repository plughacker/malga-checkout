import axios from 'axios'

import { ZipCodeResponse } from './malga-checkout-full-identification.types'

export class MalgaCheckoutFullIdentificationService {
  private formatZipCodeData(zipCodeResponse: ZipCodeResponse) {
    const zipCodeFormatted = {
      street: zipCodeResponse.logradouro,
      complement: zipCodeResponse.complemento,
      neighborhood: zipCodeResponse.bairro,
      state: zipCodeResponse.uf,
      city: zipCodeResponse.localidade,
    }

    return zipCodeFormatted
  }

  public async getInformationsAboutZipCode(zipCode: string) {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json`,
      )
      const zipCodeFormatted = {
        ...this.formatZipCodeData(response.data),
        country: 'BR',
      }
      return zipCodeFormatted
    } catch (error) {
      return {
        street: '',
        complement: '',
        neighborhood: '',
        state: '',
        city: '',
      }
    }
  }
}
