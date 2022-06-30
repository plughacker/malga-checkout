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

export const formatCustomerDocument = (
  customerDocument?: Customer['document'],
) => ({
  document: {
    type: customerDocument.type,
    number: cleanTextOnlyNumbers(customerDocument.number),
    country: customerDocument.country,
  },
})

export const getPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return ' '
  }

  return cleanTextOnlyNumbers(phoneNumber)
}

export const formatPayload = (customer: Customer) => {
  const address = formatCustomerAddress(customer.address)
  const document = formatCustomerDocument(customer.document)

  return {
    ...address,
    ...document,
    name: customer.name,
    email: customer.email,
    phoneNumber: getPhoneNumber(customer.phoneNumber),
  }
}
