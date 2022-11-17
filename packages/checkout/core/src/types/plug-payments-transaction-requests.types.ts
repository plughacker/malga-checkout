export type PlugPaymentsTransactionsRequests =
  PlugPaymentsTransactionsRequestsPix | PlugPaymentsTransactionsRequestsBase

export interface PlugPaymentsTransactionsRequestsBase {
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

export interface PlugPaymentsTransactionsRequestsPix
  extends PlugPaymentsTransactionsRequestsBase {
  pix: {
    expiresIn: number
    qrCodeData: string
    qrCodeImageUrl: string
  }
}
