const colors = require('ansi-colors')
const fs = require('fs')
const createDir = require('../utilities/createDir')
const createFile = require('../utilities/createFiles')
const { getConfig } = require('../utilities/log')

const create = {
    command: 'create [folderPath] [fileName]',
    describe: 'Create an HTML or JSX file and corresponding CSS or SCSS file in specified file.',
    builder: (yargs) => {
        yargs
        .positional('folderPath', {  
          type: 'string',
          describe: 'Path of folder that will contain the created JS/JSX and CSS/SCSS files.',
          nargs: 1,

    })
    .positional('fileName', {  
        type: 'string',
        describe: 'Name of the files to be created in the specified folderPath.',
        optional: true,
        nargs: 1,

  })
},
    handler: async (yargs) => {
        if (!yargs.folderPath) {
            console.log(colors.red.bold('A folder path must be specified.'))
        }
        else {
            if (fs.existsSync(getConfig('baseDir') + `/${yargs.folderPath}`)) {
                console.log(colors.red.bold('The specified directory already exists'))
            }
            else {
                createDir(yargs)
                createFile(yargs)

                
            }
        }
    }
}

module.exports = create