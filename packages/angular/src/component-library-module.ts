import { NgModule } from '@angular/core'
import { defineCustomElements } from '@plug-checkout/core/loader'

import {} from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = []

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
