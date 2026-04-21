import { Sessions } from '../../services/sessions'
import { CustomizationData } from '../../services/sessions/sessions.types'
import settings from '../../stores/settings'
import {
  setThemeBackgroundColor,
  setThemeErrorColors,
  setThemePrimaryColors,
  setThemeSuccessColors,
  setThemeWarningColors,
} from './malga-payments-session.utils'
import {
  MalgaPaymentsSessionDialogShowCallback,
  MalgaPaymentsSessionRequest,
} from './malga-payments-session.types'
import { t } from '@malga-checkout/i18n'

export class MalgaPaymentsSessionService {
  readonly session?: Sessions
  readonly onShowDialog?: MalgaPaymentsSessionDialogShowCallback

  constructor({ onShowDialog }: MalgaPaymentsSessionRequest) {
    this.session = new Sessions()
    this.onShowDialog = onShowDialog
  }

  public handleFailed(): void {
    if (settings.dialogConfig.show) {
      this.onShowDialog({
        open: true,
        mode: 'error',
        errorMessage: t('dialogs.session.errorMessage', settings.locale),
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
      settings.dialogConfig = {
        ...settings.dialogConfig,
        pixFilledProgressBarColor: session.customization.primaryColor.medium,
        pixEmptyProgressBarColor: session.customization.primaryColor.lightest,
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
