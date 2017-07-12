/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './rxjs.imports';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}

require('./css/forms.css');
require('./css/styles.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

platformBrowserDynamic().bootstrapModule(AppModule);