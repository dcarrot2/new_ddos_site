const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './new_blog/client'),
    entry: {
        app: './main.jsx'
    },
    output: {
        path: path.resolve(__dirname, './new_blog/static'),
        filename: '[name].stuff.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
