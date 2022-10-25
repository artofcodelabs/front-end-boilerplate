const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    page1: ["./src/page1", "webpack-hot-middleware/client"],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
