let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode: 'production',
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
    },
    devServer: {
        hot:true,//启用热更新
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    module: {
        noParse: /jquery/,//不去解析jquery中的依赖关系
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins:[
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
            }
        ]
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //     manifest:path.resolve(__dirname,'dist','manifest.json')
        // }),
        new webpack.IgnorePlugin(/\.\/local/, /moment/),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.NamedModulesPlugin(),//打印更新的模块路径
        new webpack.HotModuleReplacementPlugin()//热更新插件
    ]
}