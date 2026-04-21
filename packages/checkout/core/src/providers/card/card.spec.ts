import settings from '../../stores/settings'

jest.mock('@malga-checkout/utils', () => ({
  parseInstallments: (value: string) => Number(value) || 1,
  cleanTextOnlyNumbers: (value: string) => value,
  cleanObjectProperties: (obj: Record<string, unknown>) => obj,
}))

jest.mock('../base-provider/base-provider.utils', () => ({
  formatCustomerPayload: jest.fn(),
}))

jest.mock('./card.utils', () => ({
  handleAlreadyTokenizedCard: jest.fn(),
  handleTokenizationFlow: jest.fn(),
}))

import { Card } from './card'

const defaultCardForm = {
  cardNumber: '5234213441249876',
  expirationDate: '12/2030',
  cvv: '123',
  name: 'John Doe',
  installments: '3',
}

describe('Card Provider', () => {
  beforeEach(() => {
    settings.paymentMethods = {
      pix: undefined,
      credit: undefined,
      boleto: undefined,
      nupay: undefined,
      drip: undefined,
    }
  })

  describe('getPaymentMethod', () => {
    it('should return paymentMethod without recurrence when not configured', () => {
      const card = new Card({ card: defaultCardForm })
      const result = card.getPaymentMethod()

      expect(result).toEqual({
        paymentType: 'credit',
        installments: 3,
      })
      expect(result).not.toHaveProperty('recurrence')
    })

    it('should return paymentMethod with recurrence when configured as initial', () => {
      settings.paymentMethods = {
        ...settings.paymentMethods,
        credit: {
          installments: { show: false, quantity: 1 },
          checkedSaveCard: false,
          showCreditCard: true,
          recurrence: 'initial',
        },
      }

      const card = new Card({ card: defaultCardForm })
      const result = card.getPaymentMethod()

      expect(result).toEqual({
        paymentType: 'credit',
        installments: 3,
        recurrence: 'initial',
      })
    })

    it('should return paymentMethod with recurrence when configured as subsequent', () => {
      settings.paymentMethods = {
        ...settings.paymentMethods,
        credit: {
          installments: { show: false, quantity: 1 },
          checkedSaveCard: false,
          showCreditCard: true,
          recurrence: 'subsequent',
        },
      }

      const card = new Card({ card: defaultCardForm })
      const result = card.getPaymentMethod()

      expect(result).toEqual({
        paymentType: 'credit',
        installments: 3,
        recurrence: 'subsequent',
      })
    })

    it('should return paymentMethod with recurrence when configured as unscheduled', () => {
      settings.paymentMethods = {
        ...settings.paymentMethods,
        credit: {
          installments: { show: false, quantity: 1 },
          checkedSaveCard: false,
          showCreditCard: true,
          recurrence: 'unscheduled',
        },
      }

      const card = new Card({ card: defaultCardForm })
      const result = card.getPaymentMethod()

      expect(result).toEqual({
        paymentType: 'credit',
        installments: 3,
        recurrence: 'unscheduled',
      })
    })

    it('should not include recurrence when credit config exists but recurrence is undefined', () => {
      settings.paymentMethods = {
        ...settings.paymentMethods,
        credit: {
          installments: { show: false, quantity: 1 },
          checkedSaveCard: false,
          showCreditCard: true,
        },
      }

      const card = new Card({ card: defaultCardForm })
      const result = card.getPaymentMethod()

      expect(result).toEqual({
        paymentType: 'credit',
        installments: 3,
      })
      expect(result).not.toHaveProperty('recurrence')
    })
  })
})
