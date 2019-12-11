const path = require('path'); //reads path of files to be used
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config({path: '.env.development'})
}

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //always targeting the right directory
        filename: 'bundle.js' //stores everything
    },
    module: {
        rules:[{
            loader: 'babel-loader', // converts the JS code to browser compatible JS
            test:  /\.js$/, // browser to only handle JS5
            exclude: /node_modules/  //do not run files in node modules
        }, {
            test: /\.s?css$/, //browse handles sass files and converts to css
            use:[
                'style-loader', //handles structure and style
                'css-loader', 
                'sass-loader' // handles conversion from scss to css
            ]
             
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify (process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify (process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify (process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify (process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify (process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify (process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify (process.env.FIREBASE_APP_ID)
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),//creates server and checks the paths so as to run server
        historyApiFallback: true 
    }
}