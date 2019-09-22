//webpack是node写出来的 node写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    mode: 'development',//模式 默认两种 production development
    entry: {
        home: './src/index.js',//入口
    },
    module: {//模块
        //loader
        rules: [
            {
                test:/\.js$/,use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',//打包后的文件名
        path: path.resolve(__dirname, 'build'),//路径必须是一个绝对路径
    },
    plugins: [//数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        })
    ]
}