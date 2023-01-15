const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.dev.js");

module.exports = merge(common, {
  entry: {
    index: ["./src/index", "webpack-hot-middleware/client"],
    page1: ["./src/page1", "webpack-hot-middleware/client"],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
