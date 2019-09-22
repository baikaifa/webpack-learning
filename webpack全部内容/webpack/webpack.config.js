//webpack是node写出来的 node写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    optimization: {//优化项
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCss()
        ]
    },
    mode: 'development',//模式 默认两种 production development
    entry: './src/index.js',//入口
    output: {
        filename: 'bundle.js',//打包后的文件名
        path: path.resolve(__dirname, 'build'),//路径必须是一个绝对路径
        //publicPath:'http://www.zhufengpeixun.cn'
    },
    plugins: [//数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new webpack.ProvidePlugin({//在每个模块中都注入$
            $:'jquery'
        })
    ],
    externals:{
        'jquery':'$'
    },
    module: {//模块
        //loader
        rules: [//规则 css-loader 解析@import这种语法
            //style-loader  把css插入到head标签中
            //loader的特点 希望单一
            //loader的用法 字符串只用一个loader
            //多个loader需要[]
            //loader的顺序，默认是从右向左执行,从下到上执行
            //loader还可以携程对象方式
            // {
            //     test:require.resolve('jquery'),
            //     use:'expose-loader?$'
            // },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'eslint-loader',
            //         options: {
            //             enforce: 'pre'//previous
            //         }
            //     },

            // },
            {
                test:/\.html$/,
                use:'html-withimg-loader'
            },
            {
                    test:/\.(png|jpg|gif)$/,
                    //做一个限制当图片小于多少k的时候用base64来转化
                    //否则用file-loader产生真实的图片
                    use:{
                        loader:'url-loader',
                        options:{
                            limit:1,
                            outputPath:'/img/',
                            publicPath:'http://www.zhufengpeixun.cn'
                        }
                    }
            },
            {
                test: /\.js$/,//normal 普通的loader
                use: {
                    loader: 'babel-loader',
                    options: {//用babel-loader 需要把es6-es5
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                //可以处理css文件
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                //可以处理less文件
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',//@import 解析路径
                    'postcss-loader',
                    'less-loader'//把less->css
                ]
            },
        ]
    }
}