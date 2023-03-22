const fs = require('fs')
const prompts = require('prompts')
const colors = require('ansi-colors')
const path = require('path')
const { config } = require('../utilities/log')

const setFilePath = async () => {
	const baseDir = await prompts({
		type: 'text',
		name: 'fp',
		message: colors.white.bold("Which directory contains the 'src' directory?")
	})

	if (fs.existsSync(path.join(baseDir.fp))) {
		await config().set('baseDir', path.join(baseDir.fp))
		console.log(
			colors.green(
				`File path has been set as ${colors.yellow.bold(path.join(baseDir.fp))}`
			)
		)
	} else {
		console.log(colors.red.bold("That filepath doesn't exist."))
	}
}

module.exports = setFilePath
