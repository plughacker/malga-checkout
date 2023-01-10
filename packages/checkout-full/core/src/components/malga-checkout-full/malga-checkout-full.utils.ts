import {
  Customer,
  MalgaCheckoutFullChargeSuccess,
  MalgaCheckoutFullSessionNormalized,
  MalgaCheckoutSessionItems,
  Product,
  MalgaCheckoutFullFraudAnalysisCart,
} from './malga-checkout-full.types'
import { MalgaCheckoutFullIdentificationFormValues } from './partials/malga-checkout-full-identification/malga-checkout-full-identification.types'

import { cleanTextOnlyNumbers } from '@malga-checkout/utils'

const getDocumentType = (identification: string) => {
  if (identification.length === 11) return 'cpf'

  return 'cnpj'
}

const getCustomerDocumentBrl = (
  customer: MalgaCheckoutFullIdentificationFormValues,
) => {
  const identification = cleanTextOnlyNumbers(customer.identification)

  return {
    type: getDocumentType(identification),
    country: 'BR',
    number: identification,
  }
}

const getCustomerDocument = (
  customer: MalgaCheckoutFullIdentificationFormValues,
) => ({
  type: customer.documentType,
  country: customer.documentCountry,
  number: customer.identification,
})

export const formatCustomer = (
  customer: MalgaCheckoutFullIdentificationFormValues,
  isInternationalCustomer: boolean,
): Customer => {
  const document = isInternationalCustomer
    ? getCustomerDocument(customer)
    : getCustomerDocumentBrl(customer)

  return {
    name: customer.name,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
    document,
    address: {
      zipCode: customer.zipCode,
      street: customer.street,
      number: customer.number,
      complement: customer.complement,
      neighborhood: customer.neighborhood,
      city: customer.city,
      state: customer.state,
      country: customer.country,
    },
  }
}

export const formatProducts = (
  isSession: boolean,
  items?: MalgaCheckoutSessionItems[],
  products?: Product[],
) => {
  if (isSession) {
    return items.map((item) => ({
      name: item.name,
      unitPrice: item.unitPrice,
      quantity: item.quantity,
      sku: item.name,
      risk: 'Low',
    }))
  }

  if (products) {
    return products.map((product) => ({
      name: product.name,
      quantity: product.quantity,
      sku: product.sku,
      unitPrice: product.amount,
      risk: product.risk,
    }))
  }

  return []
}

export const formatFraudAnalysis = (
  customer: Customer,
  products: MalgaCheckoutFullFraudAnalysisCart[],
) => ({
  customer,
  cart: products,
})

export const formatFraudAnalysisWithCustomerId = (
  products: MalgaCheckoutFullFraudAnalysisCart[],
) => ({
  cart: products,
})

export const formatPaymentSession = (
  paymentSession,
): MalgaCheckoutFullSessionNormalized => {
  if (!paymentSession) return

  return {
    ...paymentSession,
    checkoutPaymentMethods: paymentSession.checkoutPaymentMethods,
    transactionConfig: paymentSession.transactionConfig,
    customization: paymentSession.customization,
  }
}

export const formatSuccess = (
  MalgaPaymentsSuccess,
): MalgaCheckoutFullChargeSuccess => ({
  ...MalgaPaymentsSuccess,
})
