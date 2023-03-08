const fs = require('fs')
const path = require('path')
const { getConfig } = require('./log')

const createFile = (yargs) => {
    const fileName = !yargs.fileName ? yargs.folderPath : yargs.fileName
    fs.openSync(path.join(getConfig('baseDir'), yargs.folderPath, `${fileName}.${getConfig('jsType')}`), 'w')
    fs.openSync(path.join(getConfig('baseDir'), yargs.folderPath, `${fileName}.${getConfig('cssType')}`), 'w')
}

module.exports = createFile