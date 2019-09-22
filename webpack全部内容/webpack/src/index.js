//webpack打包图片
//1.在js中创建图片来引入
//2.在css中引入 background('url')
//3. <img src="" alt=""/>
//file-loader默认会在内部生成一张图片到build目录下
//把生成的图片的名字返回回来
import  './index.css';
import logo from './logo.png';
let image = new Image();
image.src = logo;
document.body.appendChild(image);
// import  $ from 'jquery';
//expose-laoder暴露 全局的loader 内敛loader 后置postloader
// console.log(window.$);//在每个模块中注入$对象
//引入第三方模块的方法
//1.expose-loader 暴露到window上
//2.providePlugin给每个人提供一个$
//3.引入不打包

// let str=require('./a.js');
// console.log(str);

// require('./index.css');

// require('./index.less');

// let fn=()=>{
//     console.log('log');
// }
// fn();
// @log
// class A{//new A() a=1
//     a=1;
// }
// let a=new A();
// console.log(a.a);

// function log(target){
//     console.log(target,'23');
// }