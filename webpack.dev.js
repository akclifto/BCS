const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// loader, test rule using ' /.sometext$/ '  is called 'regular expression'
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
});
