/* TODO: Apply @type here */
module.exports = [
  {
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'swc-loader',
    },
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
]
