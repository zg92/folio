const fs = require('fs')
const colors = require('ansi-colors')

const checkExists = async (dirPath) => {
	if (fs.existsSync(dirPath)) {
		console.log(colors.red.bold('That directory already exists.'))
		return false
	} else {
		return true
	}
}

module.exports = checkExists
