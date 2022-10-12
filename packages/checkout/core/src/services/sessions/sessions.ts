import { Api } from '../api'
import { normalizePaymentSession } from './session.utils'
import { Session, SessionNormalized } from './sessions.types'

export class Sessions {
  readonly api: Api

  constructor() {
    this.api = new Api()
  }

  public async find(sessionId: string): Promise<SessionNormalized> {
    console.log(sessionId)
    // const response = await this.api.fetch({ endpoint: `/sessions/${sessionId}/external` })

    // return response.data

    const paymentSession: Session = {
      id: '872a3f19-fade-4030-8ade-e8bb7628b81a',
      name: 'Teste Pix Com 90 Minutos',
      status: 'canceled',
      isActive: false,
      clientId: '523afbe7-36dc-4654-9dba-e7167d0e5e2d',
      orderId: null,
      amount: 200,
      currency: 'BRL',
      capture: true,
      merchantId: '922599f9-3c42-47eb-b476-f7d62de656c3',
      dueDate: '2022-07-28',
      description: null,
      statementDescriptor: null,
      items: [
        {
          name: 'test',
          description: null,
          unitPrice: 200,
          quantity: 1,
          tangible: null,
        },
      ],
      paymentLink: 'https://dashboard.dev.plugpagamentos.com/27c3ee9dcf8b',
      paymentMethods: [
        {
          paymentType: 'pix',
          expiresIn: 5400,
        },
        {
          paymentType: 'credit',
          installments: 1,
        },
        {
          paymentType: 'boleto',
          expiresDate: '2022-12-31',
          instructions: 'Instruções para pagamento do boleto',
          interest: {
            days: 1,
            amount: 100,
          },
          fine: {
            days: 2,
            amount: 200,
          },
        },
      ],
      createdAt: '2022-07-27T14:53:56.120Z',
      updatedAt: '2022-08-22T16:37:15.455Z',
      publicKey: '',
      settings: {
        id: '3b70910d-d6b7-40a0-9552-f9061a2951a1',
        email: 'lucas@plugpagamentos.com',
        phone: '21 98280-3863',
        statementDescription: 'Teste Settings',
        logo: 'https://seeklogo.com/images/H/homer-logo-6EDC5778F0-seeklogo.com.png',
        mainColor: '#fff000',
        secondaryColor: null,
        attentionColor: null,
        errorColor: null,
        successColor: null,
        backgroundColor: null,
        companyName: 'PlugPag',
        clientId: '523afbe7-36dc-4654-9dba-e7167d0e5e2d',
        documentNumber: '011001001001000010',
        language: 'pt_BR',
      },
    }

    return normalizePaymentSession(paymentSession)
  }
}
