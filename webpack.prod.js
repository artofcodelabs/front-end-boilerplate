/* eslint-env node */
const fs = require("fs");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const common = require("./webpack.common.js");

const appDirectory = fs.realpathSync(process.cwd());

module.exports = merge.smart(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }
        ]
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
