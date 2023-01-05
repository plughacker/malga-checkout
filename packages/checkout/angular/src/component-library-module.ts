import { NgModule } from '@angular/core'
import { defineCustomElements } from '@malga-checkout/core/loader'

import { MalgaCheckout } from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = [MalgaCheckout]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class MalgaCheckoutModule {}
