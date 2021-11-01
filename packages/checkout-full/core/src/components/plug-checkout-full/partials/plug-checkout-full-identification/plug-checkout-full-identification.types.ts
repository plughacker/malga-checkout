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
  neighborhood: string
  state: string
  city: string
}

export interface PlugCheckoutFullIdentificationFormValues {
  name: string
  email: string
  identification: string
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  country: string
}

export interface PlugCheckoutFullIdentificationFormValidFields {
  name: string | null
  email: string | null
  identification: string | null
  zipCode: string | null
  street: string | null
  number: string | null
  complement: string | null
  neighborhood: string | null
  city: string | null
  state: string | null
  country: string | null
}
