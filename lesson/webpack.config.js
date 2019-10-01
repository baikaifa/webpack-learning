const path = require("path");
module.exports = {
  //   mode: "production",
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            //placeholder 占位符
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 1024 //大于limit打包到dist 小于则变为base64进入bundle.js
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules:true
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
