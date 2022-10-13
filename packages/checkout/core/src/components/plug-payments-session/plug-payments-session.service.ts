import { Sessions } from '../../services/sessions'
import { CustomizationData } from '../../services/sessions/sessions.types'
import settings from '../../stores/settings'
import {
  setThemeBackgroundColor,
  setThemeErrorColors,
  setThemePrimaryColors,
  setThemeSuccessColors,
  setThemeWarningColors,
} from '../plug-checkout/plug-checkout.utils'
import {
  PlugPaymentsSessionDialogShowCallback,
  PlugPaymentsSessionRequest,
} from './plug-payments-session.types'

export class PlugPaymentsSessionService {
  readonly session?: Sessions
  readonly onShowDialog?: PlugPaymentsSessionDialogShowCallback

  constructor({ onShowDialog }: PlugPaymentsSessionRequest) {
    this.session = new Sessions()
    this.onShowDialog = onShowDialog
  }

  public handleFailed(): void {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage:
          'Não foi possível concluir sua transação, tente novamente.',
      })
    }
  }

  public async findSession(sessionId: string) {
    try {
      const session = await this.session.find(sessionId)

      settings.merchantId = session.merchantId
      settings.transactionConfig = {
        ...settings.transactionConfig,
        ...session.transactionConfig,
      }
      settings.paymentMethods = session.checkoutPaymentMethods
      this.customize(session.customization)

      return session
    } catch (error) {
      this.handleFailed()
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
