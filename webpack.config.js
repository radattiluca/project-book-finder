const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: {
    index: "./src/js/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
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
      minify: {
        collapseWhitespace: true, // Minimizza gli spazi vuoti
        removeComments: true, // Rimuovi i commenti
        removeRedundantAttributes: true,
      },
    }),
    new Dotenv(),
  ],
  devServer: {
    open: true,
    static: path.resolve(__dirname, "dist"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
        },
      }),
    ],
  },
};
