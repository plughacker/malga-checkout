import { Sessions } from '../../services/sessions'
import { CustomizationData } from '../../services/sessions/sessions.types'
import settings from '../../stores/settings'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'
import { PlugPayments } from '../../types/plug-payments.types'
import { setThemeBackgroundColor, setThemeErrorColors, setThemePrimaryColors, setThemeSuccessColors, setThemeWarningColors } from '../plug-checkout/plug-checkout.utils'

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
      const session = await this.session.find(sessionId)

      settings.transactionConfig = session.transactionConfig
      settings.paymentMethods = session.checkoutPaymentMethods
      this.customize(session.customization)

      return session
    } catch (error) {
      this.handlePaymentFailed({
        type: '400',
        message: 'Session not found',
        errorStack: error.response.data,
      })
    }
  }

  private customize(customization: CustomizationData) {
    setThemePrimaryColors(customization.primaryColor)
    setThemeWarningColors(customization.warningColor)
    setThemeErrorColors(customization.errorColor)
    setThemeSuccessColors(customization.successColor)
    setThemeBackgroundColor(customization.backgroundColor)
  }
}
