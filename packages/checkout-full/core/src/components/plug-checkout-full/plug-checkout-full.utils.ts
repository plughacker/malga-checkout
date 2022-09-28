import {
  Customer,
  PlugCheckoutFullChargeSuccess,
  PlugCheckoutFullFraudAnalysis,
  PlugCheckoutFullSessionNormalized,
  Product,
} from './plug-checkout-full.types'
import { PlugCheckoutFullIdentificationFormValues } from './partials/plug-checkout-full-identification/plug-checkout-full-identification.types'

import { cleanTextOnlyNumbers } from '@plug-checkout/utils'

const getDocumentType = (identification: string) => {
  if (identification.length === 11) return 'cpf'

  return 'cnpj'
}

const getCustomerDocumentBrl = (
  customer: PlugCheckoutFullIdentificationFormValues,
) => {
  const identification = cleanTextOnlyNumbers(customer.identification)

  return {
    type: getDocumentType(identification),
    country: 'BR',
    number: identification,
  }
}

const getCustomerDocument = (
  customer: PlugCheckoutFullIdentificationFormValues,
) => ({
  type: customer.documentType,
  country: customer.documentCountry,
  number: customer.identification,
})

export const formatCustomer = (
  customer: PlugCheckoutFullIdentificationFormValues,
  currency: string,
): Customer => {
  const document =
    currency === 'BRL'
      ? getCustomerDocumentBrl(customer)
      : getCustomerDocument(customer)

  return {
    name: customer.name,
    email: customer.email,
    phoneNumber: null,
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

const formatCart = (products: Product[]) => {
  const cart = products.map((product) => ({
    name: product.name,
    quantity: product.quantity,
    sku: product.sku,
    unitPrice: product.amount,
    risk: product.risk,
  }))

  return cart
}

export const formatFraudAnalysis = (
  customer: Customer,
  products: Product[],
) => ({
  customer,
  cart: formatCart(products),
})

export const formatFraudAnalysisWithCustomerId = (
  fraudAnalysis: PlugCheckoutFullFraudAnalysis,
  products: Product[],
) => ({
  customer: fraudAnalysis.customer,
  cart: formatCart(products),
})

export const formatPaymentSession = (paymentSession): PlugCheckoutFullSessionNormalized => ({
  ...paymentSession,
  checkoutPaymentMethods: paymentSession.checkoutPaymentMethods,
  transactionConfig: paymentSession.transactionConfig,
  customization: paymentSession.customization,
})

export const formatSuccess = (plugPaymentsSuccess) : PlugCheckoutFullChargeSuccess => ({
  ...plugPaymentsSuccess,
})
