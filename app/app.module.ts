/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService } from 'angular2-in-memory-web-api/index';

import { AppComponent } from './app.component';

import { AppConfig, HeroDIConfig } from './app.config';
import { routing } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [ BrowserModule, CoreModule, FormsModule, HttpModule, routing, SharedModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: AppConfig, useValue: HeroDIConfig }
    ]
})

export class AppModule {
}