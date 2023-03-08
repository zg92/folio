const fs = require('fs')
const prompts = require('prompts')
const colors = require('ansi-colors')
const path = require('path')
const { config } = require('../utilities/log')

const setFilePath = async () => {
const baseDir = await prompts({
    type: 'text',
    name: 'fp',
    message: colors.white.bold(
      "Which directory contains the 'src' directory?"
    )
  })

  if (fs.existsSync(path.join(baseDir.fp, 'src'))) {
    await config().set('baseDir', path.join(baseDir.fp, 'src'))
    console.log(colors.green(`File path has been set as ${colors.yellow.bold(path.join(baseDir.fp, 'src'))}`))
  } else {
    console.log(colors.red.bold("That filepath doesn't exist or the specified filepath does not contain a src folder."))
  }
}
  

  module.exports = setFilePath