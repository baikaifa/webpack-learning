let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let CleanWebpackPlugin=require('clean-webpack-plugin');
let copyWebpackPlugin=require('copy-webpack-plugin');
let webpack = require('webpack');
module.exports={
    //1.cleanWebpackPlugin
    //2.copyWebpackPlugin
    //3.bannerPlugin 内置
    //多入口
    mode:'production',//production development
    entry:{
        home:'./src/index.js',
        other:'./src/other.js'
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            },
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
    resolve:{//解析 第三方包common
        modules:[path.resolve('node_modules')],
        extensions:['.js','.css','.json','.vue']//扩展引入文件的后缀名
        //mainFields:['style','main']//入口文件的名字，默认index.js 先找style，再找main
        // alias:{//别名
        //     bootstrap:'bootstrap/dist/css/bootstrap.css'
        // }
    },
    // devServer:{
    //     //3.有服务端不想用代理来处理，能不能在服务端中启动webpack 端口用服务器端口
        
    //     //2前端只想单纯来模拟数据
    //     // before(app){//提供的方法 钩子
    //     //     app.get('/user',(req,res)=>{
    //     //         res.json({name:'珠峰架构-before'})
    //     //     })
    //     // }
    //     //1
    //     // proxy:{//重写的方式 把请求代理到express服务器上
    //     //     '/api':{
    //     //         target:'http://localhost:3000',
    //     //         pathReWrite:{'/api':''}
    //     //     }//配置了一个代理
    //     // }
    // },
    //1.源码映射 会单独生成一个sourcemap文件 出错了会标识当前报错的列和行 大而全
    //devtool:'source-map',//增加映射文件 可以帮我们调试源代码
    //2.不会产生单独的文件 但是可以显示行和列
    //devtool:'eval-source-map',
    //3.不会产生列 但是是一个单独的映射文件
    //devtool:'cheap-module-source-map',//产生后你可以保留起来
    //4.不会产生文件 集成在打包后的文件中 不会产生列
    // devtool:'cheap-module-eval-source-map',
    // watch:true,
    // watchOptions:{//监控的选项
    //     poll:1000,//每秒问1000次
    //     aggregateTimeout:500,  //防抖 输入过程过多长时间开始打包
    //     ignored:/node_modules/  //不需要监控那个文件
    // },

    output:{
        //[name]home,ohter
         filename:'[name].js',
         path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new webpack.DefinePlugin({
            DEV:JSON.stringify('production'),  //console.log('dev')
            FLAG:'true',
            EXPRESSION:JSON.stringify('1+1')
            // DEV:"'production'" //console.log('dev'); production
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',//输出文件的名称
        }),
        // new CleanWebpackPlugin(),
        // new copyWebpackPlugin([
        //     {from:'./doc',to:''}
        // ]),
        // new webpack.BannerPlugin('make 2019 by jw')
    ]
}