import {
  Customer,
  PlugCheckoutFullChargeSuccess,
  PlugCheckoutFullSessionNormalized,
  PlugCheckoutSessionItems,
  Product,
  PlugCheckoutFullFraudAnalysisCart,
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
  items?: PlugCheckoutSessionItems[],
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

  return products.map((product) => ({
    name: product.name,
    quantity: product.quantity,
    sku: product.sku,
    unitPrice: product.amount,
    risk: product.risk,
  }))
}

export const formatFraudAnalysis = (
  customer: Customer,
  products: PlugCheckoutFullFraudAnalysisCart[],
) => ({
  customer,
  cart: products,
})

export const formatFraudAnalysisWithCustomerId = (
  products: PlugCheckoutFullFraudAnalysisCart[],
) => ({
  cart: products,
})

export const formatPaymentSession = (
  paymentSession,
): PlugCheckoutFullSessionNormalized => {
  if (!paymentSession) return

  return {
    ...paymentSession,
    checkoutPaymentMethods: paymentSession.checkoutPaymentMethods,
    transactionConfig: paymentSession.transactionConfig,
    customization: paymentSession.customization,
  }
}

export const formatSuccess = (
  plugPaymentsSuccess,
): PlugCheckoutFullChargeSuccess => ({
  ...plugPaymentsSuccess,
})
