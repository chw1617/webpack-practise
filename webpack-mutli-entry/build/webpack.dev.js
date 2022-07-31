const base = require('./webpack.base')
const {merge} = require('webpack-merge')
module.exports = merge(base,{
    mode:'development',
    //源文件映射
    devtool:"eval-cheap-module-source-map",
    //启动一个开发环境
    devServer:{
        port:'5000',
        hot:true
    }
})