/**
 * Created by Jean-paul.attard on 06/09/2016.
 */

var webpackConfig = require('./webpack.test');

module.exports = function (config: any) {
    var _config = {
        basePath: '',

        frameworks: [ 'jasmine' ],

        files: [
            {
                pattern: './config/karma-test-shim.js', watched: false
            }
        ],

        preprocessors: {
            './config/karma-test-shim.js': [ 'webpack' ]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: [ 'progress', 'coverage' ],

        coverageReporter: {
            dir: 'coverage/unit/',
            reporters: [
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage.json'
                }
            ]
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        autoWatchBatchDelay: 5000, // 5 seconds

        // Need to install launchers for firefox, opera, ie and safari
        browsers: [ 'PhantomJS', 'Chrome', /**'Firefox', 'Opera', 'IE', 'Safari'**/ ],

        singleRun: true
    };

    config.set(_config);
};