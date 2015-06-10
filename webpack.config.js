'use strict';

var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
// PATHS
var PATHS = {
    app: __dirname + '/app',
};
module.exports = {
    context: PATHS.app,
    entry: {
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    output: {
        path: PATHS.app,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!jshint',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=res/[name].[ext]?[hash]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract
                    (
                        'style-loader',
                        'css-loader?module&importLoaders=1&localIdentName=[name]--[local]-[hash:base64:5]!postcss-loader!sass?indentedSyntax'
                    )
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate/!html'
            }
        ],
    },
    postcss: [
        require('autoprefixer-core')
    ],
    resolve: {
        modulesDirectories: ['node_modules']
    },

    plugins: [
      new ExtractTextPlugin('style.css', {allChunks: true}),
  ]
};
