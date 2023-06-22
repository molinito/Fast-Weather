const webpack = require('webpack');

module.exports = function override(config, env) {
  // Agrega los polyfills necesarios para los módulos de Node.js
  config.resolve.fallback = {
    os: require.resolve('os-browserify/browser'),
    crypto: require.resolve('crypto-browserify')
  };

  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve('buffer/'),
  };

  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
  };
  

  // Configura el plugin de webpack para definir las variables de entorno
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }));

  return config;
};
