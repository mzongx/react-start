const webpack = require('webpack')
const path = require('path') // path是node的一个模块，用来操作路径
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirname = path.resolve(__dirname, "./src/")
module.exports = {
  context: dirname, // 基础目录，将相对路径转为绝对路径，用于从配置中解析入口起点(entry point)和 loader
  entry: [
    './js/index.js'
  ], // 入口文件[string|array]
  module: { // 这里写loader,用于对源代码转换，import时预处理文件，比如：css-loader
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/ // 不包括node_modules目录
      }
    ]
  },
  output: { // 出口文件
    path: dirname, // 目标输出目录 path 的绝对路径
    filename: 'bundle.js', // 用于输出文件的文件名
    publicPath: '/'
  },
  devServer: {
    contentBase: './', // 告诉服务器从哪个目录中提供内容,也就是静态文件index.html
    inline: true,
    publicPath: '/', // 此路径下的打包文件可在浏览器中访问http://localhost:8080/bundle.js
    compress: true, // 一切服务都启用 gzip 压缩
    hot: true, // 开启HMR，必须配合HotModuleReplacementPlugin
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  mode: 'development' // 这是webpack4.0要求配置的
}