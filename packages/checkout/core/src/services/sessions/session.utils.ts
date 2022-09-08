import { Session, SessionNormalized } from './sessions.types'

export const normalizePaymentSession = (
  paymentSession: Session,
): SessionNormalized => {
  const paymentSessionNormalized: SessionNormalized = {
    ...paymentSession,
    transactionConfig: null,
    checkoutPaymentMethods: null,
  }

  paymentSessionNormalized.transactionConfig = {
    statementDescriptor: paymentSession.statementDescriptor,
    amount: paymentSession.amount,
    capture: paymentSession.capture,
    description: paymentSession.description,
    orderId: paymentSession.orderId,
    currency: paymentSession.currency,
  }

  paymentSessionNormalized.checkoutPaymentMethods =
    paymentSession.paymentMethods.reduce(
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

  return paymentSessionNormalized
}
