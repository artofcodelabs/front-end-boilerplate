const fs = require("fs");
const { merge } = require("webpack-merge");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const common = require("./webpack.common.js");

const appDirectory = fs.realpathSync(process.cwd());

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new ImageminPlugin({
      pngquant: {
        quality: "95-100",
      },
    }),
  ],
  output: {
    publicPath: `${appDirectory}/public/assets/`,
  },
});
