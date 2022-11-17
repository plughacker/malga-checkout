/* eslint-disable */

const fs = require('fs')
const path = require('path')

const oldBuildFile = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'directives',
  'proxies.ts',
)
const newBuildFile = path.resolve(__dirname, 'files', 'proxies.ts')

const fixedBuildFile = fs.readFileSync(newBuildFile, 'utf8')

fs.writeFile(oldBuildFile, fixedBuildFile, (error) => {
  if (error) throw error

  console.log('[Checkout] [Angular] Update build file')
})
