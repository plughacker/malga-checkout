import { Customer } from './base-provider.types'

import {
  formatCustomerAddress,
  formatCustomerDocument,
  getPhoneNumber,
} from '../../services/customers/customers.utils'

export const formatCustomerPayload = (customer: Customer) => {
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
