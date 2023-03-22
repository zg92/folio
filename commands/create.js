const { getConfig } = require('../utilities/log')
const { folderCreateController } = require('../utilities/getDirs')

const create = {
	command: 'create [fileName]',
	describe:
		'Create an HTML or JSX file and corresponding CSS or SCSS file in specified file.',
	builder: (yargs) => {
		yargs.option('fileName', {
			type: 'string',
			alias: 'f',
			describe: 'Name of the files to be created in the specified folderPath.',
			optional: true
		})
	},
	handler: async (yargs) => {
		folderCreateController(getConfig('baseDir'), yargs.fileName)
	}
}

module.exports = create
