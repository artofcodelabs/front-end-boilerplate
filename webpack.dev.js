const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: {
    index: [
      'webpack-hot-middleware/client',
      './src/index'
    ],
    page1: [
      'webpack-hot-middleware/client',
      './src/page1'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});
