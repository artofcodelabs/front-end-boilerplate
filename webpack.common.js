/* eslint-env node */

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postCssOptions = require("./postcss.config.js");

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, "src", "js"),
      path.join(__dirname, "src", "css"),
      path.join(__dirname, "src", "images"),
      "node_modules"
    ]
  },
  entry: {
    index: "./src/index",
    page1: "./src/page1"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          { loader: "postcss-loader", options: postCssOptions }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/assets")
  }
};
