/**
 * Created by Jean-paul.attard on 06/09/2016.
 */

var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
        'app': './src/main'
    },
    
    resolve: {
        extensions: ['', '.js', '.ts']
    },
};