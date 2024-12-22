const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/login.html'),
            filename: 'login.html',
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/register.html'),
            filename: 'register.html',
            alwaysWriteToDisk: true
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },

    mode: 'development',
    devServer: {
        watchFiles: ['./src/index.html', './src/login.html', './src/register.html'],
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
}