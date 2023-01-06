import {
  Customer,
  PlugCheckoutFullChargeSuccess,
  PlugCheckoutFullSessionNormalized,
  PlugCheckoutSessionItems,
  Product,
  PlugCheckoutFullFraudAnalysisCart,
} from './plug-checkout-full.types'
import { PlugCheckoutFullIdentificationFormValues } from './partials/plug-checkout-full-identification/plug-checkout-full-identification.types'

export const formatCustomer = (
  customer: PlugCheckoutFullIdentificationFormValues,
): Customer => {
  return {
    name: customer.name,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
    document: {
      type: customer.documentType,
      country: customer.documentCountry,
      number: customer.identification,
    },
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
