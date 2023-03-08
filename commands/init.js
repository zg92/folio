const { getConfig } = require('../utilities/log')
const setFilePath = require('../prompts/filepath')
const { setJS, setCSS } = require('../prompts/fileType')

const init = {
    command: 'init [dirPath]',
    describe: 'Initalize the creation of a new folder group for React',
    builder: (yargs) => {
        yargs
        .positional('dirpath', {
          type: 'string',
          describe: 'Path of root directory containing "src" directory in your React project.'
    })},
    handler: async () => {
        await setFilePath()
        await setJS()
        await setCSS()


      
    }


}

module.exports = init
  