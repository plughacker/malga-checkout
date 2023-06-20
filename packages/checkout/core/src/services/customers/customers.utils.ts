import { Customer } from '../../providers/base-provider'
import {
  cleanTextOnlyNumbers,
  cleanTextSpecialCharacters,
} from '@malga-checkout/utils'

export const formatCustomerAddress = (
  customerAddress?: Customer['address'],
) => {
  if (!customerAddress) {
    return {}
  }

  const isBrazil = customerAddress.country.toLowerCase() === 'br'
  const zipCode = isBrazil
    ? cleanTextOnlyNumbers(customerAddress.zipCode)
    : cleanTextSpecialCharacters(customerAddress.zipCode)

  return {
    address: {
      country: customerAddress.country,
      state: customerAddress.state,
      city: customerAddress.city,
      district: customerAddress.district,
      zipCode,
      street: customerAddress.street,
      streetNumber: customerAddress.streetNumber,
      complement: customerAddress.complement,
    },
  }
}

export const formatCustomerDocument = (
  customerDocument?: Customer['document'],
) => {
  const isBrazilianDocument = ['cpf', 'cnpj'].includes(
    customerDocument.type.toLowerCase(),
  )
  const documentNumber = isBrazilianDocument
    ? cleanTextOnlyNumbers(customerDocument.number)
    : cleanTextSpecialCharacters(customerDocument.number)

  return {
    document: {
      type: customerDocument.type,
      number: documentNumber,
      country: customerDocument.country,
    },
  }
}

export const formatPayload = (customer: Customer) => {
  const address = formatCustomerAddress(customer.address)
  const document = formatCustomerDocument(customer.document)

  return {
    ...address,
    ...document,
    name: customer.name,
    email: customer.email,
    phoneNumber: cleanTextOnlyNumbers(customer.phoneNumber),
  }
}
