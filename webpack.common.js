const path = require('path')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: './config/test.env' })
} else if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config({ path: './config/dev.env' })
}

module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['babel-plugin-transform-class-properties']
                    }
                }   
            }
        ]   
    },
    plugins: [
       new webpack.DefinePlugin({
           'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
           'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
           'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
           'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
           'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
           'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
           'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
           'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
       })
    ]
}