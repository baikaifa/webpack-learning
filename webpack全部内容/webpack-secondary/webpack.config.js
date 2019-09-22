let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
module.exports = {
    optimization: {//优化项
        minimizer: [
            new OptimizeCss()
        ]
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './build',
        open: true
    },
    mode: 'development',//production ,development
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'build'),//必须是绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // minify: {
            //     removeAttributeQuotes: true,
            //     collapseWhitespace: true,
            // }
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    }
}