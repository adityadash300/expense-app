const { default: merge } = require("webpack-merge")
const webpackCommon = require("./webpack.common")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(webpackCommon, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css'
    })],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
})