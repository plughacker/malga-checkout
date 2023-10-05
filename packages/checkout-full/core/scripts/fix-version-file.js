/* eslint-disable */

// Script created to generate a package.json with the current library version in the root of the 'dist'.
// It is used within 'dist/collection/services/charges/charges.js' to ensure that the library version is correctly sent to 'appInfo'.

const fs = require('fs')
const path = require('path')

const { version } = require('../package.json')

const distFiles = path.resolve(__dirname, '..', 'dist')
const libVersionFile = 'package.json'
const pathToLibVersionFile = path.join(distFiles, libVersionFile)

const libVersionFileContent = JSON.stringify({ version }, null, 2)

fs.writeFile(pathToLibVersionFile, libVersionFileContent, 'utf8', (err) => {
  if (err) {
    console.error('Error when creating the version file:', err)
  } else {
    console.log('Version file successfully created into:', pathToLibVersionFile)
  }
})
