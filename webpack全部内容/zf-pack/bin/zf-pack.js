#! /usr/bin/env node
//1找到当前执行名的路径 拿到webpack.config.js
let path=require('path');
//config配置文件
console.log(typeof path.resolve('webpack.config.js'));
// let config=require(path.resolve('webpack.config.js'));
let config=require(path.resolve(''));
let Compiler=require('../lib/Compiler.js');
let compiler=new Compiler(config);
//标识运行编译
compiler.run();