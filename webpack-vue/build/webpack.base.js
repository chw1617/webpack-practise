const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')//这块可以结合vue-loader官网查看
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve('publice/index.html')
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            }
        ]
    }
}