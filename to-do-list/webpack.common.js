const path = require('path');

module.exports = {
	entry: "./src/index.js",

	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|avif|jpeg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'Images/[name].[fullhash][ext]'
				}
			},
		]
	}
}