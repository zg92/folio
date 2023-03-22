const fs = require('fs')
const path = require('path')
const { getConfig } = require('./log')

const createFile = (dirPath, selectedFolder, fileName) => {
	const setFileName = !fileName ? selectedFolder : fileName
	fs.openSync(path.join(dirPath, `${setFileName}.${getConfig('jsType')}`), 'w')
	fs.openSync(path.join(dirPath, `${setFileName}.${getConfig('cssType')}`), 'w')
}

module.exports = createFile
