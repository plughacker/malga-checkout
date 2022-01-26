import { Customer } from '../../providers/base-provider'
import { cleanTextOnlyNumbers } from '@plug-checkout/utils'

export const formatCustomerAddress = (
  customerAddress?: Customer['address'],
) => {
  if (!customerAddress) {
    return {}
  }

  return {
    address: {
      country: customerAddress.country,
      state: customerAddress.state,
      city: customerAddress.city,
      district: customerAddress.neighborhood,
      zipCode: cleanTextOnlyNumbers(customerAddress.zipCode),
      street: customerAddress.street,
      streetNumber: customerAddress.number,
      complement: customerAddress.complement,
    },
  }
}

export const getDocumentType = (identification: string) => {
  if (identification.length === 11) return 'cpf'

  return 'cnpj'
}

export const getPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return ' '
  }

  return cleanTextOnlyNumbers(phoneNumber)
}

export const formatPayload = (customer: Customer) => {
  const identification = cleanTextOnlyNumbers(customer.identification)
  const address = formatCustomerAddress(customer.address)

  return {
    ...address,
    name: customer.name,
    email: customer.email,
    phoneNumber: getPhoneNumber(customer.phoneNumber),
    document: {
      type: getDocumentType(identification),
      number: identification,
      country: 'BR',
    },
  }
}
