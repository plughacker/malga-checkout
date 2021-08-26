import { NgModule } from '@angular/core'
import { defineCustomElements } from '@plug-checkout/core/loader'

import {
  PlugCheckout,
  PlugCheckoutForm,
  CheckoutButton,
  CheckoutCreditCard,
  CheckoutErrorMessage,
  CheckoutIcon,
  CheckoutInput,
  CheckoutSelect,
  CheckoutTypography,
} from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = [
  PlugCheckout,
  PlugCheckoutForm,
  CheckoutButton,
  CheckoutCreditCard,
  CheckoutErrorMessage,
  CheckoutIcon,
  CheckoutInput,
  CheckoutSelect,
  CheckoutTypography,
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class PlugCheckoutModule {}
