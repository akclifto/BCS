const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: "./src/app.js",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        // use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          "file-loader",
          "url-loader",
          // 'file-loader?name=[name].[ext].webp!webp-loader?{quality: 65}',
          // 'file-loader?name=[name].[ext]',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      containers: path.resolve(__dirname, "src/containers"),
      pages: path.resolve(__dirname, "src/pages"),
      // browser: path.resolve(
      //   __dirname,
      //   "node_modules/@types/react-router-dom/index.d.ts"
      // ),
      routes: path.resolve(__dirname, "src/routes"),
      styles: path.resolve(__dirname, "src/styles"),
    },
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      title: "Production",
    }),
  ],
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "[name].bundle.js",
  },
};
