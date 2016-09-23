/**
 * Created by Jean-paul.attard on 23/09/2016.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';

if (process.env.ENV === 'production') {
    enableProdMode();
}

require('./css/forms.css');
require('./css/styles.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);