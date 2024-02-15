const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css'
        }),
        new CleanWebpackPlugin(),
    ],

    module:{
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, //2. extract css into file
                    'css-loader' //1. Turns Css into common.js or processes css to make it usable within js file
                ],
            },
        ],
    },
});