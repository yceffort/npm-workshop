const path = require('path')

module.exports = {
  env: {}, 
  generateEtags: true,
  webpack: (config, options) => {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./src/utils/polyfills.js')
      ) {
        entries['main.js'].unshift('./src/utils/polyfills.js')
      }

      return entries
    }

    // workaround for dedupe react in server env.
    if (options.isServer) {
      config.externals = ['react', ...config.externals];
    }

    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');

    return config
  },
}