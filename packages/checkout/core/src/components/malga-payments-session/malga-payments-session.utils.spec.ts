import { mergePaymentMethods } from './malga-payments-session.utils'
import { MalgaCheckoutPaymentMethods } from '../malga-checkout/malga-checkout.types'

describe('mergePaymentMethods', () => {
  const sessionCredit: MalgaCheckoutPaymentMethods = {
    credit: {
      installments: { quantity: 2, show: true },
      checkedSaveCard: false,
      showCreditCard: true,
      recurrence: 'initial',
    },
  }

  it('should use session recurrence as fallback when SDK does not define it', () => {
    const sdkMethods: MalgaCheckoutPaymentMethods = {
      credit: {
        installments: { quantity: 1, show: false },
        checkedSaveCard: false,
        showCreditCard: true,
      },
    }

    const result = mergePaymentMethods(sdkMethods, sessionCredit)

    expect(result.credit.recurrence).toBe('initial')
  })

  it('should prioritize SDK recurrence over session recurrence', () => {
    const sdkMethods: MalgaCheckoutPaymentMethods = {
      credit: {
        installments: { quantity: 1, show: false },
        checkedSaveCard: false,
        showCreditCard: true,
        recurrence: 'subsequent',
      },
    }

    const result = mergePaymentMethods(sdkMethods, sessionCredit)

    expect(result.credit.recurrence).toBe('subsequent')
  })

  it('should use session credit when SDK has no credit config', () => {
    const sdkMethods: MalgaCheckoutPaymentMethods = {}

    const result = mergePaymentMethods(sdkMethods, sessionCredit)

    expect(result.credit).toEqual(sessionCredit.credit)
  })

  it('should use SDK credit when session has no credit config', () => {
    const sdkMethods: MalgaCheckoutPaymentMethods = {
      credit: {
        installments: { quantity: 3, show: true },
        checkedSaveCard: false,
        showCreditCard: true,
        recurrence: 'unscheduled',
      },
    }
    const sessionMethods: MalgaCheckoutPaymentMethods = {
      pix: { expiresIn: 30 },
    }

    const result = mergePaymentMethods(sdkMethods, sessionMethods)

    expect(result.credit).toEqual(sdkMethods.credit)
  })

  it('should preserve non-credit payment methods from session', () => {
    const sdkMethods: MalgaCheckoutPaymentMethods = {}
    const sessionMethods: MalgaCheckoutPaymentMethods = {
      pix: { expiresIn: 30 },
      credit: {
        installments: { quantity: 2, show: true },
        checkedSaveCard: false,
        showCreditCard: true,
        recurrence: 'initial',
      },
    }

    const result = mergePaymentMethods(sdkMethods, sessionMethods)

    expect(result.pix).toEqual({ expiresIn: 30 })
    expect(result.credit.recurrence).toBe('initial')
  })

  it('should not include recurrence when neither SDK nor session define it', () => {
    const sdkMethods: MalgaCheckoutPaymentMethods = {
      credit: {
        installments: { quantity: 1, show: false },
        checkedSaveCard: false,
        showCreditCard: true,
      },
    }
    const sessionMethods: MalgaCheckoutPaymentMethods = {
      credit: {
        installments: { quantity: 2, show: true },
        checkedSaveCard: false,
        showCreditCard: true,
      },
    }

    const result = mergePaymentMethods(sdkMethods, sessionMethods)

    expect(result.credit).not.toHaveProperty('recurrence')
  })

  it('should override SDK undefined recurrence with session recurrence', () => {
    const sdkMethods: MalgaCheckoutPaymentMethods = {
      credit: {
        installments: { quantity: 1, show: false },
        checkedSaveCard: false,
        showCreditCard: true,
        recurrence: undefined,
      },
    }

    const result = mergePaymentMethods(sdkMethods, sessionCredit)

    expect(result.credit.recurrence).toBe('initial')
  })
})
