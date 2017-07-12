/**
 * Created by Jean-paul.attard on 09/09/2016.
 */
/**
 * Created by Jean-paul.attard on 09/09/2016.
 */
var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
    entry: {},
    devtool: 'inline-source-map',

    resolve: {
        extensions: [ '.ts', '.js' ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            sourceMap: false,
                            inlineSourceMap: true
                        }
                    },
                    { loader: 'angular2-template-loader' },
                    {
                        loader: 'angular2-router-loader',
                        options: {
                            loader: 'system'
                        }
                    }
                ],
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
            },
            {
                test: /^(.(?!\.spec))*\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    'node_modules',
                    /\.(e2e|spec)\.ts$/
                ],
                enforce: 'post'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /@angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src')
        ),
        new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ })
    ]
};