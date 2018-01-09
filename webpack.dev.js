const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  entry: {
    index: ["./src/index"],
    page1: ["./src/page1"]
  },
  plugins: [],
  output: {
    publicPath: "/assets/"
  }
});
