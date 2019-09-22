let path=require('path');
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build'),//必须是绝对路径
    }
}