/**
 * Created by Jean-paul.attard on 09/09/2016.
 */
var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: [ '', '.ts', '.js' ]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [ 'awesome-typescript-loader?sourceMap=false&inlineSourceMap=true',
                           'angular2-template-loader' ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ],

        postLoaders: [
            {
                test: /^(.(?!\.spec))*\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    'node_modules',
                    /\.(e2e|spec)\.ts$/
                ]
            }
        ]
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ })
    ]
};