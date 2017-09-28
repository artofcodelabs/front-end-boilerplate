const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
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
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  }
};
