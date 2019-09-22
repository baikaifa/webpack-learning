// import React from 'react';
// import { render } from 'react-dom'

// render(<h1>jsx</h1>, window.root);
// // import  jquery from 'jquery'
// // import  moment  from 'moment'
// // //设置语言


// // //手动引入所需要的语言
// // import  'moment/locale/zh-cn';
// // moment.locale('zh-cn');

// // let r = moment().endOf('day').fromNow();
// // console.log(r);

// import  calc from './test';
// //import 在生产环境下 会自动去除没用代码
// //tree-shaking把没用到的代码 自动删除掉
// console.log(calc.sum(1,2));

 //es6模块会把结果放到default上
 //require不支持tree-shaking
// let calc=require('./test');
// console.log(calc.default.sum(1,2));


//scope hosting 作用于提升
// import  calc from './test';
// let a=1;
// let b=2;
// let c=3;
// let d=a+b+c;//在webpack中自动省略一些可以简化的代码
// console.log(d,'-----------------');
// console.log(calc.default,sum(1,2));

import  './a';
import  './b';
console.log('index.js');
import  $ from 'jquery'
console.log($);