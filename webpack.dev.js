const { default: merge } = require("webpack-merge")
const webpackCommon = require("./webpack.common")
const path = require('path')

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'eval-nosources-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
})