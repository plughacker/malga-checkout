import { Sessions } from '../../services/sessions'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'
import { PlugPayments } from '../../types/plug-payments.types'

export class PlugPaymentsSessionService implements PlugPayments {
  readonly session?: Sessions

  constructor() {
    this.session = new Sessions()
  }

  public pay(): void {
    throw new Error('Method not implemented.')
  }

  public handlePaymentSuccess(data: PlugPaymentsSuccess): void {
    console.log(data)
    throw new Error('Method not implemented.')
  }

  public handlePaymentFailed(error: PlugPaymentsError): void {
    console.log(error)
    throw new Error('Method not implemented.')
  }

  public async findSession(sessionId: string) {
    try {
      return await this.session.find(sessionId)
    } catch (error) {
      this.handlePaymentFailed({
        type: '400',
        message: 'Session not found',
        errorStack: error.response.data,
      })
    }
  }
}
