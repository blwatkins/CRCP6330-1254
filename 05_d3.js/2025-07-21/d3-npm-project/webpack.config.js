const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { optimize } = require('webpack');

module.exports = {
    entry: './src/viz.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Visualization',
            inject: 'body'
        })
    ],
    optimization: {
        emitOnErrors: false,
        minimize: true
    },
    output: {
        path: path.resolve(__dirname, 'out/dist'),
        clean: true
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        open: true,
        webSocketServer: false
    }
};
