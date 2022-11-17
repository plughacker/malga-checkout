/* eslint-disable */

const fs = require('fs')
const path = require('path')

// Proxies

const oldBuildFileProxies = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'proxies.ts',
)
const newBuildFileProxies = path.resolve(__dirname, 'files', 'proxies.ts')

const fixedBuildFileProxies = fs.readFileSync(newBuildFileProxies, 'utf8')

fs.writeFile(oldBuildFileProxies, fixedBuildFileProxies, (error) => {
  if (error) throw error

  console.log('[Checkout] [Vue] Update build file proxies.ts')
})

// Utils

const oldBuildFileUtils = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'vue-component-lib',
  'utils.ts',
)
const newBuildFileUtils = path.resolve(__dirname, 'files', 'utils.ts')

const fixedBuildFileUtils = fs.readFileSync(newBuildFileUtils, 'utf8')

fs.writeFile(oldBuildFileUtils, fixedBuildFileUtils, (error) => {
  if (error) throw error

  console.log('[Checkout] [Vue] Update build file vue-component-lib/utils.ts')
})
