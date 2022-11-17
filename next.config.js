const path = require('path')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const withCustomBabelConfigFile = require('next-plugin-custom-babel-config')

const nextConfig = {
  poweredByHeader: false,
  generateEtags: true,
  webpack: (config, {}) => {
    config.resolve.alias['@wiser/app'] = path.resolve(__dirname, './app')
    config.resolve.alias['@wiser/core'] = path.resolve(__dirname, './core')
    config.resolve.alias['@wiser/utils'] = path.resolve(
      __dirname,
      './core/utils'
    )
    config.resolve.alias['@wiser/hocs'] = path.resolve(__dirname, './core/hocs')
    config.resolve.alias['@wiser/components'] = path.resolve(
      __dirname,
      './components'
    )
    config.resolve.alias['@wiser/endpoints'] = path.resolve(
      __dirname,
      './core/endpoints'
    )
    config.resolve.alias['@wiser/types'] = path.resolve(__dirname, './types')
    config.resolve.alias['@wiser/assets'] = path.resolve(__dirname, './assets')

    return config
  }
}

module.exports = withPlugins(
  [
    [
      withImages,
      {
        inlineImageLimit: 512
      }
    ],
    [
      withCustomBabelConfigFile,
      {
        babelConfigFile: path.resolve('./babel.config.js')
      }
    ]
  ],
  nextConfig
)
