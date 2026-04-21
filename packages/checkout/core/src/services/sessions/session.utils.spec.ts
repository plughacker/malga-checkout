import { normalizePaymentSession } from './session.utils'
import { Session } from './sessions.types'

jest.mock('matercolors', () => {
  return jest.fn().mockImplementation(() => ({
    50: '#f0f0f0',
    300: '#c0c0c0',
    500: '#808080',
    700: '#404040',
    900: '#202020',
  }))
})

jest.mock('../../stores/settings', () => ({
  default: {
    transactionConfig: {
      fraudAnalysis: {},
    },
  },
}))

const baseSession: Session = {
  name: 'Loja 1',
  isActive: true,
  amount: 100,
  currency: 'BRL',
  capture: true,
  merchantId: '2525306e-e8c9-404e-acd4-fcd3538150cd',
  dueDate: '2026-10-25T09:28:45.000Z',
  items: [
    {
      name: 'Item 1',
      unitPrice: 1000,
      quantity: 1,
    },
  ],
  paymentMethods: [],
  settings: {
    id: 'cd90cd13',
    email: '',
    phone: '',
    statementDescription: '',
    logo: '',
    mainColor: '#6366f1',
    companyName: '',
    clientId: '',
    documentNumber: '',
    language: 'pt-BR',
  },
}

describe('normalizePaymentSession', () => {
  describe('credit payment method with recurrence', () => {
    it('should extract recurrence from session when present', () => {
      const session: Session = {
        ...baseSession,
        paymentMethods: [
          {
            paymentType: 'credit',
            installments: 2,
            recurrence: 'initial',
          },
        ],
      }

      const result = normalizePaymentSession(session)

      expect(result.checkoutPaymentMethods.credit).toEqual({
        installments: { quantity: 2, show: true },
        checkedSaveCard: false,
        showCreditCard: true,
        recurrence: 'initial',
      })
    })

    it('should not include recurrence when absent from session', () => {
      const session: Session = {
        ...baseSession,
        paymentMethods: [
          {
            paymentType: 'credit',
            installments: 3,
          },
        ],
      }

      const result = normalizePaymentSession(session)

      expect(result.checkoutPaymentMethods.credit).toEqual({
        installments: { quantity: 3, show: true },
        checkedSaveCard: false,
        showCreditCard: true,
      })
      expect(result.checkoutPaymentMethods.credit).not.toHaveProperty(
        'recurrence',
      )
    })

    it('should extract recurrence as subsequent', () => {
      const session: Session = {
        ...baseSession,
        paymentMethods: [
          {
            paymentType: 'credit',
            installments: 1,
            recurrence: 'subsequent',
          },
        ],
      }

      const result = normalizePaymentSession(session)

      expect(result.checkoutPaymentMethods.credit.recurrence).toBe(
        'subsequent',
      )
    })

    it('should extract recurrence as unscheduled', () => {
      const session: Session = {
        ...baseSession,
        paymentMethods: [
          {
            paymentType: 'credit',
            installments: 1,
            recurrence: 'unscheduled',
          },
        ],
      }

      const result = normalizePaymentSession(session)

      expect(result.checkoutPaymentMethods.credit.recurrence).toBe(
        'unscheduled',
      )
    })
  })
})
