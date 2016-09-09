/**
 * Created by Jean-paul.attard on 09/09/2016.
 */

var helpers = require('./helpers');

module.exports = {
    'devtool': 'inline-source-map',

    resolve: {
        extensions: [ '', '.ts', '.js' ]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                query: {
                    sourceMap: false,
                    inlineSourceMap: true
                }
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

        postLoaders:[
            {
                test: /\.(js|ts)$/,
                loader: 'istanbul-instrumenter-loader',
                include: helpers.root('src'),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]
    }
};