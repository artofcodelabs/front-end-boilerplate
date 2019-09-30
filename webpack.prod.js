/* eslint-env node */

const fs = require("fs");
const cssnano = require("cssnano");
const merge = require("webpack-merge");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const common = require("./webpack.common.js");

const appDirectory = fs.realpathSync(process.cwd());

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new ImageminPlugin({
      pngquant: {
        quality: "95-100"
      }
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
  ],
  output: {
    publicPath: `${appDirectory}/public/assets/`
  }
});
