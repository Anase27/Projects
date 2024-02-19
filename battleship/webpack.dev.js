const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    
    module:{
		rules:[
			{
				test: /\.css$/i,
				use:[
					'style-loader', //2. inject styles into DOM
					'css-loader' //1. Turns Css into common.js or processes css to make it usable within js file
				]
			},
		],
	},
});