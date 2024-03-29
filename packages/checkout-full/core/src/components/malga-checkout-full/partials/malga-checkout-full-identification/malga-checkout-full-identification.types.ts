export interface ZipCodeResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export interface ZipCodeAutoComplete {
  street: string
  complement: string
  district: string
  state: string
  city: string
}

export interface MalgaCheckoutFullIdentificationFormValues {
  name: string
  email: string
  phoneNumber: string
  documentCountry: string
  documentType: string
  identification: string
  zipCode: string
  street: string
  streetNumber: string
  complement: string
  district: string
  city: string
  state: string
  country: string
}

export interface MalgaCheckoutFullIdentificationFormValidFields {
  name: string | null
  email: string | null
  phoneNumber: string | null
  documentCountry: string | null
  documentType: string | null
  identification: string | null
  zipCode: string | null
  street: string | null
  streetNumber: string | null
  complement: string | null
  district: string | null
  city: string | null
  state: string | null
  country: string | null
}
