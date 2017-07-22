var path = require('path');
var webpack = require('webpack');
//devServer allow the application(css,html,js) to run on a server
//devServer.inline alows hot reloading on development server
module.exports = {
    devServer: {
        inline: true,
        contentBase: './frontEnd',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './frontEnd/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: ['style-loader!css-loader!sass-loader']
            }
        ]
    },
    output: {
        path: 'frontEnd',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
