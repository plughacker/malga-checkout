import { NgModule } from '@angular/core'
import { defineCustomElements } from '@plug-checkout/core/loader'

import { PlugCheckoutFull } from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = [PlugCheckoutFull]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class PlugCheckoutModule {}
