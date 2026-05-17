const fs = require('fs')
const path = require('path')
const { withDangerousMod } = require('@expo/config-plugins')

const RAW_ASSET_NAME = 'octopus.riv'

function withRiveRawAsset(config) {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      const projectRoot = config.modRequest.projectRoot
      const sourcePath = path.resolve(projectRoot, 'assets', RAW_ASSET_NAME)
      const destinationDir = path.resolve(projectRoot, 'android', 'app', 'src', 'main', 'res', 'raw')
      const destinationPath = path.join(destinationDir, RAW_ASSET_NAME)

      if (!fs.existsSync(sourcePath)) {
        throw new Error(`Missing Rive asset: ${sourcePath}`)
      }

      fs.mkdirSync(destinationDir, { recursive: true })
      fs.copyFileSync(sourcePath, destinationPath)

      return config
    },
  ])
}

module.exports = withRiveRawAsset