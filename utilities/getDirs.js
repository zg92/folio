const fs = require('fs')
const prompts = require('prompts')
const path = require('path')
const colors = require('ansi-colors')
const { getCreateDirInfo } = require('./createDir')
const createFile = require('./createFiles')

const getDirs = (dirPath) => {
	const existingDirs = fs.readdirSync(dirPath)
	const dirsArray = []
	existingDirs.map((item) => {
		let tempObj = {}
		tempObj['title'] = item
		tempObj['value'] = item
		dirsArray.push(tempObj)
	})
	if (dirsArray.length > 0) {
		return dirsArray
	} else {
		console.log(
			colors.red.bold('There are no folders within the specified directory.')
		)
	}
}

const createNestPrompt = async () => {
	const existingFiles = await prompts({
		type: 'select',
		name: 'createNest',
		message: colors.white.bold(
			'Do you want to create a folder here or explore its contents?'
		),
		choices: [
			{ name: 'Create', value: 'create' },
			{ name: 'View Nested', value: 'nested' }
		]
	})
	return existingFiles.createNest
}

const listDirs = async (dirPath) => {
	const existingFiles = await prompts({
		type: 'select',
		name: 'dirSelect',
		message: colors.white.bold(
			'Which directory do you want to create files in?'
		),
		choices: getDirs(dirPath)
	})
	return existingFiles.dirSelect
}

const folderCreateController = async (dirPath, fileName) => {
	const selectedFolder = await listDirs(dirPath)
	const action = await createNestPrompt()
	if (action === 'nested') {
		await folderCreateController(path.join(dirPath, selectedFolder), fileName)
	} else if (action === 'create') {
		const createdFolder = await getCreateDirInfo(
			path.join(dirPath, selectedFolder)
		)
		createFile(createdFolder.path, createdFolder.latestPath, fileName)
	}
}

module.exports = { folderCreateController }
