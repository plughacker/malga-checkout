/* eslint-disable */

/*
  Script created to modify a line where the 'package.json' with the library version is imported in the directory dist/collection/services/charges/charges.js.
  In this directory, it is not possible to have a package.json file because the structure is a specification used only by Stencil and can break the build.
  Therefore, we insert the version manually via a script.
*/

const fs = require('fs')
const path = require('path')

const { version } = require('../package.json')

const distFileWithSdkVersion = path.resolve(
  __dirname,
  '..',
  'dist',
  'collection',
  'components',
  'malga-checkout-full',
  'malga-checkout-full.js',
)

fs.readFile(distFileWithSdkVersion, 'utf8', (readError, content) => {
  if (readError) {
    console.error(
      'Error when reading the file where the library version replacement will be done:',
      err,
    )
    return
  }

  const newContent = content.replace(
    `import { version } from '../../../package.json'`,
    `const version = '${version}'`,
  )

  fs.writeFile(distFileWithSdkVersion, newContent, 'utf8', (err) => {
    if (err) {
      console.error(
        'Error when replacing the library version in the build',
        err,
      )
      return
    }

    console.log('Library version replacement done successfully')
    return
  })
})
