const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, { 
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].[fullhash].js',
		path: path.resolve(__dirname,'dist'),
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[fullhash].css'
		}),
		new CleanWebpackPlugin(),
	],

	module:{
		rules:[
			{
				test: /\.css$/i,
				use:[
					MiniCssExtractPlugin.loader,//2 extract css into file
					'css-loader' //1. Turns Css into common.js or processes css to make it usable within js file
				],
			},
		],
	},

	optimization: {
		minimizer:[
			new CssMinimizerPlugin(),
		]
	}
    
});