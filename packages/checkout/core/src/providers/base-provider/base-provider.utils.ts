import { Customer } from './base-provider.types'

import { cleanTextOnlyNumbers } from '@plug-checkout/utils'
import { formatCustomerAddress } from '../../services/customers/customers.utils'

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

export const formatCustomerPayload = (customer: Customer) => {
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
