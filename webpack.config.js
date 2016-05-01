var webpack = require("webpack");
var path = require('path');

module.exports = {
	devtool: 'source-map',
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
	    sourceMapFilename: '[name].map',
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
		new webpack.HotModuleReplacementPlugin()
	]
}