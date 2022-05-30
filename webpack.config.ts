'use strict';

import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
    mode: 'development',
    devServer: {
        bonjour: true,
        port: 3000,
        open: true,
        hot: true,
        http2: true,
        liveReload: true,
    },
    parallelism: 8,
    optimization: {
        minimize: true,
        checkWasmTypes: true,
        mangleWasmImports: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.tsx'],
    },
    experiments: {
        asyncWebAssembly: true
    },
    "output":{
        publicPath: "auto"
    },
    plugins: [
        new HtmlWebpackPlugin({ inject: true, template: './public/index.html', favicon: './public/favicon.ico'})
    ]
}

export default config;