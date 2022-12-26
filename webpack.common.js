const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postcssOptions = require("./postcss.config.js");

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, "src", "js"),
      path.join(__dirname, "src", "css"),
      path.join(__dirname, "src", "images"),
      "node_modules",
    ],
  },
  entry: {
    page1: "./src/page1",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: postcssOptions },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: "commons",
          minChunks: 2,
          minSize: 5000, // The default is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "all",
          name: "vendor",
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, "public/assets"),
    publicPath: "/assets/",
  },
};
