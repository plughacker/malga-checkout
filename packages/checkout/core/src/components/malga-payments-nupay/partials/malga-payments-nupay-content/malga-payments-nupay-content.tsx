//import { t } from '@malga-checkout/i18n'
import { Component, Host, h, ComponentInterface } from '@stencil/core'

@Component({
  tag: 'malga-payments-nupay-content',
  styleUrl: 'malga-payments-nupay-content.scss',
})
export class MalgaPaymentsNuPayContent implements ComponentInterface {
  render() {
    return (
      <Host class={{ 'malga-payments-nupay-content__container': true }}>
        <h4>Mais rápido, fácil e seguro.</h4>
        <h5>Novidade</h5>
        <p>
          Você pode ter um limite extra para essa compra! Verifique no momento
          do pagamento se está disponível.
        </p>
        <ul>
          <li>• A compra será finalizada no app do Nubank.</li>
          <li>• Parcele sua compra no crédito ou pague à vista pelo débito.</li>
          <li>• Não precisa preencher os dados do seu cartão.</li>
          <li>
            • Pode confiar, é seguro. Sua compra é protegida pelas nossas
            medidas de segurança.
          </li>
        </ul>
        <small>
          Para usar essa forma de pagamento, você{' '}
          <strong>
            precisa ser cliente do Nubank e ter limite de crédito ou saldo
            disponível
          </strong>{' '}
          na conta.
        </small>
      </Host>
    )
  }
}
