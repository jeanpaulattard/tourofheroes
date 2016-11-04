/**
 * Created by Jean-paul.attard on 06/09/2016.
 */
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

const ENV = process.env.npm_lifecycle_event;
process.env.AOT = ENV === 'build:aot' || ENV === 'server:aot';

const PROD = ENV === 'build' || ENV === 'build:aot';
if (PROD) {
    process.env.ENV = 'production'
}

module.exports = {
    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
        'app': process.env.AOT === 'true' ? './src/main.aot' : './src/main'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ 'node_modules' ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'awesome-typescript-loader' },
                    { loader: 'angular2-template-loader' },
                    {
                        loader: 'angular2-router-loader',
                        options: {
                            loader: 'system',
                            aot: process.env.AOT === 'true' ? true : false,
                            genDir: 'compiled/src/app'
                        }
                    }
                ]
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