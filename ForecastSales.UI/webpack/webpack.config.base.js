var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'index': ['babel-polyfill', './src/index.js']
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: config.distFolder
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                }],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].bundle.css'),
        new CopyWebpackPlugin([{ from: 'public' }])
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    }
};