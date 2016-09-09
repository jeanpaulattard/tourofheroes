/**
 * Created by Jean-paul.attard on 09/09/2016.
 */
Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

let appContext = (<{ context?: Function }>require).context('../src', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);

let coverageContext = (<{ context?: Function }>require).context('../src/app', true, /\.ts/);
coverageContext.keys().forEach(coverageContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
