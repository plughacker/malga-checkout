import { NgModule } from '@angular/core'
import { defineCustomElements } from '@plug-checkout/core/loader'

import { PlugCheckout } from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = [PlugCheckout]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class PlugCheckoutModule {}
