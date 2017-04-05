const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './new_blog/client'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './new_blog/static'),
        filename: '[name].bundle.js'
    }
};
