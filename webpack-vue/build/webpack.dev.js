const base = require('./webpack.base')
const {merge} = require('webpack-merge')
module.exports = merge(base,{
    mode:'development',
    devtool:'eval-cheap-module-source-map',
    //本地开发服务器
    devServer:{
        port:'8000',
        hot:true
    }
})