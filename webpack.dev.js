const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index",
    page1: "./src/page1",
  },
});
