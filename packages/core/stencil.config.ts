import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { angularOutputTarget } from '@stencil/angular-output-target'
import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'
import { inlineSvg } from 'stencil-inline-svg'

export const config: Config = {
  namespace: 'plug-checkout',
  plugins: [
    inlineSvg(),
    sass({
      injectGlobalPaths: [
        'src/assets/styles/base.scss',
        'src/assets/styles/theme.scss',
      ],
    }),
  ],
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
