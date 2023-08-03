export type MalgaPaymentsTransactionsRequests =
  | MalgaPaymentsTransactionsRequestsNuPay
  | MalgaPaymentsTransactionsRequestsPix
  | MalgaPaymentsTransactionsRequestsBase

export interface MalgaPaymentsTransactionsRequestsBase {
  id: string
  updatedAt: string
  createdAt: string
  idempotencyKey: string
  requestId: string | null
  providerId: string
  amount: number
  authorizationCode: string
  authorizationNsu: string
  responseCode: string
  requestStatus: string
  requestType: string
  responseTs: string
}

export interface MalgaPaymentsTransactionsRequestsPix
  extends MalgaPaymentsTransactionsRequestsBase {
  pix: {
    expiresIn: number
    qrCodeData: string
    qrCodeImageUrl: string
  }
}

export interface MalgaPaymentsTransactionsRequestsNuPay
  extends MalgaPaymentsTransactionsRequestsBase {
  nupay: {
    expiresIn: number
    paymentUrl: string
  }
}
