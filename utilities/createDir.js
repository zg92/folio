const fs = require('fs')
const { getConfig } = require('../utilities/log')
const colors = require('ansi-colors')


const createDir = (yargs) => {
    fs.mkdirSync(getConfig('baseDir') + `/${yargs.folderPath}`)
    console.log(colors.green.bold(`Created a folder at ${colors.yellow.bold(yargs.folderPath)}`))


}

module.exports = createDir