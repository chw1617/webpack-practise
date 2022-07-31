## webpack 解决什么问题
1. 处理静态文件，包含文件之间的依赖，依赖loader处理成js
2. 打包成更小的bundle.js文件
3. 强大的plugin插件系统，动态生成html
4. 模块热更新，修改文件之后可以同步更新到浏览器
5. sorcemap可以进行错误定位

## 补充、转换es6,jsx 支持
1. babel babel-loader
## css文件隔离
1. css modules
2. css 前缀自动补全 postcss postcss-loader auotprefixer
3. css 抽取 mini-css-extract-plugin

## 图片，字体静态文件处理
 test:/\.(jpe?g|gif|png|svg|woff|woff2)/,//图片，字体
 type: 'asset/resource',