const Configstore = require('configstore')
const packageJson = require('../package.json')

const config = () => {
  const configStore = new Configstore(packageJson)
  return configStore
}

const getConfig = (key) => {
    const baseDir = config().get(key)
    return baseDir
}

module.exports = {config, getConfig}