/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService } from 'angular2-in-memory-web-api/index';

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BaseComponent } from './base/base.component';
import { BaseProtectedComponent } from './base-protected/base-protected.component';

@NgModule({
    imports: [ CoreModule, FormsModule, HttpModule, routing, SharedModule ],
    declarations: [ AppComponent, BaseComponent, BaseProtectedComponent ],
    bootstrap: [ AppComponent ],
    providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService }
    ]
})

export class AppModule {
}