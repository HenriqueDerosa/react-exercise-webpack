const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Dotenv = require('dotenv-webpack')

/* TODO: Apply @type here */
module.exports = [
  new BundleAnalyzerPlugin({
    analyzerMode:
      process.env.NODE_ENV === 'development' ? 'server' : 'disabled',
    openAnalyzer: process.env.NODE_ENV !== 'development',
  }),
  new HtmlWebpackPlugin({
    favicon: './dist/favicon',
    template: './dist/index.html',
    filename: './index.html',
  }),
  new Dotenv(),
]
