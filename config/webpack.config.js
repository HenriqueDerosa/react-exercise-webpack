const path = require('path')

const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
const resolve = require('./webpack.resolve')
const optimization = require('./webpack.optimization')

/** @typedef {import('webpack').Configuration} WebpackConfiguration */
/** @type {WebpackConfiguration} */
const config = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  ...(process.env.NODE_ENV === 'development' && {
    devtool: 'inline-source-map',
  }),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  optimization,
}
module.exports = config
