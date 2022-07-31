const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry:{
        pagea:'./src/pagea.js',
        pageb:'./src/pageb.js'
    },
    output:{
        filename:'[name].js',
        path:resolve('dist')
    },
    //非js：css，img等静态文件,利用loader转换成js
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(le|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader, //抽离css
                    'css-loader',
                    'less-loader',
                    {
                        loader:"postcss-loader",
                        options: {
                            postcssOptions: {
                              plugins: [
                                ["autoprefixer"], //css 自动添加前缀
                              ],
                            },
                          },
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/\.(jpe?g|gif|png|svg|woff|woff2)/,//图片，字体
                type: 'asset/resource',
            }
        ]
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            template:resolve('public/pagea.html'),
            filename:'pagea.html',
            chunks:['pagea']
        }),
        new HtmlWebpackPlugin({
            template:resolve('public/pageb.html'),
            filename:'pageb.html',
            chunks:['pageb']
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new CleanWebpackPlugin()
    ]

}