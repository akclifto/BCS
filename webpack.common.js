const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      pages: path.resolve(__dirname, 'src/pages'),
      browser: path.resolve(__dirname, 'src/routes'),
      routes: path.resolve(__dirname, 'src/routes'), 
        router: path.resolve(__dirname, 'src/routes/router'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      title: 'Production',
    }),
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js',
  },
};
