import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { angularOutputTarget } from '@stencil/angular-output-target'
import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'
import { inlineSvg } from 'stencil-inline-svg'

export const config: Config = {
  namespace: 'malga-checkout-full',
  plugins: [
    inlineSvg(),
    sass({
      injectGlobalPaths: [
        '../../common/src/assets/styles/mixins.scss',
        '../../common/src/assets/styles/theme.scss',
        '../../common/src/assets/styles/typography.scss',
        '../../common/src/assets/styles/utils.scss',
        '../../common/src/assets/styles/breakpoints.scss',
      ],
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@malga-checkout-full/core',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@malga-checkout-full/core',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@malga-checkout-full/core',
      proxiesFile: '../vue/src/proxies.ts',
      includeDefineCustomElements: false,
      includePolyfills: false,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
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
