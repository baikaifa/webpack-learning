//ES Module模块引入方式
//CommonJS模块引入规范
//CMD
//ADM
//webpack 模块打包工具

切换输出名字
const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "bundle")
  }
};
更换webpack.config.js的名字
npx webpack --config webpackconfig.js

cnpm i file-loader -D

loader是一个打包的方案
