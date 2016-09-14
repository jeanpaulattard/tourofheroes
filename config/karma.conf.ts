/**
 * Created by Jean-paul.attard on 06/09/2016.
 */

var webpackConfig = require('./webpack.test');

module.exports = function (config: any) {
    var _config = {
        basePath: '',

        frameworks: [ 'jasmine' ],

        plugins: [
            'karma-jasmine',
            'karma-sourcemap-writer',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-remap-istanbul',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        files: [
            './config/karma-test-shim.js'
        ],

        preprocessors: {
            './config/karma-test-shim.js': [
                'webpack', 'sourcemap'
            ]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: [ 'spec', 'coverage'/*, 'karma-remap-istanbul' */],

        //remapIstanbulReporter: {
        //    src: 'coverage/unit/chrome/coverage-final.json',
        //    reports: {
        //        html: 'coverage',
        //    },
        //},

        coverageReporter: {
            reporters: [
                { type: 'html' },
            ],
            dir: 'coverage/unit/',
            subdir: (browser: any) => {
                return browser.toLowerCase().split(/[ /-]/)[ 0 ];
            }
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