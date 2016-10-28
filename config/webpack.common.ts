/**
 * Created by Jean-paul.attard on 06/09/2016.
 */
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
        'app': './src/main'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ 'node_modules' ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [ 'awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader?aot=true&genDir=compiled/src/app' ]
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file',
                options: {
                    name: 'assets/[name].[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: [ {
                        loader: 'css', options: {
                            sourceMap: true
                        }
                    } ]
                })
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'app', 'vendor', 'polyfills' ]
        }),
        new HTMLWebpackPlugin({ template: 'src/index.html' })
    ]
};