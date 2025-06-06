import { cleanTextOnlyNumbers } from '@malga-checkout/utils'

import { Customer } from './base-provider.types'

import {
  formatCustomerAddress,
  formatCustomerDocument,
} from '../../services/customers/customers.utils'

export const formatCustomerPayload = (customer: Customer) => {
  const address = formatCustomerAddress(customer.address)
  const document = formatCustomerDocument(customer.document)
  const phoneNumber = customer?.phoneNumber
    ? cleanTextOnlyNumbers(customer.phoneNumber)
    : ' '

  const haveFilledAddress = Object.values(
    customer.address ? customer.address : {},
  ).some((value) => value)

  const baseCustomer = {
    ...document,
    name: customer.name,
    email: customer.email,
    phoneNumber,
  }

  if (haveFilledAddress) {
    return {
      ...address,
      ...baseCustomer,
    }
  }

  return baseCustomer
}
