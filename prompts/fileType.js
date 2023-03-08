const prompts = require('prompts')
const colors = require('ansi-colors')
const { config } = require('../utilities/log')


const setJS = async () => {
const fileTypeJS = await prompts({
    type: 'select',
    name: 'jsType',
    message: colors.white.bold(
      "What type of JS file do you want to create?"
    ),
    choices: [
        { title: 'Vanilla JS', value: 'js' },
        { title: 'JSX', value: 'jsx' }
      ]

  })

  await config().set('jsType', fileTypeJS.jsType)
}

const setCSS = async () => {
    const fileTypeCSS = await prompts({
        type: 'select',
        name: 'cssType',
        message: colors.white.bold(
          "What type of CSS file do you want to create?"
        ),
        choices: [
            { title: 'CSS', value: 'css' },
            { title: 'SCSS', value: 'scss' }
          ]
      })
      await config().set('cssType', fileTypeCSS.cssType)
}

module.exports = {setJS, setCSS}