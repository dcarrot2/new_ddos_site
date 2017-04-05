const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './new_blog/client'),
    entry: {
        app: './main.js'
    },
    output: {
        path: path.resolve(__dirname, './new_blog/static'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: '"production"'}
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            warnings: false
        })
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] }
            }],
            include: [
                path.resolve(__dirname, './new_blog/client')
            ]
         }
        ]
    }
};
