import { Api } from '../api'
import { normalizePaymentSession } from './session.utils'
import { SessionNormalized } from './sessions.types'

export class Sessions {
  readonly api: Api

  constructor() {
    this.api = new Api()
  }

  public async find(sessionId: string): Promise<SessionNormalized> {
    const response = await this.api.fetch({
      endpoint: `/sessions/${sessionId}/link`,
    })

    return normalizePaymentSession(response.data)
  }
}
