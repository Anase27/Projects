const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'BonBon cafe',
        }),
        new MiniCssExtractPlugin({filename:'[name].[hash].css'}),
        new CleanWebpackPlugin()
    ],
    
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, //2 extract css into file
                    'css-loader' //1. Turns css into common.js
                ],
            },
        ],
    },
    
})