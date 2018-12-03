# react-start
  前言：简单搭配react开发环境

## 一、新建一个文件夹，然后npm初始化项目，使用命令npm init，会生成一个package.json依赖包

![image](https://github.com/mzongx/react-start/blob/master/images/01.png)
![image](https://github.com/mzongx/react-start/blob/master/images/02.png)

## 二、安装react所需要的模块，创建入口文件
`npm i react react-dom babelify --save` <br> 
`npm i babel-preset-es2015 babel-preset-react --save` (这是为了在代码中使用ES6和JSX)  
      
![image](https://github.com/mzongx/react-start/blob/master/images/03.png)<br> 

目录结构，在根目录创建一个src目录，来放源代码，在src的js创建一个index.js入口文件<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/04.png)<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/05.png)<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/06.png)<br> 

此时项目是运行不起来的，因为上面的包需要webpack来编译，否则识别不了jsx和require语法    
![image](https://github.com/mzongx/react-start/blob/master/images/07.png)<br> 

## 三、安装，配置webpack
#### 1. 先全局安装webpack，主要用来webpack命令行 <br>
`npm webpack webpack-dev-server -g`

#### 2.在目录的文件夹继续安装 <br>
`npm webpack webpack-dev-server -save`<br> 
webapck4.0版本要安装webpack-cli才可以使用webpack命令。<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/08.png)
#### 3.在根目录创建一个webpack.config.js配置webpack,此时的目录结构
![image](https://github.com/mzongx/react-start/blob/master/images/09.png)

#### 4.webpack.config.js配置
需要安装babel-loader,用来解析es6语法等，
此时的package.json<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/10.png)

安装babel-loader之后，需要再根目录创建一个.babelrc的文件，配置一下内容，才可以解析    
![image](https://github.com/mzongx/react-start/blob/master/images/11.png)<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/12.png)

#### 5.在终端中运行webpack
![image](https://github.com/mzongx/react-start/blob/master/images/13.png)

#### 6.成功

![image](https://github.com/mzongx/react-start/blob/master/images/14.png)  
  
## 四、 热加载&自动刷新  
在热加载之前，每次修改index.js中的内容就需要再webpack编译一次，这样很麻烦，而热加载就能再修改代码的同时自动刷新浏览器  
  
### 1.如果使用webpack --watch命令的话，会实时监测文件改动，无需重新编译webpack，需要手动刷新浏览器。  
![image](https://github.com/mzongx/react-start/blob/master/images/15.png)  
  
### 2.使用webpack-dev-server实现自动刷新  
  
命令行直接输入`webpack-dev-server`，就可以实现自动刷新（这是iframe模式）  
但是需要将本地index.html的js链接改为http://localhost:8080/bundle.js,才可以（因为本地是不改变的，编译的是虚拟的）。  
参考：[相关devServer问题](https://segmentfault.com/q/1010000007299989)  
[webpack配置](https://webpack.docschina.org/configuration/dev-server/#devserver-publicpath-) 
  
### 3.自动刷新是整个页面都会刷新，而热加载会只会刷新局部(inline模式)  
  
上面的热加载是通过命令行实现的，为了方便，我们把它写进配置
  ![image](https://github.com/mzongx/react-start/blob/master/images/16.png)  
然后把package.json中的script改为  
  
`"dev": "webpack-dev-server --config webpack.config.js"`  
然后启动`npm run dev`来编译，成功启动了热加载  
   ![image](https://github.com/mzongx/react-start/blob/master/images/17.png)  
### 5.自动把js文件加入都html中，使用html-webpack-plugin插件  
  
先安装`npm i html-webpack-plugin --save`  
  
 ![image](https://github.com/mzongx/react-start/blob/master/images/18.png)  

然后配置webpack.config.js文件  
```const HtmlWebpackPlugin = require('html-webpack-plugin')
new HtmlWebpackPlugin({
  title: 'React Demo',
  template: path.resolve(__dirname, 'index.html')
})
```
  
执行 npm run dev，就可以看到自动加入了js  
 ![image](https://github.com/mzongx/react-start/blob/master/images/19.png)


