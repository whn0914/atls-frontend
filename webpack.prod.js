var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },

    resolve: {
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot','babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({

            beautify: false,

            mangle: { screw_ie8: true },

            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        })
    ]
}