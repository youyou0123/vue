#### 启动命令
npm run dev
#### 打包命令
npm run build


#### 新建项目流程与依赖配置

###### 新建项目文件夹
vue init webpack  “项目名称”

###### 安装cli命令
npm install --g vue-cli

###### 框架vant安装命令
npm i vant -S
###### 自动按需引入框架组件
npm i babel-plugin-import -D


###### vuex安装命令
npm install vuex --save

###### axios安装命令
npm install axios --save

###### 安装预处理器stylus 和 stylus-loader
npm i stylus --save
npm i stylus-loader --save

###### promise兼容IE
npm i es6-promise -S

###### 打包后生成很大的.map文件的问题
在config/index.js文件中，设置productionSourceMap: false,就可以不生成.map文件

###### 查看打包后各文件的体积
npm run build --report


#### 针对移动端的配置
主菜单/index.html
<html>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
</html>

##### 添加整体样式文件和处理1像素边框问题
src/assets/styles/rest.css
src/assets/styles/border.css

###### 解决移动端延迟300毫秒问题
npm i fastclick --save
