# react-start
前言：简单搭配react开发环境

## 一、新建一个文件夹，然后npm初始化项目，使用命令npm init，会生成一个package.json依赖包

![image](https://github.com/mzongx/react-start/blob/master/images/01.png)
![image](https://github.com/mzongx/react-start/blob/master/images/02.png)

## 二、安装react所需要的模块，创建入口文件
`npm i react react-dom babelify --save` <br> 
`npm i babel-preset-es2015 babel-preset-react --save` (这是为了在代码中使用ES6和JSX)<br> 
![image](https://github.com/mzongx/react-start/blob/master/images/03.png)<br> 

目录结构，在根目录创建一个src目录，来放源代码，在src的js创建一个index.js入口文件<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/04.png)<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/05.png)<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/06.png)<br> 

此时项目是运行不起来的，因为上面的包需要webpack来编译，否则识别不了jsx和require语法<br> 
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

安装babel-loader之后，需要再根目录创建一个.babelrc的文件，配置一下内容，才可以解析<br> 
![image](https://github.com/mzongx/react-start/blob/master/images/11.png)<br> 

![image](https://github.com/mzongx/react-start/blob/master/images/12.png)

#### 5.在终端中运行webpack
![image](https://github.com/mzongx/react-start/blob/master/images/13.png)

#### 6.成功

![image](https://github.com/mzongx/react-start/blob/master/images/14.png)