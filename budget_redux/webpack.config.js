const path = require('path'); //reads path of files to be used

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
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),//creates server and checks the paths so as to run server
        historyApiFallback: true 
    }
}