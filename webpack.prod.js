const fs = require("fs");
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");
const merge = require("webpack-merge");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
/* eslint-enable import/no-extraneous-dependencies */
const common = require("./webpack.common.js");

const appDirectory = fs.realpathSync(process.cwd());

const styleLoaders = [
  {
    loader: "css-loader",
    options: {
      minimize: true
    }
  }
];

module.exports = merge.smart(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
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
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        BABEL_ENV: JSON.stringify("production")
      }
    }),
    new ImageminPlugin({
      pngquant: {
        quality: "95-100"
      }
    })
  ],
  output: {
    publicPath: `${appDirectory}/public/assets/`
  }
});
