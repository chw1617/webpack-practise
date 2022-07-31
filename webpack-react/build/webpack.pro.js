const base = require('./webpack.base')
const {merge} = require('webpack-merge')
module.exports = merge(base,{
    mode:'production',
    //源文件映射
    devtool:"hidden-source-map"
})