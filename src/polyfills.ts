/**
 * Created by Jean-paul.attard on 06/09/2016.
 */

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone.js/dist/zone';

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}