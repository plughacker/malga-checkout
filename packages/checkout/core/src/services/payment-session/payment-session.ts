import { Api } from '../api'
import { PaymentSessionData } from './payment-session.types'

export class PaymentSession {
  readonly api: Api

  constructor() {
    this.api = new Api()
  }

  public async find(paymentSessionKey: string): Promise<PaymentSessionData> {
    // const response = await this.api.fetch({
    //   endpoint: '/payment-session',
    //   data: {
    //     paymentSessionKey: paymentSessionKey,
    //   },
    // })

    console.log(paymentSessionKey)

    return {
      id: '565b783a-23ed-4f2e-a57b-6c95a5e9cdcd',
      name: 'Pedido Plug',
      status: 'created',
      isActive: true,
      clientId: '523afbe7-36dc-4654-9dba-e7167d0e5e2d',
      orderId: 'd83db4bd-190f-4a96-a42f-3c29d4da3560',
      amount: 100,
      currency: 'BRL',
      capture: true,
      merchantId: '1f601629-3690-4da6-a44a-897411814ec8',
      dueDate: '2022-11-10T00:00:00.000Z',
      description:
        'Um pedido para fazer cobrança com vários metodos de pagamento',
      statementDescriptor: null,
      items: [
        {
          name: 'teste',
          description: 'teste item 123',
          unitPrice: 20,
          quantity: 5,
          tangible: true,
        },
      ],
      paymentMethods: [
        {
          paymentType: 'pix',
          expiresIn: 360,
        },
        {
          paymentType: 'credit',
          installments: 1,
        },
        {
          paymentType: 'boleto',
          expiresDate: '2022-11-10T00:00:00.000Z',
          instructions: 'Teste 123',
          interest: {
            days: 3,
            amount: 1000,
            percentage: null,
          },
          fine: {
            days: 3,
            amount: null,
            percentage: 80,
          },
        },
      ],
      createdAt: '2022-06-03T21:47:36.826Z',
      updatedAt: '2022-06-03T21:47:36.826Z',
    }
  }
}
