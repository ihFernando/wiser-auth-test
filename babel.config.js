module.exports = function (api) {
  api.cache(true)

  const presets = [
    'next/babel',
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }]
  ]

  const plugins = ['jsx-control-statements', 'babel-plugin-styled-components']

  return {
    presets,
    plugins,
    env: {
      production: {
        plugins: [['react-remove-properties', { properties: ['data-testid'] }]]
      }
    }
  }
}
