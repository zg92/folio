const fs = require('fs')
const path = require('path')
const colors = require('ansi-colors')
const checkExists = require('./checkDirExists')
const prompts = require('prompts')

const createDir = (folderPath) => {
	fs.mkdirSync(folderPath)
	console.log(
		colors.green.bold(`Created a folder at ${colors.yellow.bold(folderPath)}`)
	)
}

const getCreateDirInfo = async (dirPath) => {
	const fileTypeJS = await prompts({
		type: 'text',
		name: 'createDirInfo',
		message: colors.white.bold('What should the name of the folder be?')
	})
	if (checkExists(path.join(dirPath + `/${fileTypeJS.createDirInfo}`))) {
		createDir(path.join(dirPath + `/${fileTypeJS.createDirInfo}`))
		return {
			path: dirPath + `/${fileTypeJS.createDirInfo}`,
			latestPath: fileTypeJS.createDirInfo
		}
	}
}

module.exports = { createDir, getCreateDirInfo }
