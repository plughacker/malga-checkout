import { Customer } from './base-provider.types'

import { cleanTextOnlyNumbers } from '@plug-checkout/utils'

export const getDocumentType = (identification: string) => {
  if (identification.length === 11) return 'cpf'

  return 'cnpj'
}

export const formatCustomerPayload = (customer: Customer) => {
  const identification = cleanTextOnlyNumbers(customer.identification)

  return {
    name: customer.name,
    email: customer.email,
    phoneNumber: ' ',
    document: {
      type: getDocumentType(identification),
      number: identification,
      country: 'BR',
    },
    address: {
      country: customer.country,
      state: customer.state,
      city: customer.city,
      district: customer.neighborhood,
      zipCode: cleanTextOnlyNumbers(customer.zipCode),
      street: customer.street,
      streetNumber: customer.number,
      complement: customer.complement,
    },
  }
}
