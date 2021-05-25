const { default: merge } = require("webpack-merge")
const webpackCommon = require("./webpack.common")
const path = require('path')

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader',
                ],
                // include: path.resolve(__dirname, '../../public/')
            }
        ]
    }
})