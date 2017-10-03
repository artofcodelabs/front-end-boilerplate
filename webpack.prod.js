const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const common = require('./webpack.common.js');

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      minimize: true
    }
  }
];

const config = merge.smart(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        use: styleLoaders
      },
      {
        test: /\.(sass|scss)$/,
        use: styleLoaders
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});

module.exports = config;
