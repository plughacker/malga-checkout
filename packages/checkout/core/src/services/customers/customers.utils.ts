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
  isFraudAnalysis: boolean = false,
) => {
  if (!customerDocument || customerDocument.type === 'noDocument') {
    if (isFraudAnalysis) {
      return {
        document: {
          type: 'NoDocument',
        },
      }
    }

    return {
      document: {
        type: 'noDocument',
      },
    }
  }

  const isBrazilianDocument = ['cpf', 'cnpj'].includes(
    customerDocument.type.toLowerCase(),
  )
  const documentNumber = isBrazilianDocument
    ? cleanTextOnlyNumbers(customerDocument.number)
    : cleanTextSpecialCharacters(customerDocument.number)

  return {
    document: {
      type: isFraudAnalysis
        ? customerDocument.type.toUpperCase()
        : customerDocument.type.toLowerCase(),
      number: documentNumber,
      country: customerDocument.country,
    },
  }
}

export const formatPayload = (customer: Customer, isFraudAnalysis: boolean = false) => {
  const address = formatCustomerAddress(customer.address)
  const document = formatCustomerDocument(customer.document, isFraudAnalysis)

  return {
    ...address,
    ...document,
    phoneNumber: customer?.phoneNumber
      ? cleanTextOnlyNumbers(customer.phoneNumber)
      : ' ',
    name: customer.name,
    email: customer.email,
  }
}
