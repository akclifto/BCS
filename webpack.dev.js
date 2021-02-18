const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// loader, test rule using ' /.sometext$/ '  is called 'regular expression'
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public', 'dist'),
        historyApiFallback: true,
        // publicPath: 'dist',
    },
});

//original webpack config file

// const path = require('path');

// // entry point (app.js) -> output final bundle file
// module.exports = (env) =>  {

//     const isProduction = env === 'production';
//     return {
//         mode: 'development',
//         entry: './src/app.js',
//         output: {
//             path: path.join(__dirname, 'public'),
//             filename: 'bundle.js'
//         },
//         // loader, test rule using ' /.sometext$/ '  is called 'regular expression'
//         module: {
//             rules: [{
//                 loader: 'babel-loader',
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             }, {
//                 test: /\.s?css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             }]
//         },
//         devtool: 'eval-source-map',
//         devServer: {
//             contentBase: path.join(__dirname, 'public'),
//             historyApiFallback: true,
//             publicPath: '/dist/'
//         }
//     }
// };
