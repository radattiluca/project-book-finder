const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: {
    index: { import: "./src/js/index.js" },
  },
  mode: "production",
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: "img-optimize-loader",
          options: {
            compress: {
              mode: "low",
            },
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 50000,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
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
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, "src/components/img/logo_favicon.png"),
      favicons: {
        appName: "Book Finder",
        appDescription: "Book Finder",
        developerName: "Rado94",
        developerURL: "https://github.com/radattiluca",
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: true,
          windows: false,
          yandex: false,
        },
      },
    }),
  ],
  devServer: {
    open: true,
    static: path.resolve(__dirname, "dist"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
};
