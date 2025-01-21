const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: {
    index: "./src/js/index.js",
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
        use: ["style-loader", "css-loader", "sass-loader"],
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
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, "src/components/logo/logo_favicon.png"),
      favicons: {
        appName: "Book Finder",
        appDescription: "Book Finder",
        developerName: "Rado94",
        developerURL: "https://github.com/radattiluca",
        icons: {
          android: true,
          appleIcon: true,
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
    filename: "bundle.js",
  },
};
