const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            // Reference (https://webpack.js.org/loaders/file-loader/)
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW()
    ]
}









// // import 'path'
// // import 'webpack'
// // import 'html-webpack-plugin'
// // import 'clean-webpack-plugin'
// // import 'workbox-webpack-plugin'
// // import 'mini-css-extract-plugin'
// // import 'optimize-css-assets-webpack-plugin'
// // import 'terser-webpack-plugin'
// // import 'workbox-webpack-plugin'

// const path = require('path')
// const webpack = require('webpack')
// const HtmlWebPackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

// module.exports = {
//     entry: './src/client/index.js',
//     mode: 'production',
//     module: {
//         rules: [
//             {
//                 test: '/\.js$/',
//                 exclude: /node_modules/,
//                 loader: "babel-loader"
//             },
           
//             {
//                 test: /\.scss$/,
//                 use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
//             },
         
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: './src/client/views/index.html',
//             filename: './index.html'
//         }),

//         // new CleanWebpackPlugin({
//         //     // Simulate the removal of files
//         //     dry: true,
//         //     // Write Logs to Console
//         //     verbose: true,
//         //     // Automatically remove all unused webpack assets on rebuild
//         //     cleanStaleWebpackAssets: true,
//         //     protectWebpackAssets: false
//         // }),
//         new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
//         new WorkboxPlugin.GenerateSW(),
//     ],
//     optimization: {
//         // TODO: Add Optimization for JS and CSS
//     }
// }
