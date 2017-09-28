const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    page1: './src/page1.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public/*.js', 'public/*.js.map'], {
      exclude: [],
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  }
};
