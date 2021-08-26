import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target'
import { reactOutputTarget } from '@stencil/react-output-target'
import {
  ComponentModelConfig,
  vueOutputTarget,
} from '@stencil/vue-output-target'
import { inlineSvg } from 'stencil-inline-svg'

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['checkout-input', 'checkout-select'],
    event: 'changed',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['checkout-input', 'checkout-select'],
    event: 'inputed',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['checkout-input'],
    event: 'blurred',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['checkout-input'],
    event: 'focused',
    targetAttr: 'value',
    type: 'text',
  },
]

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['checkout-input', 'checkout-select'],
    event: 'changed',
    targetAttr: 'value',
  },
  {
    elements: ['checkout-input', 'checkout-select'],
    event: 'inputed',
    targetAttr: 'value',
  },
  {
    elements: ['checkout-input'],
    event: 'blurred',
    targetAttr: 'value',
  },
  {
    elements: ['checkout-input'],
    event: 'focused',
    targetAttr: 'value',
  },
]

export const config: Config = {
  namespace: 'plug-checkout',
  plugins: [
    inlineSvg(),
    sass({
      injectGlobalPaths: [
        'src/assets/styles/mixins.scss',
        'src/assets/styles/theme.scss',
        'src/assets/styles/typography.scss',
        'src/assets/styles/utils.scss',
      ],
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@plug-checkout/core',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: '@plug-checkout/core',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@plug-checkout/core',
      proxiesFile: '../vue/src/proxies.ts',
      includeDefineCustomElements: false,
      includePolyfills: false,
      componentModels: vueComponentModels,
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
