import Matercolors from 'matercolors'
import { Session, SessionNormalized } from './sessions.types'

export const normalizePaymentSession = (
  paymentSession: Session,
): SessionNormalized => {
  const paymentSessionNormalized: SessionNormalized = {
    ...paymentSession,
    transactionConfig: normalizeTransactionConfig(paymentSession),
    checkoutPaymentMethods: normalizePaymentMethods(paymentSession),
    customization: normalizeCustomization(paymentSession),
  }

  return paymentSessionNormalized
}

const normalizePaymentMethods = (paymentSession: Session) => {
  return paymentSession.paymentMethods.reduce(
    (previousPaymentMethods, currentPaymentMethods) => {
      if (currentPaymentMethods.paymentType === 'pix') {
        previousPaymentMethods['pix'] = {
          expiresIn: currentPaymentMethods.expiresIn,
        }
      } else if (currentPaymentMethods.paymentType === 'boleto') {
        previousPaymentMethods['boleto'] = {
          expiresDate: currentPaymentMethods.expiresDate,
          instructions: currentPaymentMethods.instructions,
          interest: currentPaymentMethods.interest,
          fine: currentPaymentMethods.fine,
        }
      } else {
        previousPaymentMethods['credit'] = {
          installments: {
            quantity: currentPaymentMethods.installments,
            show: true,
          },
          checkedSaveCard: false,
          showCreditCard: false,
        }
      }

      return previousPaymentMethods
    },
    {},
  )
}

const normalizeTransactionConfig = (paymentSession: Session) => ({
  statementDescriptor: paymentSession.statementDescriptor,
  amount: paymentSession.amount,
  capture: paymentSession.capture,
  description: paymentSession.description,
  orderId: paymentSession.orderId,
  currency: paymentSession.currency,
})

const getColorPalette = (color: string) => {
  const Color = new Matercolors(color)

  const colorPalette = {
    lightest: Color[50],
    light: Color[300],
    medium: Color[500],
    dark: Color[700],
    darkest: Color[900],
  }

  return colorPalette
}

export const normalizeCustomization = (data: Session) => {
  const settings = data.settings

  const primaryColor = getColorPalette(settings.mainColor ?? '#34C759')
  const secondaryColor = getColorPalette(settings.secondaryColor ?? '#34C759')
  const errorColor = getColorPalette(settings.errorColor ?? '#DD183C')
  const warningColor = getColorPalette(settings.attentionColor ?? '#FAC30E')
  const successColor = getColorPalette(settings.successColor ?? '#32C000')
  const backgroundColor = settings.backgroundColor ?? '#FFFFFF'
  const brandUrl = settings.logo

  return {
    brandUrl,
    primaryColor,
    secondaryColor,
    errorColor,
    warningColor,
    successColor,
    backgroundColor,
  }
}