const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    index: "./src/js/index.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        test: /\.jsx?$/,
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Book Finder",
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
  devServer: {
    port: 3000,
    open: true,
    static: path.resolve(__dirname, "dist"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
