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

loader是一个打包的方案:webpack不能识别非js结尾的后缀文件，通过laoder让webpack识别出来
module: {
    rules: [
      {
        test: /.jpg$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
  cnpm i url-loader -D
  cnpm i style-loader css-loader -D
  cnpm i sass-loader node-sass -D
  loader的顺序从下到上，从右到左
  cnpm i postcss-loader -D
  cnpm i autoprefixer -D