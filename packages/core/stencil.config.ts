import { Config } from '@stencil/core'

import { angularOutputTarget } from '@stencil/angular-output-target'
import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'

export const config: Config = {
  namespace: 'plug-checkout',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@plug-checkout/core',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@plug-checkout/core',
      proxiesFile: '../react/src/components.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@plug-checkout/core',
      proxiesFile: '../vue/src/proxies.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
}
