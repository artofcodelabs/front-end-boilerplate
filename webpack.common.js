const path = require("path");
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/* eslint-enable import/no-extraneous-dependencies */

const postCssOptions = require("./postcss.config.js");

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, "src", "javascripts"),
      path.join(__dirname, "src", "css"),
      path.join(__dirname, "src", "images"),
      "node_modules"
    ]
  },
  entry: {
    vendor: [
      "loco-js-model",
      "prop-types",
      "react",
      "react-dom",
      "react-redux",
      "react-router-dom",
      "react-router-prop-types",
      "redux",
      "redux-thunk"
    ],
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
        test: /\.(styl|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "postcss-loader", options: postCssOptions },
            { loader: "stylus-loader" }
          ]
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "postcss-loader", options: postCssOptions },
            { loader: "sass-loader" }
          ]
        })
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
    new CleanWebpackPlugin(["public/assets"], {
      exclude: [],
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // The order of this array matters
      names: ["common", "vendor"],
      minChunks: 2
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/assets")
  }
};
