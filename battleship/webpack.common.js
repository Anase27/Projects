const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Thank god its working',
        }),
    ],
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    }
}