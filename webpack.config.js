var path = require('path');
var webpack = require('webpack');

module.exports = {
	resolve: {
            alias: {
                "app": path.join(__dirname, "./js")
            }
    },
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        // publicPath: "http://localhost:3000/dist/",//本地地址
        publicPath: "http://www.7k.cn/", //测试地址
        // publicPath: "http://s.qiudashi.com/qds/v/1.0.1/qds/dist/", //线上地址
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.(jpg|png|gif|svg)$/, loader: "url-loader"},
            { test: /\.art$/, loader: "art-template-loader", options: {
                // htmlMinifier: htmlMinifier,
                htmlMinifierOptions: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                }
            }}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ]
};