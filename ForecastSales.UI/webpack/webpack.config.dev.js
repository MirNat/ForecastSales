var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'inline-source-map'
});