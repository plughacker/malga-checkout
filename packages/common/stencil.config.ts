import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { inlineSvg } from 'stencil-inline-svg'

export const config: Config = {
  namespace: 'malga-checkout-common',
  plugins: [
    inlineSvg(),
    sass({
      injectGlobalPaths: [
        'src/assets/styles/mixins.scss',
        'src/assets/styles/theme.scss',
        'src/assets/styles/typography.scss',
        'src/assets/styles/utils.scss',
        'src/assets/styles/breakpoints.scss',
      ],
    }),
  ],
  outputTargets: [
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
