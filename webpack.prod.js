/* eslint-env node */
const fs = require("fs");
const merge = require("webpack-merge");
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
