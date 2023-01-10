import { NgModule } from '@angular/core'
import { defineCustomElements } from '@malga-checkout/core/loader'

import { MalgaCheckoutFull } from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = [MalgaCheckoutFull]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class MalgaCheckoutModule {}
