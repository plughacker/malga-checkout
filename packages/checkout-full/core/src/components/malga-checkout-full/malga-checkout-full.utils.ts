import { v4 as uuid } from 'uuid'

import {
  Customer,
  MalgaCheckoutFullChargeSuccess,
  MalgaCheckoutFullSessionNormalized,
  MalgaCheckoutSessionItems,
  Product,
  MalgaCheckoutFullFraudAnalysisCart,
  MalgaCheckoutFullPaymentMethods,
  Drip,
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
  const customerAddress = {
    zipCode: customer.zipCode,
    street: customer.street,
    streetNumber: customer.streetNumber,
    complement: customer.complement,
    district: customer.district,
    city: customer.city,
    state: customer.state,
    country: customer.country,
  }

  const hasCustomerAddress = Object.values(customerAddress).some(
    (value) => value,
  )

  const address = hasCustomerAddress ? customerAddress : null
  const document = isInternationalCustomer
    ? getCustomerDocument(customer)
    : getCustomerDocumentBrl(customer)

  return {
    name: customer.name,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
    document,
    address,
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
  usePartialCustomer?: boolean,
) => ({
  customer,
  cart: products,
  usePartialCustomer,
})

export const formatFraudAnalysisWithCustomerId = (
  products: MalgaCheckoutFullFraudAnalysisCart[],
  usePartialCustomer?: boolean,
) => ({
  cart: products,
  usePartialCustomer,
})

export const formatPaymentSession = (
  paymentSession,
  transactionConfig,
): MalgaCheckoutFullSessionNormalized => {
  if (!paymentSession) return

  return {
    ...paymentSession,
    checkoutPaymentMethods: paymentSession.checkoutPaymentMethods,
    transactionConfig: {
      ...transactionConfig,
      ...paymentSession.transactionConfig,
    },
    customization: paymentSession.customization,
  }
}

export const formatSuccess = (
  MalgaPaymentsSuccess,
): MalgaCheckoutFullChargeSuccess => ({
  ...MalgaPaymentsSuccess,
})

const formatDripPaymentMethod = (drip: Drip, products: Product[]) => {
  const items = products.map((product) => ({
    id: uuid(),
    title: product.name,
    quantity: product.quantity,
    unitPrice: product.amount,
  }))

  return {
    items: drip.items || items,
    browser: drip.browser || null,
  }
}

export const formatPaymentMethods = (
  paymentMethods: MalgaCheckoutFullPaymentMethods,
  products: Product[],
) => {
  const currentPaymentMethods = paymentMethods

  if (currentPaymentMethods.drip) {
    currentPaymentMethods.drip = formatDripPaymentMethod(
      paymentMethods.drip,
      products,
    )
  }

  return currentPaymentMethods
}
