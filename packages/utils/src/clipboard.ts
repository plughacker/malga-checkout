import { t } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'

export function handleClipboardButtonLabel(
  isMobile: boolean,
  clipboardIsClicked: boolean,
  locale: Locale,
) {
  if (clipboardIsClicked) {
    return t('dialogs.common.clipboardClicked', locale)
  }

  if (isMobile) {
    return t('dialogs.common.clipboard', locale)
  }

  return t('dialogs.common.clipboardDescription', locale)
}
